export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} CountriesApp - Todos los derechos reservados.</p>
        <p className="text-sm mt-2 text-gray-400">Proyecto Universitario - Desarrollo Web</p>
      </div>
    </footer>
  );
}
