import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-2xl hover:text-blue-200 transition">
          🌍 Countries App
        </Link>
        <div className="flex gap-6">
          <Link 
            href="/" 
            className="hover:text-blue-200 transition font-medium"
          >
            Inicio
          </Link>
          <Link 
            href="/countries" 
            className="hover:text-blue-200 transition font-medium"
          >
            Países
          </Link>
        </div>
      </nav>
    </header>
  );
}
