/**
 * Currying (arte de pasar solo un parámetro)
 * Clousure - Clausura 
 */

function foo(a) {
    return function(b) {
        return (c) => a + b + c;
    }
}


/**
 * Cuando declaro una función interna a otra, esta tiene acceso a las variables de las funciones superiores
 */
var result = foo(5)(3);

result(5);