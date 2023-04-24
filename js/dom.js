const tbody = document.querySelector("tbody")
const totalAPagar = document.querySelector("div#totalAPagar")
const botonPagar = document.querySelector("button.btn.btn-primary.btn-lg.pagar.botonGrande")
const botonSabores = document.querySelector("button.btn.btn-primary.btn-lg.sabores.botonGrande")
const modalBody = document.querySelector("ul.listadoSaboresModal")
const botonLimpiar = document.querySelector("button.btn.btn-primary.btn-lg.limpiar.botonGrande")
const botonSeguirComprando = document.querySelector("button.btn.btn-primary.btn-lg.seguirComprando.botonGrande")

const cargarProductos = (array) => {
    let tabla = ""
    array.length > 0 && array.forEach(prod => {tabla += retornoTablaHTML(prod)})
    tbody.innerHTML = tabla
    totalAPagar.innerHTML = "El total a pagar es: $ " + calculaTotal()
}

let tarjetaPrecio = document.querySelector("section.row")

const guardarCompraStorage = () => {
    localStorage.setItem("compra", JSON.stringify(compra))
}

const recuperarCompraStorage = () => {
    const compraActual = JSON.parse(localStorage.getItem("compra"))
    compraActual !== null && compra.push(...compraActual)
}

function cargarPrecios() {
    tamHelados.length > 0 && tamHelados.forEach(el => {retornoCardPrecio(el)})
}

function agregarProdCarrito(el) {
    let indice = compra.map(elem => elem.codigo).indexOf(el.codigo)
    if (indice === -1) {
        compra.push(new artCompra(el.codigo,el.nombre,el.precio,el.cantGustos,1))
    }
    else {
        compra[indice].cantidad++
        compra[indice].precioTotal = (compra[indice].cantidad * compra[indice].precio)
    }
    guardarCompraStorage()
    cargarProductos(compra)
    mensajeMoviCarrito("☑️ Se agrego " + el.nombre + " a la compra")
}

function quitarProdCarrito(indice) {
    mensajeMoviCarrito("✖️ Se quito " + compra[indice].nombre + " a la compra")
    if (compra[indice].cantidad === 1) {
        compra.splice(indice,1)
    }
    else {
        compra[indice].cantidad = compra[indice].cantidad - 1
        compra[indice].precioTotal = (compra[indice].cantidad * compra[indice].precio)
    }
    guardarCompraStorage()
    cargarProductos(compra)
}

function habilitarClic() {
    const botonPedir = document.querySelectorAll("button.btn.btn-primary.prod")
    for (boton of botonPedir){
        boton.addEventListener("click", (e) => {
            let codigo = parseInt(e.target.id)
            if(codigo > 0){
                let prod = tamHelados.find((el) => el.codigo === codigo)
                agregarProdCarrito(prod)
            }
            else {
                let indice = compra.map(elem => elem.codigo).indexOf((-codigo))
                indice >= 0 && quitarProdCarrito(indice)
            }
    })
    }
}

function calculaTotal() {
    let precioAPagar = 0
    precioAPagar = compra.reduce((acum, el) => acum + el.precioTotal, 0)
    return precioAPagar
}

function revisarPagoVuelto(valor) {
    let total = calculaTotal()
    valor >= total ? mensajeSeguroConfirmaCompra(valor,total) : mensajeMoviCarrito("✖️ Debe ingresar un valor mayor o igual a $" + total)
}

function confirmaCompra() {
    localStorage.removeItem("compra")
    location.href ="index.html"
}

function irAPagar() {
    compra.length > 0 ? (location.href = 'pagar.html') : mensajeMoviCarrito("✖️ Debe tener articulos para la compra")
}

function irASabores() {
    compra.length > 0 ? (location.href = 'sabores.html') : mensajeMoviCarrito("✖️ Debe tener articulos para la compra")
}

function mensajeMoviCarrito(texto) {
    Toastify({
        text: texto,
        duration: 1000,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background:  "#1B4965",
        },
    }).showToast();
}

function limpiarCompra() {
    compra.length=0
    guardarCompraStorage()
    cargarProductos(compra)
    location.reload()
}

function mensajeSeguroBorrado() {
    if(compra.length > 0) {
        Swal.fire({
            title: '¿Seguro desea vaciar el carrito?',
            text: "¡Si vacia el carrito de compras se perdera todo lo cargado!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borrar todo!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    '¡Carrito Borrado!',
                    'El carito de compras se vacio.',
                    'success',
                    setTimeout(() => {limpiarCompra()}, 2000)
                )
            }
        })
    }
    else {
        mensajeMoviCarrito("✖️ Debe tener articulos para la compra")
    }
}

function mensajeSeguroConfirmaCompra(valor,total) {
    if(compra.length > 0) {
        Swal.fire({
            title: '¿Seguro confirma la compra?',
            text: "El importe a pagar es $" + total +
                ". Usted abonara con $" + valor +
                ". Su vuelto es $" + (valor-total),
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Confirmo!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    '¡Compra confirmada!',
                    '¡Muchas gracias por su compra!',
                    'success',
                    setTimeout(() => {confirmaCompra()}, 2000)
                )
            }
        })
    }
    else {
        mensajeMoviCarrito("✖️ Debe tener articulos para la compra")
    }
}

const obtenerProductos = () => {
    fetch(urlProductos)
        .then(response => response.status === 200 && response.json())
        .then((data)=> tamHelados.push(...data))
        .then(()=> {
            cargarPrecios(tamHelados)
            habilitarClic()
        })
        .catch(error=> {
            retornoErrorCardPrecio()
        })
}