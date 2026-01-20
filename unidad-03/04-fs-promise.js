const fs = require('fs/promises');
const path = 'data3.txt';


const main = async () => {
    try {
        await fs.writeFile(path, 'Hola Coders!');
        const data = await fs.readFile( path, 'utf-8');
        console.log({data});
        await fs.writeFile(path, 'Chau Coders!');
    } catch (error) {
        console.error({error})
    }
}

console.log('INICIO')
main().then( () => {
    console.log('FiN')
})




// Versión Promises

fs.writeFile(path, 'Hola Coders!').then( () => {
    console.log('Archivo escrito')

    fs.readFile( path, 'utf-8').then( (data) => {
        console.log({ data})
    })
    .catch(err => {
        console.log('Error')
    })

}).catch( (err) => {
    console.log('Error')
})