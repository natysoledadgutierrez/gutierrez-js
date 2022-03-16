const agregarAlCarrito = (producto, cantidad) => {
    producto.cantidadQueLleva = cantidad;
    carrito.push(producto);
}

const borrarDelCarrito = (id) => {
    let productoParaBorrar = carrito.filter(carrito => carrito.id === id);
    carrito.shift(productoParaBorrar);
}

const tieneStock = (producto, cantidadQueLleva) => {
    if (cantidadQueLleva < 1) {
        return false;
    }
    else if (cantidadQueLleva > producto.stock) {
        return false;
    }
    else {
        return true;
    }
}

const buscarProducto = (valorDelBuscador) => {
    let productosFiltrados = productos.filter(
         (producto) => producto.nombre.toUpperCase().trim().includes(valorDelBuscador.toUpperCase().trim())
    );
    return productosFiltrados;
}

const obtenerOfertas = () => {
    let productosFiltrados = productos.filter(
         (producto) => producto.esOferta
    );
    return productosFiltrados;
}

const ordenarPorPrecioMenor = () => {
    let productosOrdenados = productos.sort((a,b) => (a.precio > b.precio) ? 1 : ((b.precio > a.precio) ? -1 : 0));
    return productosOrdenados;
}

const ordenarPorPrecioMayor = () => {
    let productosOrdenados = productos.sort((a,b) => (a.precio < b.precio) ? 1 : ((b.precio < a.precio) ? -1 : 0));
    return productosOrdenados;
}

const carrito = [];
const productos = [
    { id: '1', nombre: 'Monitor Samsung Led 22 Pulgadas Frecuencia Hz 60 Hdmi Full Hd Promo', 
    precio: 26599, stock: 70, cuotas: 12, interes: 0, envioGratis: false, esOferta: false },
    {id: '2', nombre: 'Monitor Led 24 Pulgadas Iqual Iq24h 1080p Hdmi Full Hd', 
    precio: 20999, stock: 40, cuotas: 0, interes: 0, envioGratis: false, esOferta: false },
    {id: '3', nombre: 'Auriculares gamer inalámbricos Astro A50 negro y gris', 
    precio: 30291, stock: 5, cuotas: 12, interes: 25, envioGratis: false, esOferta: true },
    { id: '4', nombre: 'Gabinete Gamer Noga 8608 Coolers Panel Vidrio + Fuente', 
    precio: 8499, stock: 2, cuotas: 0, interes: 0, envioGratis: true, esOferta: false },
]

//Iteracion Carrito Desafio Anterior (Incorporar Arrays)
let seguir;

while (seguir !== "n") {
    const posicionProducto = prompt(`Selecciona los productos 
        0.${productos[0].nombre} $ ${productos[0].precio}
        1.${productos[1].nombre} $ ${productos[1].precio}
        2.${productos[2].nombre} $ ${productos[2].precio}
        3.${productos[3].nombre} $ ${productos[3].precio}`);

    let productoSeleccionado = productos[posicionProducto];

    if (productoSeleccionado !== undefined) {
        let cantidadDelProductoQueLleva = parseInt(prompt(`Cuantos ${productoSeleccionado.nombre} queres llevar?`));
        if (tieneStock(productoSeleccionado, cantidadDelProductoQueLleva)) {
            agregarAlCarrito(productoSeleccionado, cantidadDelProductoQueLleva);
            let stockRestante = productoSeleccionado.stock - cantidadDelProductoQueLleva;
            alert(`Al producto ${productoSeleccionado.nombre} le quedan ${stockRestante} de stock`);
        }
        else {
            alert(`La cantidad de ${cantidadDelProductoQueLleva} supera el stock de ${productoSeleccionado.stock}`);
        }
    }

    seguir = prompt('Queres dejar de comprar? Presiona la tecla "n"');
}

let total = 0;
let cantidadTotal = 0;


for(let i=0; i < carrito.length; i++){
    total += carrito[i].precio * carrito[i].cantidadQueLleva;
    cantidadTotal += carrito[i].cantidadQueLleva;
}

alert(`La cantidad es de ${cantidadTotal} y el total es de $ ${total}`);


