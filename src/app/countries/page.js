"use client";

import { useState, useEffect } from "react";

export default function CountriesPage() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags,latlng");
        if (!response.ok) {
          throw new Error("No se pudo obtener la información de los países.");
        }
        const data = await response.json();
        // Ordenamos alfabéticamente
        data.sort((a, b) => a.name.common.localeCompare(b.name.common));
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

  // Función para obtener las monedas como string
  const getCurrencies = (currenciesObj) => {
    if (!currenciesObj) return "No disponible";
    return Object.values(currenciesObj)
      .map((c) => `${c.name} (${c.symbol})`)
      .join(", ");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Explorador de Países</h1>
      
      <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto">
        
        {/* Lista de países */}
        <div className="md:w-1/3 bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden flex flex-col h-[70vh]">
          <div className="bg-gray-100 p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-700">Lista de países</h2>
          </div>
          <div className="flex-1 overflow-y-auto p-2 space-y-2">
            {countries.map((country, index) => {
              const isActive = selectedCountry && selectedCountry.name.common === country.name.common;
              return (
                <button
                  key={index}
                  onClick={() => setSelectedCountry(country)}
                  className={`w-full text-left p-3 rounded transition-colors ${
                    isActive 
                      ? "bg-blue-600 text-white shadow" 
                      : "bg-gray-50 text-gray-800 hover:bg-blue-100 hover:text-blue-900 border border-gray-100"
                  }`}
                >
                  <p className="font-medium">
                    {country.name.common}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detalles del país */}
        <div className="md:w-2/3">
          {!selectedCountry ? (
            <div className="h-full flex flex-col items-center justify-center bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-10 text-center">
              <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <h3 className="text-xl font-medium text-gray-600 mb-2">Selecciona un país</h3>
              <p className="text-gray-500">Haz clic en un país de la lista a la izquierda para ver todos sus detalles aquí.</p>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <div className="h-48 md:h-64 w-full bg-gray-100 relative">
                <img 
                  src={selectedCountry.flags.svg || selectedCountry.flags.png} 
                  alt={`Bandera de ${selectedCountry.name.common}`} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">{selectedCountry.name.common}</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-1">Capital</p>
                    <p className="text-lg text-gray-800 font-medium">
                      {selectedCountry.capital ? selectedCountry.capital[0] : "No tiene capital"}
                    </p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-green-600 uppercase tracking-wider mb-1">Moneda</p>
                    <p className="text-lg text-gray-800 font-medium">
                      {getCurrencies(selectedCountry.currencies)}
                    </p>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg md:col-span-2">
                    <p className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-1">Ubicación (Lat, Lng)</p>
                    <p className="text-lg text-gray-800 font-medium flex items-center gap-2">
                      <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                      </svg>
                      {selectedCountry.latlng ? `${selectedCountry.latlng[0]}, ${selectedCountry.latlng[1]}` : "Desconocida"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
