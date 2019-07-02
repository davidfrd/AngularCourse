# **Día 2**
- Emet -> Constructor de forma facil de html

## Dudas
- Diferencias entre element y node

## Referencias
- [Repositorio discusión UnknowElement (CustomElement)](https://github.com/w3c/webcomponents)
- [EMMET](https://emmet.io/)
- [El efecto fouc](https://trasweb.net/webperf/el-no-efecto-fouc)
- [CSSCritical](https://github.com/addyosmani/critical)
- [CanIUse](https://caniuse.com/)
- [Web component polyfill](https://www.webcomponents.org/polyfills)

Cosas que estudiarme de CSS
- DisplayGrid
- Custom CSS Properties
- Selectores CSS



## **Composite pattern** 
Patrón con el que se recorren documentos estructurados como XML.

## **DOM** *Document Object Model*
### Introducción
Jerarquía de herencia HTML:
- eventarget
    - Node
        - Texto
        - Comentario
        - Element
            - HtmlElement
            - HTMLUnknowElement

getNode: Devuele todos los nodes y los elements
getElement: Devuelve solo los elements

### CRUD
#### Create
```javascript
// Factoría
document.createElement('div');
document.createElementNS('', );
document.createComment('');
```
*Ejemplo:*
```javascript
let div = document.createElement('div');
let nodeText = document.createTextNode('Hello world');
div.appendChild(nodeText);

-------------
var div = document.createElement('div');
var texto = document.createTextNode('Hello');
div.insertBefore(texto, texto.nextSibling);
var world = document.createTextNode(' World');
div.insertBefore(world, texto);
```

#### Update
*Element:*
```javascript
// Modificaciones de atributos
div.setAttribute('hidden', '');
div.removeAttribute('hidden');

// Modificaciones de clases
div.classList.add("content");
div.classList.remove("content");

// Modificaciones de estiulo
div.style.setProperty('color', 'red');
div.style.removeProperty('color');
```

*TextNode*
```javascript
texto.data = "Hello World";
```

#### Delete
```javascript
node.parentNode.removeChild(node);
```

#### Read
```javascript
document.querySelector('div');      // Devuelve uno
document.querySelectorAll('div');   // Devuelve varios

document.getElementById('');
document.getElementByClassName('');
document.getElementByTagName('');
```


## Ciclo de vida de los WebComponent
[WebComponent v1](https://developers.google.com/web/fundamentals/web-components/customelements?hl=es)

## Custom Css property

```html
<style>
    :root {
        --color: green;   
    }
</style>

<template id="calendar">
    <style>
        div {
            color: var(--color, blue);
        }
    </style>
</template>
```


## Shadow with Slot
```html
<slot name="left"></slot>
<slot name="content"></slot>
<slot name="right"></slot>
...
<div slot="content"></div>
```

## Polyfill WebComponent
Para que los WebComponent sean compatibles con todos los navegadores, se ha de utilizar el Polyfill https://www.webcomponents.org/polyfills