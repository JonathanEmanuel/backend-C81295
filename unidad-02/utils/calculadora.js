export default calcularTotal = (...numeros) => {
    return numeros.reduce((a, b) => a.precio + b.precio )
}