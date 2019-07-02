# Definiciones

## Polyfill
En el desarrollo web, un Polyfill es un código que implementa una característica la cual no es soportada por los navegadores web.

Por ejemplo, suponiendo que se quiere hacer uso de una función log() que no exíste definida por el navegador, el siguiente código tiraría un error:
```javascript
log("hey future standad")
```

Pero en el caso de que utilicemos una API que defina este método si no lo implementa en el navegador (aplicando un parche), este método funcionaría correctamente.
```javascript 
if (!window.log) {
    console.log("...patching");
    window.log = msg => console.log(msg);
}
```