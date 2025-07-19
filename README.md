# ConLéxico - Vocabulario Español por Letras

ConLéxico es una plataforma educativa que organiza vocabulario en español por categorías temáticas y letras del alfabeto. Facilita el aprendizaje y la expansión del vocabulario de manera sistemática y efectiva.

## 🌟 Características

- **7 Categorías Principales**: Colores, Animales, Países, Frutas, Palabras, Comidas, Apellidos
- **182 Páginas Únicas**: Cada categoría incluye 26 páginas (A-Z)
- **SEO Optimizado**: Metadatos completos, sitemap, robots.txt, datos estructurados
- **Responsive Design**: Funciona perfectamente en móviles, tablets y escritorio
- **Búsqueda Inteligente**: Sistema de búsqueda con sugerencias automáticas
- **Contenido Rico**: Definiciones y ejemplos para cada palabra

## 🚀 Tecnologías Utilizadas

- **Framework**: Next.js 15 con App Router
- **Styling**: Tailwind CSS
- **TypeScript**: Para mayor seguridad de tipos
- **SEO**: Metadatos automáticos, sitemap dinámico, datos estructurados JSON-LD
- **Performance**: Optimización de imágenes, compresión, caching

## 📁 Estructura del Proyecto

```
src/
├── app/                    # App Router pages
│   ├── (categories)/      # Category and letter pages
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── faq/              # FAQ page
│   ├── blog/             # Blog page
│   ├── privacy/          # Privacy policy
│   ├── terms/            # Terms of use
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Homepage
│   ├── sitemap.ts        # Dynamic sitemap
│   └── robots.ts         # Robots.txt
├── components/            # Reusable components
│   ├── layout/           # Header, Footer
│   ├── ui/               # UI components
│   ├── category/         # Category page component
│   ├── letter/           # Letter page component
│   └── seo/              # SEO components
├── data/                 # Data and configuration
│   ├── categories.ts     # Category definitions
│   └── words.ts          # Vocabulary data
├── types/                # TypeScript types
├── utils/                # Utility functions
│   ├── seo.ts           # SEO helpers
│   └── routes.ts        # Route utilities
```

## 🛠️ Instalación y Desarrollo

1. **Clonar el repositorio**
```bash
git clone <repository-url>
cd conlexico
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar en modo desarrollo**
```bash
npm run dev
```

4. **Abrir en el navegador**
```
http://localhost:3000
```

## 📊 URLs y Estructura SEO

### Páginas Principales
- `/` - Página principal
- `/about` - Acerca de
- `/contact` - Contacto
- `/faq` - Preguntas frecuentes
- `/blog` - Blog

### Páginas de Categorías
- `/colores` - Colores
- `/animales` - Animales
- `/paises` - Países
- `/frutas` - Frutas
- `/palabras` - Palabras
- `/comidas` - Comidas
- `/apellidos` - Apellidos

### Páginas de Letras (182 páginas)
- `/colores/[a-z]` - Ej: `/colores/j`, `/colores/h`
- `/animales/[a-z]` - Ej: `/animales/u`, `/animales/n`
- Y así para todas las categorías...

## 🎯 Páginas de Alto Volumen

Basado en datos de búsqueda, estas son las páginas prioritarias:

**Colores**: j (274k), h (232k), s (192k), i (184k)
**Animales**: u (246k), n (224k), d (137k), i (93k)
**Países**: t (76k), d (70k), s (68k)

## 🔧 Scripts Disponibles

```bash
npm run dev          # Desarrollo
npm run build        # Construcción para producción
npm run start        # Servidor de producción
npm run lint         # Linting
npm run type-check   # Verificación de tipos
```

## 📈 Optimizaciones SEO

- **Metadatos dinámicos** para cada página
- **Sitemap XML** generado automáticamente
- **Robots.txt** optimizado
- **Datos estructurados JSON-LD** para mejor indexación
- **URLs amigables** para SEO
- **Open Graph** y **Twitter Cards**
- **Breadcrumbs** en todas las páginas

## 🌐 Despliegue

El proyecto está configurado para despliegue estático:

```bash
npm run build
```

Esto genera una versión estática optimizada en la carpeta `out/` que puede ser desplegada en cualquier servidor web o CDN.

## 📝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

- **Email**: contacto@conlexico.com
- **Website**: https://conlexico.com

---

Desarrollado con ❤️ para la comunidad hispanohablante
