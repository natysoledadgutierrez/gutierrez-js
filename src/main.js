const producto1 = {
    id: '1',
    nombre: 'Monitor Samsung Led 22 Pulgadas Frecuencia Hz 60 Hdmi Full Hd Promo',
    precio: 26599,
    stock: 70,
    cuotas: 12,
    interes: 0,
    envioGratis: false
}

const producto2 = {
    id: '2',
    nombre: 'Monitor Led 24 Pulgadas Iqual Iq24h 1080p Hdmi Full Hd',
    precio: 20999,
    stock: 40,
    cuotas: 0,
    interes: 0,
    envioGratis: false
}

const producto3 = {
    id: '3',
    nombre: 'Auriculares gamer inalámbricos Astro A50 negro y gris',
    precio: 30291,
    stock: 5,
    cuotas: 12,
    interes: 25,
    envioGratis: false
}

const producto4 = {
    id: '4',
    nombre: 'Gabinete Gamer Noga 8608 Coolers Panel Vidrio + Fuente',
    precio: 8499,
    stock: 2,
    cuotas: 0,
    interes: 0,
    envioGratis: true
}

const agregarAlCarrito = (producto, cantidad) => {
    producto.cantidadQueLleva = cantidad;
    carrito.push(producto);
}

const carrito = [];
const productos = [producto1, producto2, producto3, producto4];
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

function tieneStock(producto, cantidadQueLleva) {
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