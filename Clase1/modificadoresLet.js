/**
 * MODIFICADORES LET
 *      Las variables declaradas como let solo son usables dentro del ámbito.
 */

function f() {
    console.log(x); // Cannot access 'x' before initialization
    let x = 10;
}

/**
 * Modo estricto (Use strict):
 *      let
 *      class
 * 
 * No permite utilizar las cosas antes de ser declaradas
 */
var x = 10;
function f() {
    console.log(x); // Imprime 10
    {let x = 30};
 }


 /**
  * Transpilador a ES5
  */
var x = 10;
function f() {
    console.log(x);
    {
        var _x = 30;
    }
}