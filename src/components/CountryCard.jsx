'use client';

export default function CountryCard({ country }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-200">
      <div className="text-5xl mb-4">{country.flag}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{country.name}</h3>
      <div className="space-y-2 text-sm text-gray-600">
        <p>
          <span className="font-semibold">Capital:</span> {country.capital || 'N/A'}
        </p>
        <p>
          <span className="font-semibold">Región:</span> {country.region}
        </p>
        <p>
          <span className="font-semibold">Población:</span> {country.population?.toLocaleString() || 'N/A'}
        </p>
        <p>
          <span className="font-semibold">Idiomas:</span> {country.languages || 'N/A'}
        </p>
        <p>
          <span className="font-semibold">Moneda:</span> {country.currency || 'N/A'}
        </p>
      </div>
    </div>
  );
}
