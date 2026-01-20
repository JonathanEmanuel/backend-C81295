const TOTAL = 10;
const MIN = 1;
const MAX = 5;

const generarNumerosRandom = () => {

    return new Promise(  ( resolve) => {
        setTimeout( () => {
            const results = {};
            for (let i = 0; i < TOTAL; i++) {
                const random = Math.floor( Math.random() * ( MAX - MIN + 1) ) + MIN;
                results[random] = (results[random] || 0 ) + 1;
            }
            resolve( results );
        }, 2000 ); // Simulamos la demora
    })
}

console.log('Inicio del Script....');
generarNumerosRandom();
console.log('Fin del Script....');
