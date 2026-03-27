# Countries App

Esta aplicación Next.js muestra información básica de países y provee herramientas de búsqueda y visualización. Está diseñada con lógica para:

- Mostrar lista de países
- Tarjetas con:
  - nombre
  - bandera
  - capital
- Buscar país por nombre
- Mostrar ubicación (lat/lng)
- Mostrar moneda

## Funcionalidades

1. Mostrar lista de países
   - Se carga sumario de cada país en tarjetas.
   - Las tarjetas contienen nombre, bandera, capital, moneda y coordenadas.

2. Tarjetas de país
   - Nombre completo del país.
   - Imagen de bandera.
   - Capital.
   - Latitud y longitud.
   - Moneda(s).

3. Búsqueda por nombre
   - Filtro instantáneo por texto de país.
   - Debounce en entrada para UX suave (si aplica).

4. Ubicación (lat/lng)
   - Se muestra latitud y longitud del país en la tarjeta.
   - Se puede integrar con un mapa si se desea extender.

5. Moneda
   - Se listan las monedas oficiales en la tarjeta.
   - Manejo de países con múltiples monedas.

## Desarrollo

### Requisitos

- Node.js 18+ (recomendado)
- npm / yarn / pnpm

### Instalación

```bash
npm install
```

### Ejecutar en modo desarrollo

```bash
npm run dev
```

Visita `http://localhost:3000` en el navegador.

### Estructura relevante

- `src/app/page.js`: lógica principal y renderizado de la lista.
- `src/app/countries/page.js`: posible ruta secundaria de países.
- `src/components/`: componentes reutilizables (tarjetas, buscador, formulario).


