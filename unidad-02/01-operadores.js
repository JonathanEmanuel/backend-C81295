const resultado = 2 ** 3;
console.log('Potencias: ', resultado);

const lenguajes = ["HTML", "CSS", "JavaScript" ]; // Array
let filtro = 'JavaScript';


if( lenguajes.includes( filtro ) ) {
    console.log('Esta Capacitado!');
}

const producto1 = {
    nombre: 'Mouse',
    precio: 3000
}

const producto2 = {
    nombre: 'Pendrive',
    precio: 7000
}

console.log(  Object.entries( producto1 ));
console.log(  Object.keys( producto1 ));
console.log(  Object.values( producto1 ));
// Operador Rest
const calcularTotal = (...numeros) => {
    return numeros.reduce((a, b) => a.precio + b.precio )
}

const r1 = calcularTotal( producto1, producto2);
console.log(r1)


// Operador Spread
const letras = [ 'a', 'b', 'c'];
const nuevasLetras = ['d', 'e'];

const finales = [ ...letras,'f', 'g' ];
console.log('Letras' , finales)