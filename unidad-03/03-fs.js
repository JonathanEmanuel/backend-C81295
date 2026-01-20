const fs = require('fs');
const path = 'data.txt';

fs.writeFile(path, 'Hola Coders!', (err) => {
    if( err) return console.error(err, 'No se pudo escribir el archivo')

    fs.readFile(path, 'utf-8', (err, data) => {
        if( err) return console.error(err, 'No se pudo leer el archivo');
        console.log('Data: ', data);

        fs.writeFile(path, 'Chau Coders!', (err) => {
            if( err) return console.error(err, 'No se pudo escribir el archivo')
        })
    })
})

/* 
fs.writeFile(path, 'Hola Coders!', (err) => {
    if( err) return console.error(err, 'No se pudo escribir el archivo');
})

fs.readFile(path, 'utf-8', (err, data) => {
    if( err) return console.error(err, 'No se pudo leer el archivo');
    console.log('Data: ', data);
})

 fs.writeFile(path, 'Chau Coders!', (err) => {
    if( err) return console.error(err, 'No se pudo escribir el archivo')
})
    */