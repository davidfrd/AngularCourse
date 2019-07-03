# **Día 3**
- Diferencias Componente y Directiva?

## Referencias recomendadas
- [BeyondSPA](https://developers.google.com/web/updates/2018/05/beyond-spa)
- [ErrorHandle Angular](https://angular.io/api/core/ErrorHandler)
- [App Shell - Addy Osmani](https://developers.google.com/web/fundamentals/architecture/app-shell?hl=es)
- [Page.js](https://visionmedia.github.io/page.js/)
- [Axios](https://github.com/axios/axios)
- [Service Locator Pattern](https://en.wikipedia.org/wiki/Service_locator_pattern)
- [Inyección de dependencias](https://angular.io/guide/dependency-injection)
- [Gateway Pattern](https://microservices.io/patterns/apigateway.html)

## Video PWA
- https://www.youtube.com/watch?v=E8BeSSdIUW4

## Decorator
- Metainformación a la clase/métodos

## Collections
- Array
    - ****reduce***:
        ```javascript
            [1,2,3].reduce((a,b) => {
                ...
            }, inicializator);
        ```
    - filter
- Map
- Set
- [*WeakMap](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/WeakMap)


## Typescript
- Interfaces para transpilación 
```javascript
interface Foo {
	name:string,
	phone?:number
}


function mapFoo(a:any):Foo {
	return {name:"pedro"};
}
```



## Patrones Angular MVVM (Model View View Model)
Conceptos:
- Binding: Oneway, Twoway
- Comando: Acciones del usuario

Controladores: Solo deben de tener comandos y datos (binding)

- MVVM
    - Application
        - log
        - map
        - validar modelos
        - lanzar exceptions
    - Capa de repositorio -> BBDD

## Convert Observable to Promise

```javascript
class Foo extends ComponentBase<Ifoo> {
    async ngOnInit() {
        this.model = await serviceFoo.get(1);
    }
}

class ServiceFOo {
    IFoo get(id) {
        return fooRepository.get(id).toPromise();
    }
}

class FooRepository<IFoo> {
    IFoo get(id) {
        return httpClient.get('/path', id);
    }
}
```

[*Custom decorators*](https://www.typescriptlang.org/docs/handbook/decorators.html)
```javascript
class Foo extends ComponentBase<Ifoo> {
    @spinner()
    async ngOnInit() {
        this.model = await serviceFoo.get(1);
    }
}

class ServiceFOo {
    @Log()
    IFoo get(id) {
        return fooRepository.get(id).toPromise();
    }
}

class FooRepository<IFoo> {
    IFoo get(id) {
        return httpClient.get('/path', id);
    }
}
```

## Aprender cualquier framework
### Diferencias entre MPA y SPA
- MPA - Multiple page application: Amplio procesamiento en el servidor. Menos consumo de memoria en el cliente.
- SPA - Single Page Application: Carga en el cliente. Posibles errores de memory leak.
- PWA - Progresive Web Application: Javascript isomórfico
    - SSR: Renderizo en servidor la primera vista
    - PROXY - Service worker: Instala el "cascaron" de la aplicación en el dispositivo que se rellena mediante "hidratación".


1. Template syntax
    - Prohibidas expresiones. Crear funciones que te permitan realizar esa funcionalidad.
2. Life cycle
3. Routing
4. Llamadas HTTP


## Angular CLI
Interfaz de línea de comandos para angular

## Base Single Page Application
```javascript
document.addEventListener(
    'click', 
    () => window.history.pushState({}, "", "http://localhost:8080/heroes")
);
```

## Inyección de dependencias
```typescript
@Injectable
class Bar

class Foo {
    constructor(private foo:Foo, @inject(''))
}

```

