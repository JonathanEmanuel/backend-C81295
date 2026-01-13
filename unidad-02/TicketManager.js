class TicketManager {
    // Atributos    
    eventos = [];
    #idContador = 1;
    #precioBaseDeGanancia = 0.15;
    constructor (){
        this.eventos = []
    }

    // Métodos
    getEventos = () => {
        return this.eventos;
    }
    addEvento( nombre, lugar, precio, capacidad=50, fecha= new Date() ){
        const precioFinal = precio + ( precio * this.#precioBaseDeGanancia);
        const nuevoEvento = {
            id: this.idContador,
            nombre: nombre,
            lugar,
            precio: precioFinal,
            capacidad,
            fecha,
            participantes: []
        }
        this.#idContador++;
        this.eventos.push( nuevoEvento );
        return nuevoEvento;
    }
    addUsuario(idEvento, idUsuario){
        // Verificamos que el evento exista
        const evento = this.eventos.find( event => event.id === idEvento);

        if( !evento){
            return { error: 'No existe el evento'}
        }

        const usuarioRegistrado = evento.participantes.includes( idUsuario );
        if( usuarioRegistrado) {
            return { error: 'El usuario ya está registrado'}
        }

        evento.participantes.push(idUsuario);
        return { evento }
    }

}