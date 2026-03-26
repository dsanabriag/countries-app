import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get('name');
    const region = searchParams.get('region');

    let url = 'https://restcountries.com/v3.1/all';

    // Si hay búsqueda por nombre, usar ese endpoint
    if (name) {
      url = `https://restcountries.com/v3.1/name/${encodeURIComponent(name)}`;
    }
    // Si hay filtro por región, usar ese endpoint
    else if (region) {
      url = `https://restcountries.com/v3.1/region/${region}`;
    }

    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      // Si no encuentra resultados en búsqueda por nombre, retornar array vacío
      if (response.status === 404 && name) {
        return NextResponse.json([]);
      }
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();

    // Transformar datos para mostrar información útil
    const formattedData = data.map((country) => ({
      cca2: country.cca2,
      name: country.name?.common || country.name?.official || 'Unknown',
      flag: country.flags?.unicode || '🏳️',
      region: country.region,
      capital: country.capital?.[0] || 'N/A',
      population: country.population || 0,
      languages: country.languages 
        ? Object.values(country.languages).join(', ')
        : 'N/A',
      currency: country.currencies 
        ? Object.values(country.currencies)[0]?.name || 'N/A'
        : 'N/A',
      timezone: country.timezones?.[0] || 'N/A',
      area: country.area || 'N/A',
    }));

    // Ordenar alfabéticamente
    formattedData.sort((a, b) => a.name.localeCompare(b.name));

    return NextResponse.json(formattedData);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Error fetching countries data' },
      { status: 500 }
    );
  }
}
