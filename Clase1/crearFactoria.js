// Ejercicio: Crear una factoria

function Foo(name) {
    this.name = name;
}

function Bar(name, surname) {
    this.name = name;
    this.surname = surname;
}

function factory(strType, ...args) {
    var type = window[strType];
    if (!type) {
        throw `El tipo ${strType} no existe`; // Template string de ES6
    }
    var instance = Object.create(type.prototype);
    /*
    A la instancia creada a partir del prototipo de TYPE, 
    se le camibia el ámbito a la nueva instancia creada y
    se le pasan los argumentos args para la creación 
    */
    type.apply(instance, args); 


    return instance;
}

// apply: Permite pasar los argumentos como un array (...args)
// call: Lo mismo pero con argumentos separados con coma
// bind: Devuelve un puntero del objeto con el ámbito cambiado

var myFoo = factory('Foo');

console.log(myFoo);

// No se debería jamás hacer una aplicación
// - Cadena de prototipo
// - Api Object
// - Ámbito
// - this, call, bind, apply. Y en CS6 la API de reflect
