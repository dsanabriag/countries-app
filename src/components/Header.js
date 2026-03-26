import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link href="/">CountriesApp</Link>
        </h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-blue-200 transition-colors">Inicio</Link>
            </li>
            <li>
              <Link href="/countries" className="hover:text-blue-200 transition-colors">Funcionalidad</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
