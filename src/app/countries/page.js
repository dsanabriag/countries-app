"use client";

import { useState, useEffect } from "react";

export default function CountriesPage() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags,latlng");
        if (!response.ok) {
          throw new Error("No se pudo obtener la información de los países.");
        }
        const data = await response.json();
        setCountries(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-xl text-blue-600 font-semibold animate-pulse">Cargando países...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded">
        <p className="font-bold">Error</p>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Lista de Países</h1>
      
      <div className="flex flex-col space-y-2 max-w-2xl mx-auto">
        {countries.map((country, index) => (
          <div 
            key={index} 
            className="bg-white p-4 rounded shadow hover:shadow-md transition-shadow cursor-default"
          >
            <p className="text-lg font-medium text-gray-800">
              {country.name.common}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
