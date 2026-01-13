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


const realizarCalculo =  async () => {
    try {
        const res = await dividir( 10, 3);
        console.log(res);
    } catch (error) {
        console.log('Tenemos un error')
    } finally {
        console.log('Finalizo el proceso')
    }

}

realizarCalculo();