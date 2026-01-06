
// 🛑 Esto no!
let resultado = sumar(1, 4);

function sumar(n1, n2){
    return (n1 + n2);
}
console.log( resultado );


const multiplicar = ( n1, n2 ) => {
    return ( n1 * n2);
}

const dividir = (n1, n2) => (n1 / n2);


const resultM = multiplicar(2, 4);
const resultD = dividir( 10, 5);

console.info( resultM, resultD);