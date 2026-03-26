export async function getCountries(params = {}) {
  try {
    // Construir query string
    const queryParams = new URLSearchParams();
    if (params.name) queryParams.append('name', params.name);
    if (params.region) queryParams.append('region', params.region);

    const query = queryParams.toString() ? `?${queryParams.toString()}` : '';
    const response = await fetch(`/api/countries${query}`);
    
    if (!response.ok) {
      throw new Error('Error fetching countries');
    }
    
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    return [];
  }
}
