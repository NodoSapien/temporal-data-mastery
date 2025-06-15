
# Arquitectura del Proyecto

## Visión General

La aplicación sigue una arquitectura basada en componentes con separación clara de responsabilidades:

```
┌─────────────────┐
│   Presentation  │ ← Componente principal
└─────────────────┘
         │
         ▼
┌─────────────────┐
│  SlideRenderer  │ ← Router de componentes
└─────────────────┘
         │
         ▼
┌─────────────────┐
│ Slide Components│ ← Componentes específicos
└─────────────────┘
```

## Patrones de Diseño

### 1. Component Factory Pattern
El `SlideRenderer` actúa como una fábrica que determina qué componente renderizar basado en el tipo de diapositiva.

### 2. Props Interface Pattern
Cada componente de diapositiva define su propia interfaz de props:
```typescript
interface SlideProps {
  slide: {
    type: string;
    title: string;
    // campos específicos por tipo
  };
}
```

### 3. Responsive Design Pattern
Clases Tailwind progresivas para diferentes breakpoints:
- Base: `text-base`
- Small: `sm:text-lg`
- Large: `lg:text-xl`

## Flujo de Datos

```
slidesData.ts → Presentation → SlideRenderer → SpecificSlide
```

### Estructura de Datos
```typescript
interface Slide {
  id: number;
  type: 'title' | 'content' | 'comparison' | 'multi-comparison' | ...;
  title: string;
  [key: string]: any; // campos específicos por tipo
}
```

## Principios Arquitectónicos

### 1. Single Responsibility
Cada componente tiene una responsabilidad específica:
- `Presentation`: Gestión de navegación
- `SlideRenderer`: Renderizado condicional
- `TitleSlide`, `ContentSlide`, etc.: Presentación específica

### 2. Open/Closed Principle
Fácil agregar nuevos tipos de diapositivas sin modificar código existente.

### 3. Dependency Inversion
Los componentes dependen de abstracciones (interfaces) no de implementaciones concretas.

## Consideraciones de Performance

### 1. Code Splitting
Cada componente de diapositiva puede ser cargado dinámicamente si es necesario.

### 2. Memoización
Los componentes pueden usar `React.memo()` para evitar re-renders innecesarios.

### 3. Optimización de Imágenes
Las imágenes utilizan lazy loading automático del navegador.

## Escalabilidad

### Agregar Nuevas Funcionalidades
1. **Nuevos tipos de slides**: Crear componente y registrar en renderer
2. **Nuevas animaciones**: Agregar clases CSS personalizadas
3. **Interactividad**: Integrar estado local en componentes específicos

### Consideraciones Futuras
- **Persistencia**: Implementar localStorage para recordar posición
- **Temas**: Sistema de temas dinámicos
- **Exportación**: Funcionalidad para exportar a PDF
