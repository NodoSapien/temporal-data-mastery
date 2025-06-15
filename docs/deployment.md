
# Guía de Deployment

## Deployment en Lovable

### Publicación Directa
1. Hacer clic en el botón "Publish" en la esquina superior derecha
2. La aplicación se publicará automáticamente en un subdominio de Lovable
3. URL de ejemplo: `yourproject.lovable.app`

### Dominio Personalizado (Requiere Plan Pago)
1. Ir a Project > Settings > Domains
2. Hacer clic en "Connect Domain"
3. Seguir las instrucciones para configurar DNS

## Deployment Manual

### Build para Producción
```bash
# Crear build optimizado
npm run build

# Preview del build localmente
npm run preview
```

### Variables de Entorno
Crear archivo `.env.production`:
```
VITE_APP_TITLE="Presentación InfluxDB"
VITE_APP_VERSION="1.0.0"
```

## Deployment en Plataformas Populares

### Vercel
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Netlify
1. Conectar repositorio de GitHub
2. Configurar build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

### GitHub Pages
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Optimizaciones de Producción

### Performance
- Compresión gzip habilitada
- Minificación automática de CSS/JS
- Tree shaking para eliminar código no utilizado

### SEO
Agregar meta tags en `index.html`:
```html
<meta name="description" content="Presentación interactiva sobre InfluxDB">
<meta name="keywords" content="InfluxDB, base de datos, series temporales">
<meta property="og:title" content="Presentación InfluxDB">
```

### Security Headers
Configurar en hosting provider:
```
Content-Security-Policy: default-src 'self'
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
```

## Monitoreo Post-Deployment

### Analytics (Opcional)
Integrar Google Analytics o similar:
```typescript
// src/lib/analytics.ts
export const trackPageView = (page: string) => {
  if (typeof gtag !== 'undefined') {
    gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: page,
    });
  }
};
```

### Error Tracking
Integrar Sentry u otra herramienta de error tracking para monitoreo en producción.

## Checklist Pre-Deployment

- [ ] Tests pasando
- [ ] Build sin errores
- [ ] Navegación funcional en todos los breakpoints
- [ ] Contenido de diapositivas correcto
- [ ] Performance optimizada
- [ ] Meta tags configurados
- [ ] Favicon actualizado
