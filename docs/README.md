
# Documentación del Proyecto - Presentación InfluxDB

## Descripción General

Este proyecto es una aplicación web de presentación interactiva sobre InfluxDB, construida con React, TypeScript y Tailwind CSS. La aplicación muestra las ventajas, características y comparaciones de InfluxDB con otras bases de datos de series temporales.

## Estructura del Proyecto

```
src/
├── components/
│   ├── Presentation.tsx          # Componente principal de presentación
│   ├── slides/                   # Componentes de diapositivas
│   │   ├── SlideRenderer.tsx     # Renderizador de diapositivas
│   │   ├── TitleSlide.tsx        # Diapositiva de título
│   │   ├── ContentSlide.tsx      # Diapositiva de contenido
│   │   ├── ComparisonSlide.tsx   # Diapositiva de comparación
│   │   └── ...                   # Otros tipos de diapositivas
│   └── ui/                       # Componentes UI reutilizables
├── data/
│   └── slidesData.ts            # Datos de las diapositivas
├── pages/
│   ├── Index.tsx                # Página principal
│   └── NotFound.tsx             # Página 404
└── lib/
    └── utils.ts                 # Utilidades compartidas
```

## Tecnologías Utilizadas

- **React 18** - Biblioteca de interfaz de usuario
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de CSS utilitario
- **Shadcn/UI** - Componentes UI preconfigurados
- **Lucide React** - Iconos
- **Vite** - Herramienta de construcción

## Enlaces Útiles

- [Guía de Usuario](./user-guide.md)
- [Guía de Desarrollo](./development-guide.md)
- [Arquitectura del Proyecto](./architecture.md)
- [Guía de Deployment](./deployment.md)
