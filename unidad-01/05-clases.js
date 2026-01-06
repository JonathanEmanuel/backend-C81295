class Persona {
    // Atributos
    nombre = '';
    edad = 0;

    constructor(nombre, edad){
        //console.log('Hola desde el contructor');
        this.nombre = nombre;
        this.edad = edad;
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
    }
    
}

const p1 = new Persona('José', 23);
const p2 = new Persona('Micaela', 27);
p1.saludar();
p2.saludar();

p2.setEdad(30);
console.log(`${p1.nombre} tiene ${ p1.edad } años`);
console.log(`${p2.nombre} tiene ${ p2.getEdad() } años`);
console.log( p1.edad);