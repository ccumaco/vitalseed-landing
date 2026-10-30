# VitalSeed · Landing page

Landing page informativa del proyecto **VitalSeed**, una bebida energizante natural a base de
semillas (chía, linaza, amaranto), fruta de Caldas y panela orgánica. Proyecto de creación de
empresa de la CUN (Creación de Empresas 1 – Modelos de Innovación), Manizales, 2026.

Sitio público: https://vitalseed.vercel.app

## Stack

- [Astro 7](https://astro.build) con salida estática.
- [Tailwind CSS 4](https://tailwindcss.com) con paleta propia (`src/styles/global.css`).
- Tipografías Bricolage Grotesque e Instrument Sans (Fontsource, sin llamadas externas).
- Iconos de Lucide.
- Imagen de la botella generada con IA (Seedream 5 Pro vía ElevenLabs) a partir de un prompt
  con la descripción del producto del documento del proyecto.

## Estructura

```
src/
  pages/index.astro              Página única con todas las secciones
  layouts/Base.astro             <head>, metadatos, header y footer
  components/CurvaEnergia.astro  Gráfico SVG que compara la curva de energía
  components/Header.astro, Footer.astro, Marca.astro
  data/marca.json                Nombre, lema, precio de referencia, autoras, institución
  data/ingredientes.json         Ingredientes y qué aporta cada uno
  data/preguntas.json            Preguntas frecuentes
  assets/botella-hero.png        Foto de la botella (recorte cuadrado)
public/og.jpg, favicon.svg
```

Los textos editables (precio, autoras, preguntas, ingredientes) están en `src/data/`.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run preview
```

## Despliegue

Vercel detecta Astro automáticamente. La variable opcional `SITE_URL` define el dominio
canónico y del sitemap (por defecto `https://vitalseed.vercel.app`).
