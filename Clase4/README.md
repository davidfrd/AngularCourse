# Día 4

## Referencias recomendadas
- [**WebIncubator](https://wicg.io/)

- [**Artículo PWA Multiple pages - Beyond SPA](https://developers.google.com/web/updates/2018/05/beyond-spa)
- [Service worker MDN](https://developer.mozilla.org/es/docs/Web/API/Service_Worker_API)
- [**Web Assembly](https://webassembly.org/): Estandar en el que corres código nativo (C, C++, Rust, etc.) en el navegador.
- [KIOS](https://www.kios.fi/en/about-us/): Sistema Operativo de Google para dispositivos de baja gama.
- [Patrón PRPL](https://developers.google.com/web/fundamentals/performance/prpl-pattern/?hl=es)
- [Worker DOM](https://github.com/ampproject/worker-dom) - Proyecto javascript trisomórfico
- [Strategy pattern](https://en.wikipedia.org/wiki/Strategy_pattern)
- [Brotli compilator](https://github.com/google/brotli)
- [*Webpack](https://webpack.js.org/) & [Rollapp](https://www.rollapp.com/)
- [*Testing](https://angular.io/guide/testing)

## Estudiar PWA
- Manifest.json
- ServiceWorker
- Patrón App Shell - Addy Osmany
- Patrón PRPL - Addy Osmany
- Fetch API MDN - Se utiliza en los SW como proxies
- API de Cachés MDN
- Stream API MDN

## CLI generate
- AppShell: Cascarón de la aplicación
- Universa
- ServiceWorker (en hilo secundario):
    1. Instalación
    2. Activación
    3. Fetch: En cada petición se decide si se devuelve del servidor o de la caché locales. **WorkBox:** *Miniframework de google que hace transparente la generación del serviceWorker*
- WebWorker (en hilo secundario):

**El service worker y el web worker no deberían de acceder nunca al DOM*

## Application in angular
Herramientas de compilación. Crea un grafo de dependencias en memoria:
- Webpack
- Rollapp

ng server -> compilación
ng build -> compresión


### Estructura
- package.json
- tsconfig.app.json: Configuración de la compilación
- tsconfig.json: Configuración de typescript 
- tsconfig.spec.json: Polyfill
- tslint.json: Reglas de limpieza/standard del código
- karma.config.js: Configuración test unitarios
    - Test unitarios
    - Test E2E -> Extremo a extremo
- browserlist: Estandar para la compilación con los polyfield.
- angular.json: Configuración de compilación para el ``ng serve`` y el ``ng build ``
- .editorconfig: Configuración del editor

### Testing

 