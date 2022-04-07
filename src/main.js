const mensajeProductoAgregado = () => {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Se agrego correctamente el producto al carrito.',
        showConfirmButton: false,
        timer: 2000
      })
}

const obtenerCarrito = () => {
    if(localStorage.getItem("carrito") == null) {
        return [];
    }
    else {
        const storageProductos = JSON.parse(localStorage.getItem("carrito"));
        return storageProductos;
    }
}

const carrito = obtenerCarrito();

document.getElementById("cantidad-carrito").innerHTML = carrito.length;


let auricularCloud = { id: '7', nombre: 'Auriculares gamer HyperX Cloud Alpha black y red', 
precio: 12252, stock: 8, cuotas: 12, interes: 0, envioGratis: true, esOferta: false, imagen:"auricular1.jpg" }
const productos = [
    { id: '1', nombre: 'Monitor Samsung Led 22 Pulgadas Frecuencia Hz 60 Hdmi Full Hd Promo', 
    precio: 26599, stock: 70, cuotas: 12, interes: 15, envioGratis: false, esOferta: false, imagen:"monitor22.jpg" },
    {id: '2', nombre: 'Monitor Led 24 Pulgadas Iqual Iq24h 1080p Hdmi Full Hd', 
    precio: 20999, stock: 40, cuotas: 12, interes: 0, envioGratis: false, esOferta: false, imagen:"monitor24.jpg" },
    {id: '3', nombre: 'Monitor LG 19M37A led 19 Pulgadas negro 100V/240V', 
    precio: 21839, stock: 5, cuotas: 12, interes: 15, envioGratis: false, esOferta: true, imagen:"monitor19.jpg" },
    { id: '4', nombre: 'Teclado Dell KB522 QWERTY inglés internacional color negro', 
    precio: 15707, stock: 2, cuotas: 0, interes: 0, envioGratis: true, esOferta: false, imagen:"teclado1.jpg"},
    { id: '5', nombre: 'Teclado gamer Redragon Vata Pro K580RGB-PRO QWERTY Outemu Brown español latinoamérica color negro con luz RGB', 
    precio: 7390, stock: 2, cuotas: 0, interes: 0, envioGratis: true, esOferta: false, imagen:"teclado2.jpg"  },
    { id: '6', nombre: 'Teclado gamer Redragon Brahma K586-PRO QWERTY Outemu Blue inglés US color negro con luz RGB', 
    precio: 10258, stock: 2, cuotas: 12, interes: 0, envioGratis: true, esOferta: false, imagen:"teclado3.jpg" },
    auricularCloud,
    { id: '8', nombre: 'Auriculares gamer inalámbricos Logitech G Series G935 negro y azul con luz rgb LED', 
    precio: 18999, stock: 4, cuotas: 12, interes: 0, envioGratis: true, esOferta: false, imagen:"auricular2.jpg" },
    { id: '9', nombre: 'Auriculares gamer inalámbricos Astro A50 negro y gris', 
    precio: 30291, stock: 10, cuotas: 12, interes: 0, envioGratis: true, esOferta: false, imagen:"auricular3.jpg" },
    { id: '10', nombre: 'Mouse de juego Redragon Centrophorus2 M601-RGB', 
    precio: 1739, stock: 12, cuotas: 12, interes: 0, envioGratis: true, esOferta: false, imagen:"mouse1.jpg" },
    { id: '11', nombre: 'Mouse de juego Logitech G Series Lightsync G203 black', 
    precio: 2549, stock: 12, cuotas: 12, interes: 10, envioGratis: true, esOferta: false, imagen:"mouse2.jpg" },
    { id: '12', nombre: 'Pendrive SanDisk Cruzer Blade 64GB 2.0 negro y rojo', 
    precio: 1061, stock: 20, cuotas: 0, interes: 0, envioGratis: true, esOferta: false, imagen:"pendrive1.jpg" },
    { id: '13', nombre: 'Gabinete Gamer Iqual Cm-9527 Leg Rgb Templado + Fuente', 
    precio: 7199, stock: 2, cuotas: 12, interes: 0, envioGratis: true, esOferta: false, imagen:"gabinete1.jpg" },
    { id: '14', nombre: 'Gabinete Gamer Noga 8608 Coolers Panel Vidrio + Fuente', 
    precio: 8499, stock: 2, cuotas: 0, interes: 0, envioGratis: true, esOferta: false, imagen:"gabinete2.jpg" },
    { id: '15', nombre: 'Gabinete Gamer Iqual Cm-2801 Templado Fuente 700w Led Cuotas', 
    precio: 10799, stock: 2, cuotas: 6, interes: 0, envioGratis: true, esOferta: false, imagen:"gabinete3.jpg" },
    { id: '16', nombre: 'Fuente de alimentación para PC Noga ATX-550 P4 550W negra 200V', 
    precio: 1429, stock: 2, cuotas: 0, interes: 0, envioGratis: true, esOferta: false, imagen:"fuente1.jpg" },
    { id: '17', nombre: 'Fuente de alimentación para PC Noga RGB Power ATX-700 RGB 700W negra 200V - 240V', 
    precio: 5529, stock: 2, cuotas: 12, interes: 10, envioGratis: true, esOferta: false, imagen:"fuente2.jpg" },
    { id: '18', nombre: 'Fuente de alimentación para PC Thermaltake Technology TR2 Series TR2-500NL2NC 500W black 115V/230V', 
    precio: 8199, stock: 2, cuotas: 12, interes: 0, envioGratis: true, esOferta: false, imagen:"fuente3.jpg" },
    { id: '19', nombre: 'Disco duro externo Western Digital WD Elements WDBUZG0010BBK 1TB negro', 
    precio: 6799, stock: 2, cuotas: 12, interes: 0, envioGratis: true, esOferta: false, imagen:"memoriaexterna1.jpg" },
    { id: '20', nombre: 'Disco duro externo Seagate Expansion STEA2000400 2TB negro', 
    precio: 9929, stock: 2, cuotas: 12, interes: 0, envioGratis: true, esOferta: false, imagen:"memoriaexterna2.jpg" },
    { id: '21', nombre: 'Disco duro externo Seagate Basic STJL2000400 2TB negro', 
    precio: 8899, stock: 2, cuotas: 12, interes: 0, envioGratis: true, esOferta: false, imagen:"memoriaexterna3.jpg" },
    { ...auricularCloud, id: '22', nombre: 'Auriculares gamer HyperX Cloud Alpha Violeta', imagen:"auricular4.jpg"}
]

