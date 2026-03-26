'use client';

const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

export default function RegionFilter({ onRegionChange }) {
  return (
    <div className="mb-8">
      <label className="block text-sm font-semibold text-gray-700 mb-3">
        Filtrar por Región
      </label>
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => onRegionChange(null)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
        >
          Todos
        </button>
        {regions.map((region) => (
          <button
            key={region}
            onClick={() => onRegionChange(region)}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition font-medium"
          >
            {region}
          </button>
        ))}
      </div>
    </div>
  );
}
