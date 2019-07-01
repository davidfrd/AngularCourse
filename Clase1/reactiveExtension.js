

let obj = subscribe(
    success,
    error,
    complete
);

obj.unsuscribe();

/**
 * Ejemplo con dispose
 */
function events(node, event, handler) {
    node.addEventListener(event, handler);
    return () => { node.removeEventListener(event, handler) }
}

let dispose = events(button, 'click', () => { /* Código ejecutable */} );
dispose();




