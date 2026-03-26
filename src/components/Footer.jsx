export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Sobre la App</h3>
            <p className="text-gray-300">
              Aplicación para explorar información de países en tiempo real.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Información</h3>
            <ul className="text-gray-300 space-y-2">
              <li>API: Rest Countries</li>
              <li>Framework: Next.js</li>
              <li>Estilos: Tailwind CSS</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Integrantes</h3>
            <p className="text-gray-300">Equipo de Desarrollo</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Countries App. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
