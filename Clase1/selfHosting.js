/*
    SELF-HOSTING
        - Wikipedia: https://en.wikipedia.org/wiki/Self-hosting_(compilers)
*/

var x = 10;
function f() {
    console.log(x);
    var x = 30;
}

// Traducción a self hosting (Operación realizada por el compilador)
function f() {
    var x;
    console.log(x);
    x = 30;
}