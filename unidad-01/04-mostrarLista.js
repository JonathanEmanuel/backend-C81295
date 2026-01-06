const mostrarLista = ( lista ) => {
    const cantidad = lista.length;
    console.log(cantidad);
    if( cantidad === 0){
        console.log('Lista Vacía');
        return;
    }

    console.log('Ahora recorremos el array');
    for (let i = 0; i < lista.length; i++) {
        const elemento = lista[i];
        console.log(`${i} - Elemento ${elemento}`);
    }

    console.log(`La logitud de la lista es de ${cantidad}`);
}

// array.length -> Retorna la cantidad de elementos del array

// Casos de prueba
const frutas = ['Manzana', 'Pera', 'Uva', 'Banana'];
// Caso 1
mostrarLista( [] );
// Caso 2
mostrarLista( frutas );

