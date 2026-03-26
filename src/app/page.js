import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">🌍 Countries App</h1>
        <p className="text-xl text-gray-600 mb-8">
          Una aplicación para explorar información detallada de países alrededor del mundo.
        </p>
        <p className="text-lg text-gray-500 mb-8">
          Accede a datos de capital, población, idiomas, monedas y más de manera rápida y sencilla.
        </p>
        <Link
          href="/countries"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition"
        >
          Ver Países →
        </Link>
      </div>
    </div>
  );
}
