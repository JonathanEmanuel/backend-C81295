class Persona {
    // Atributos
    nombre = '';
    edad = 0;
    #clave = ''; // Solamente puede ser accedidos dentro de la clase y no por fuera
    static contadorGlobal = 0;

    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
        this.contador = 0;
    }
    setClave = ( clave) => {
        this.#clave = clave
    }
    getClave = () => {
        return this.#clave;
    }
    // Methods
    saludar = ()=> {
        console.log(`Hola soy ${ this.nombre} `);
    }

    getEdad = () => {
        return this.edad;
    }
    setEdad = ( edad) => {
        this.edad = edad;
    }
    incrementar = () => {
        this.contador++;
        Persona.contadorGlobal++;
    }
    static getContadorGlobal = () => {
        return Persona.contadorGlobal
    }

}


const p1 = new Persona('José', 23);
const p2 = new Persona('Micaela', 27);
p1.saludar();
p1.setClave('1234');
p2.saludar();
p2.setClave('123');

console.log( p1.nombre, p1.clave); 