# Portfolio personal — Marco Antonio Ferreira Santos

Portfolio web de Marco Antonio Ferreira Santos, desarrollador Full Stack. Reúne proyectos, experiencia, habilidades, formación, certificaciones y formas de contacto en un sitio estático construido con Astro.

**Sitio configurado:** [marcoferreira.vercel.app](https://marcoferreira.vercel.app) · **Código:** [MarcoApunto/portfolio-astro](https://github.com/MarcoApunto/portfolio-astro)

## Contenido

La página principal presenta estas secciones:

- Presentación y perfil profesional.
- Habilidades técnicas.
- Experiencia laboral en SEGULA Technologies.
- Proyectos destacados: Padeliticos, Strapi & Next.js, este portfolio, Cult Of The Reader y QuizWhiz!.
- Formación y certificaciones.
- Contacto y descarga del currículum en PDF.

Incluye diseño adaptable a móvil y escritorio, menú móvil, cambio entre tema claro y oscuro, metadatos para buscadores y redes sociales, y generación de sitemap. Las imágenes de los proyectos se procesan con Astro.

## Tecnologías

- [Astro 5](https://astro.build/) para generar el sitio estático.
- [Tailwind CSS 4](https://tailwindcss.com/) mediante el plugin de Vite.
- TypeScript para los datos de habilidades; JavaScript y componentes Astro para la página y las interacciones del navegador.
- pnpm para instalar dependencias y ejecutar los comandos del proyecto.
- Space Grotesk, Material Icons y Font Awesome para tipografía e iconos.
- Integraciones de Vercel Analytics y Speed Insights.

## Estructura del proyecto

```text
portfolio-astro/
├── design/
│   └── logo/                    Archivos de diseño y vista previa del logo
│       ├── apple-touch-icon.png
│       ├── favicon-final.svg
│       ├── logo-final.svg
│       └── logo-preview.html
├── public/                      Recursos servidos directamente
│   ├── apple-touch-icon.png
│   ├── favicon.svg
│   ├── logo.svg
│   ├── pdf/
│   │   └── MarcoFerreira_CV_FullStack.pdf
│   └── robots.txt
├── src/
│   ├── assets/                   Imágenes de perfil y proyectos
│   ├── components/               Secciones y elementos de la página
│   │   ├── About.astro
│   │   ├── Certifications.astro
│   │   ├── Contact.astro
│   │   ├── Education.astro
│   │   ├── Experience.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Projects.astro
│   │   └── Skills.astro
│   ├── data/
│   │   ├── skill-icons.ts
│   │   └── skills.ts
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── 404.astro
│   │   └── index.astro
│   ├── scripts/
│   │   └── buttons.js
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
├── pnpm-lock.yaml
├── README.md
└── tsconfig.json
```

`src/pages/index.astro` compone la página principal con los componentes de `src/components/`. `Education.astro` incluye la sección de certificaciones. Las habilidades y sus iconos se mantienen en `src/data/`.

## Desarrollo local

Necesitas Node.js y pnpm instalados.

    git clone https://github.com/MarcoApunto/portfolio-astro.git
    cd portfolio-astro
    pnpm install
    pnpm dev

Abre [http://localhost:4321](http://localhost:4321) para ver el sitio durante el desarrollo.

## Comandos

| Comando | Descripción |
| --- | --- |
| `pnpm dev` | Inicia el servidor local de desarrollo. |
| `pnpm check` | Ejecuta `astro check` para revisar los archivos Astro y TypeScript. |
| `pnpm build` | Genera el sitio estático en `dist/`. |
| `pnpm preview` | Sirve localmente la última compilación de `dist/`. |
| `pnpm astro ...` | Ejecuta un comando de Astro CLI. |

## Contacto

- Correo: [ferreiras.marcoa@gmail.com](mailto:ferreiras.marcoa@gmail.com)
- [LinkedIn](https://linkedin.com/in/marcofs)
- [GitHub](https://github.com/MarcoApunto)
