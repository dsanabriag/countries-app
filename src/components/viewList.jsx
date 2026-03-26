'use client';

import { useState, useEffect } from 'react';
import CountryCard from './CountryCard';

export default function ViewList() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/countries');
      const data = await response.json();
      setCountries(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error fetching countries:', error);
      setCountries([]);
    } finally {
      setLoading(false);
    }
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
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Explorar Países</h1>

      <div className="mb-4 text-gray-600">
        <p>Se encontraron <span className="font-bold text-blue-600">{countries.length}</span> países</p>
      </div>

      {countries.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">
            No hay países disponibles en este momento.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {countries.map((country, index) => (
            <CountryCard 
              key={country.id || country.cca3 || index} 
              country={country} 
            />
          ))}
        </div>
      )}
    </div>
  );
}