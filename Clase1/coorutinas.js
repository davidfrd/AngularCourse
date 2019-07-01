/**
 * Coorutina
 */
var a = [1,2,3]

function* foo(array, predicate) {
    for(var i=0; i < array.lenght ; i++) {
        if(preficate(array[i])) {
            yield array[i];
        }
    }
}