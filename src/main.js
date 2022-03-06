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

let seguir;
let total = 0;
let cantidad = 0;

while (seguir !== "N") {
    const productos = prompt(`Selecciona los productos 
        1.${producto1.nombre} $ ${producto1.precio}
        2.${producto2.nombre} $ ${producto2.precio}
        3.${producto3.nombre} $ ${producto3.precio}
        4.${producto4.nombre} $ ${producto4.precio}`);

    let productoSeleccionado;

    switch (productos) {
        case '1':
            alert(`Se agrego al carrito ${producto1.nombre}`);
            productoSeleccionado = producto1;
            break;
        case '2':
            alert(`Se agrego al carrito ${producto2.nombre}`);
            productoSeleccionado = producto2;
            break;
        case '3':
            alert(`Se agrego al carrito ${producto3.nombre}`);
            productoSeleccionado = producto3;
            break;
        case '4':
            alert(`Se agrego al carrito ${producto4.nombre}`);
            productoSeleccionado = producto4;
            break;
        default:
            alert('No existe el producto.')
            break;
    }

    if (productoSeleccionado !== undefined) {
        let cantidadQueLleva = parseInt(prompt(`Cuantos ${productoSeleccionado.nombre} queres llevar?`));
        if (puedeComprar(productoSeleccionado, cantidadQueLleva)) {
            total += productoSeleccionado.precio * productoSeleccionado.stock;
            cantidad += cantidadQueLleva;
            stockRestante(productoSeleccionado, cantidadQueLleva);
        }
        else {
            alert(`La cantidad de ${cantidadQueLleva} supera el stock de ${productoSeleccionado.stock}`);
        }
    }

    seguir = prompt('Queres dejar de comprar? Presiona la tecla "N"');
}

alert(`La cantidad es de ${cantidad} y el total es de $ ${total}`)

function stockRestante(producto, cantidad) {
    let stockRestante = producto.stock - cantidad;
    alert(`El stock restante es de ${stockRestante}`);
}

function puedeComprar(producto, cantidadQueLleva) {
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