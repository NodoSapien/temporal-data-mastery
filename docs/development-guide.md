
# Guía de Desarrollo

## Configuración del Entorno

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone <URL_DEL_REPOSITORIO>

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## Estructura de Componentes

### Jerarquía de Componentes
```
Presentation
├── SlideRenderer
│   ├── TitleSlide
│   ├── ContentSlide
│   ├── ComparisonSlide
│   ├── MultiComparisonSlide
│   ├── AdvantagesSlide
│   ├── UseCasesSlide
│   ├── DecisionSlide
│   ├── FutureSlide
│   └── ConclusionSlide
└── UI Components (Button, Card, etc.)
```

### Agregar Nuevos Tipos de Diapositivas

1. **Crear el componente**: `src/components/slides/NewSlideType.tsx`
```typescript
import React from 'react';

interface NewSlideTypeProps {
  slide: {
    title: string;
    // otros campos específicos
  };
}

const NewSlideType: React.FC<NewSlideTypeProps> = ({ slide }) => {
  return (
    <div className="space-y-6 px-4 py-8">
      {/* Contenido de la diapositiva */}
    </div>
  );
};

export default NewSlideType;
```

2. **Registrar en SlideRenderer**: Agregar el caso en el switch
```typescript
case 'new-slide-type':
  return <NewSlideType slide={slide} />;
```

3. **Agregar datos**: Modificar `src/data/slidesData.ts`

### Convenciones de Código

#### Nomenclatura
- Componentes: PascalCase (`TitleSlide.tsx`)
- Archivos de utilidades: camelCase (`utils.ts`)
- Constantes: UPPER_SNAKE_CASE

#### Estilos
- Usar clases de Tailwind CSS
- Seguir el patrón de responsive design existente:
  - `text-base sm:text-lg lg:text-xl` para texto responsive
  - `space-y-4 sm:space-y-6 lg:space-y-8` para espaciado responsive

#### TypeScript
- Definir interfaces para props de componentes
- Usar tipos estrictos, evitar `any`
- Documentar interfaces complejas

## Testing

### Comandos de Testing
```bash
# Ejecutar tests
npm run test

# Ejecutar tests en modo watch
npm run test:watch

# Cobertura de tests
npm run test:coverage
```

## Debugging

### Herramientas de Desarrollo
- React Developer Tools
- Console.log estratégico
- Sourcemaps habilitados en desarrollo

### Errores Comunes
1. **Imports faltantes**: Verificar rutas de importación
2. **Props undefined**: Validar estructura de datos en `slidesData.ts`
3. **Estilos no aplicados**: Comprobar clases de Tailwind CSS
