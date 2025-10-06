# 🌍 Países del Mundo - Angular

Aplicación web desarrollada en Angular que permite explorar información detallada de todos los países del mundo. Incluye funcionalidades de búsqueda y filtrado por región para facilitar la navegación entre más de 240 países.

## ✨ Características

- 🔍 **Búsqueda en tiempo real**: Busca países por nombre o capital
- 🗺️ **Filtro por región**: Filtra países por continente (África, América, Asia, Europa, Oceanía)
- 📊 **Información detallada**: Visualiza datos como población, capital, área, idiomas y más
- 🎨 **Interfaz intuitiva**: Diseño accordion para mostrar/ocultar información
- 🚀 **Responsive**: Adaptado para dispositivos móviles, tablets y escritorio
- 🎯 **Contador de resultados**: Visualiza cuántos países coinciden con tus filtros
- 🏳️ **Banderas**: Muestra la bandera de cada país en formato SVG

## 🛠️ Tecnologías Utilizadas

- **Angular** - Framework principal
- **TypeScript** - Lenguaje de programación
- **RxJS** - Programación reactiva
- **Bootstrap 4** - Framework CSS
- **Font Awesome** - Iconos
- **REST API** - Consumo de API de países

## 📋 Prerequisitos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (v14 o superior)
- [npm](https://www.npmjs.com/) (v6 o superior)
- [Angular CLI](https://angular.io/cli) (v15 o superior)

```bash
npm install -g @angular/cli
```

## 🚀 Instalación

1. **Clona el repositorio**

```bash
git clone https://github.com/cmurestudillos/paises-angular.git
cd angular-paises
```

2. **Instala las dependencias**

```bash
npm install
```

3. **Ejecuta la aplicación**

```bash
ng serve
```

4. **Abre tu navegador**

Navega a `http://localhost:4200/`

## 📦 Scripts Disponibles

```bash
# Desarrollo
ng serve

# Build de producción
ng build --prod

# Ejecutar tests
ng test

# Ejecutar linter
ng lint
```

## 🗂️ Estructura del Proyecto

```
paises-angular/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── home/
│   │   │   │   ├── home.component.ts
│   │   │   │   ├── home.component.html
│   │   │   │   └── home.component.css
│   │   │   └── shared/
│   │   │       ├── navbar/
│   │   │       └── footer/
│   │   ├── models/
│   │   │   └── pais.interface.ts
│   │   ├── services/
│   │   │   └── paises.service.ts
│   │   ├── routes/
│   │   │   └── app-routing.module.ts
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   └── app.module.ts
│   ├── assets/
│   └── index.html
├── README.md
└── package.json
```

## 🌐 API Utilizada

Este proyecto consume la API REST de países:

**Base URL**: `https://countries-api-service.vercel.app/api/countries`

### Respuesta de la API

```json
{
  "success": true,
  "count": 240,
  "data": [
    {
      "name": {
        "common": "Spain",
        "official": "Kingdom of Spain"
      },
      "capital": ["Madrid"],
      "population": 47351567,
      "region": "Europe",
      "subregion": "Southern Europe",
      "flags": {
        "svg": "https://...",
        "png": "https://..."
      },
      "area": 505992,
      "languages": {
        "spa": "Spanish"
      }
    }
  ]
}
```

## 💡 Uso

### Búsqueda de Países

1. Escribe el nombre del país o su capital en el campo de búsqueda
2. Los resultados se filtrarán automáticamente en tiempo real

### Filtro por Región

1. Selecciona una región del menú desplegable
2. Se mostrarán solo los países de esa región

### Ver Detalles

1. Haz clic en el botón de cualquier país
2. Se desplegará un panel con información detallada

### Limpiar Filtros

1. Haz clic en el botón "Limpiar"
2. Se restablecerán todos los filtros

## 🎨 Capturas de Pantalla

> Añade capturas de pantalla de tu aplicación aquí

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu característica (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Funcionalidades Futuras

- [ ] Paginación de resultados
- [ ] Ordenamiento (por nombre, población, área)
- [ ] Vista de tarjetas como alternativa al accordion
- [ ] Modo oscuro
- [ ] Favoritos
- [ ] Comparar países
- [ ] Exportar datos a CSV/PDF
- [ ] Gráficos estadísticos
- [ ] Mapa interactivo

## 🐛 Reportar Bugs

Si encuentras algún bug, por favor abre un [issue](https://github.com/cmurestudillos/paises-angular/issues) describiendo:

- El comportamiento esperado
- El comportamiento actual
- Pasos para reproducir el error
- Capturas de pantalla (si aplica)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 👤 Autor

**Carlos Mur**

- GitHub: [@tu-usuario](https://github.com/cmurestudillos)

## 🙏 Agradecimientos

- [REST Countries API](https://countries-api-service.vercel.app/) por proporcionar los datos
- [Angular](https://angular.io/) por el excelente framework
- [Bootstrap](https://getbootstrap.com/) por los componentes UI
- [Font Awesome](https://fontawesome.com/) por los iconos

---

⭐️ Si te gustó este proyecto, no olvides darle una estrella en GitHub

**Desarrollado con ❤️ usando Angular**