# Países del Mundo — Angular

SPA que muestra todos los países del mundo. Búsqueda en tiempo real por nombre o capital, filtrado por región, tarjetas con banderas, skeletons de carga y diseño dark profesional con gradiente rosa-dorado.

**Demo en producción:** [https://angular-paises-spa.vercel.app](https://angular-paises-spa.vercel.app)

## Stack

| Tecnología | Versión | Uso |
|-----------|---------|-----|
| Angular | 17.3.12 | Framework (NgModule) |
| TypeScript | ~5.3.3 | Lenguaje |
| RxJS | ~7.8.x | Programación reactiva |
| PrimeNG | 17.18.15 | Componentes UI |
| PrimeIcons | 7.0.0 | Iconografía |
| Tema | aura-dark-green | CSS pre-compilado |
| ESLint | 8.57.1 | Linting (legacy config) |
| @angular-eslint | 17.5.3 | Reglas Angular + template |
| Prettier | 3.8.x | Formateo |
| pnpm | 11.5.2 | Gestor de paquetes |

## Instalación

```bash
pnpm install
pnpm approve-builds --all    # Autoriza build scripts (esbuild)
```

## Scripts

```bash
pnpm start       # ng serve — http://localhost:4200
pnpm build       # ng build — dist/angular-paises
pnpm watch       # ng build --watch
pnpm lint        # ESLint — 0 errores
pnpm lint:fix    # Corregir y formatear automáticamente
pnpm test        # Karma + Jasmine
```

## Características

- Grid responsivo de tarjetas con bandera, nombre oficial, capital, población, región y código ISO
- Búsqueda en tiempo real por nombre, nombre oficial o capital
- Filtro por región con dropdown y opción de limpiar
- Skeletons de carga: 6 placeholders animados mientras llega la API
- Badges con color semántico por tipo de dato (capital, población, región, código)
- Gradiente `linear-gradient(90deg, #d53369 0%, #daae51 100%)` en navbar y acentos

## API

`GET https://countries-api-service.vercel.app/api/countries`

## Notas de configuración

### `.npmrc` — `shamefully-hoist=true`
Angular CLI necesita `node_modules` plano. pnpm en modo estricto no expone sus binarios internos.

### ESLint 8 (no 9)
`@angular-eslint@17` es incompatible con ESLint 9. Config en `.eslintrc.json` (formato legacy). `src/index.html` excluido del lint ya que no es un template de componente Angular.

### PrimeNG 17 — Tema CSS pre-compilado
PrimeNG 17.x usa temas precompilados, no el sistema de presets/CSS variables de v18+. El tema `aura-dark-green` se carga en el array `styles` de `angular.json`.

## Autor

Carlos Mur
