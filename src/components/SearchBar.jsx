'use client';

export default function SearchBar({ onSearch }) {
  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="🔍 Buscar país por nombre..."
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
