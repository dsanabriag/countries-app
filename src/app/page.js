export default function Home() {
    return (
        <div className="max-w-3xl mx-auto space-y-8">
            <section className="text-center">
                <h1 className="text-4xl font-extrabold text-blue-900 mb-4">
                    Explorador de Países
                </h1>
                <p className="text-lg text-gray-700">
                    Una aplicación para ver información de países.
                </p>
            </section>

            <section className="bg-blue-50 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Integrantes del grupo</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Diego Sanabria Gómez</li>
                    <li>Sebastián Valencia Valencia</li>
                </ul>
            </section>
        </div>
    );
}
