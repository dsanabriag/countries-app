import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Countries App - Inicio",
  description: "Proyecto para visualizar información de los países del mundo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
