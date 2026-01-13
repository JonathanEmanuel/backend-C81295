// Promesas: Cumplir o Fallar... Tenes que esperar el tiempo de la promesas
const dividir = ( n1, n2 ) => {
    return new Promise( (resolve, reject) => {
        setTimeout(  () => {
            if( n2 === 0){
                reject('No se puede dividir por cero');
            } else {
                resolve(n1 / n2)
            }
        }, 1500)
    }) 
}

console.log('Inicio del Programa');

dividir(4, 2)
.then( res => {
    console.log(res)
}).catch( error => {
    console.error(' Fallo la promesa: ', error)
}).finally( () => {
    console.log('Fin del programa')
})
