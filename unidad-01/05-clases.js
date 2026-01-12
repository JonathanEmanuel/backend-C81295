class Persona {
    // Atributos
    nombre = '';
    edad = 0;
    static contadorGlobal = 0;

    constructor(nombre, edad){
        //console.log('Hola desde el contructor');
        this.nombre = nombre;
        this.edad = edad;
        this.contador = 0;
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
p2.saludar();

p2.setEdad(30);
console.log(`${p1.nombre} tiene ${ p1.edad } años`);
console.log(`${p2.nombre} tiene ${ p2.getEdad() } años`);
console.log( p1.edad);
p1.incrementar();
p2.incrementar();
p1.incrementar();

console.log(  p1.contador, p2.contador )
console.log('Contador Global', Persona.getContadorGlobal());