function generarCards(productosAMostrar){
    let acumuladorDeCards = ``;
    productosAMostrar.forEach((producto) => {
        const {coutas: cuotasProducto, interes, nombre, imagen, id, stock, precio } = producto;

        let cuotas = ``;
        if (cuotasProducto > 0 && interes >= 0) {
            let multiplicadorInteres = (interes / 100) + 1;
            let cuota = (precio * multiplicadorInteres) / cuotasProducto;
            cuotas = `<br>${cuotasProducto} x $${cuota}`;
        }

        let sinInteres = ``;
        if (interes === 0) {
            sinInteres = `<div class="cuotas">CUOTAS SIN INTERÉS</div>`;
        }
        
        acumuladorDeCards += 
        `<div class="card producto">
            <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">
            ${stock > 0 ? 'Hay stock' : 'Sin Stock'}</div>
            <img src="../img/${imagen}" class="card-img-top producto-zoom" alt="${nombre}">
            <div class="card-body">
                <p class="card-text">${nombre}</p>
                    <div class="precios"> $${precio} ${cuotas}</div>
                    ${sinInteres}

                <button class="btn btn-primary" onclick="agregarAlCarrito(${id})">Agregar al carrito</button>
            </div>
        </div>`
    });
    mostrarCardsEnElHTML(acumuladorDeCards);
}
function mostrarCardsEnElHTML(cards){
    document.getElementById("listado-productos").innerHTML = cards;
};


const agregarAlCarrito = (id) => {
    let producto = productos.filter(producto => producto.id == id);
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    document.getElementById("cantidad-carrito").innerHTML = carrito.length;
    mensajeProductoAgregado();
}

const borrarDelCarrito = (id) => {
    let productoParaBorrar = carrito.filter(carrito => carrito.id == id);
    carrito.shift(productoParaBorrar);
}

const tieneStock = (producto, cantidadQueLleva) => {
    if (cantidadQueLleva < 1 || cantidadQueLleva > producto.stock ) {
        return false;
    }
    else {
        return true;
    }
}

/*BUSCADOR DE PRODUCTOS*/
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

const botonBuscar = document.getElementById("buscar");
botonBuscar.onclick = () =>  {
    let valorBusqueda = document.getElementById("buscador").value;
    let resultado = buscarProducto(valorBusqueda);
    generarCards(resultado);
};

const textoBuscar = document.getElementById("buscador");
textoBuscar.oninput = (event) =>  {
    let valorBusqueda = event.target.value;
    let resultado = buscarProducto(valorBusqueda);
    generarCards(resultado);
};

const validarVacio = (event) => {
    let valor = event.target.value;

    if(valor == ""){
        document.querySelector("#error").innerHTML = "Por favor completa el campo.";
    }
    else{
        document.querySelector("#error").innerHTML = "";
    }
}

const teclaEnter = (event) => {
    if (event.keyCode === 13) {
        alert('Se presiono tecla enter para enviar el formulario');
    }
}