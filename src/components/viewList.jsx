'use client';

import { useState, useEffect } from 'react';
import CountryCard from './CountryCard';
import SearchBar from './SearchBar';
import RegionFilter from './RegionFilter';

export default function ViewList() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedRegion, setSelectedRegion] = useState(null);

  useEffect(() => {
    fetchCountries();
  }, []);

  // Filtrar países cuando cambia la búsqueda o región
  useEffect(() => {
    let filtered = countries;

    if (search) {
      filtered = filtered.filter((country) =>
        country.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (selectedRegion) {
      filtered = filtered.filter((country) => country.region === selectedRegion);
    }

    setFilteredCountries(filtered);
  }, [search, selectedRegion, countries]);

  const fetchCountries = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/countries');
      const data = await response.json();
      setCountries(data);
      setFilteredCountries(data);
    } catch (error) {
      console.error('Error fetching countries:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (value) => {
    setSearch(value);
  };

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">Explorar Países</h1>
      <p className="text-gray-600 mb-8">
        Descubre información detallada de países alrededor del mundo. Usa la búsqueda o filtra por región.
      </p>

      <SearchBar onSearch={handleSearch} />
      <RegionFilter onRegionChange={handleRegionChange} />

      <div className="mb-4 text-gray-600">
        <p>Se encontraron <span className="font-bold text-blue-600">{filteredCountries.length}</span> países</p>
      </div>

      {filteredCountries.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">
            No se encontraron países que coincidan con tu búsqueda.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCountries.map((country) => (
            <CountryCard key={country.cca2} country={country} />
          ))}
        </div>
      )}
    </div>
  );
}
