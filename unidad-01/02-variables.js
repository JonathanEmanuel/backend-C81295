
// Variables
let nombre = "Pepe"; // String Textos
let edad = 32; // Number Numeros
const
 casado = false; // Boolean
const lenguajes = ["HTML", "CSS", "JavaScript" ]; // Array

console.log('Hola ' + nombre);
console.log('edad: ' + edad);
console.table(lenguajes);
// Esto da error, las constantes no se pueden modificar
// lenguajes = 'CSS';

console.log( lenguajes[0]);
// Esto da error, las constantes no se pueden modificar
// casado = false;
// Operador ternario
// const msg = ( casado === true) ? (nombre + ' es Casado' ) : ( nombre + ' es Soltero'); 
// const msg =  casado ? nombre + ' es Casado'  :  nombre + ' es Soltero'; 

// Ternario con template String
const msg =  (casado == true) ? `${nombre} es Casado ` : `${nombre} es Soltero`; 


console.log(msg);

/*
if( casado === true) {
    console.log(nombre + ' es casado');
} else {
    console.log(nombre + ' es Soltero');
}
*/
