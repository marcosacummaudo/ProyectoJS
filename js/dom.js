const tbody = document.querySelector("tbody")
const totalAPagar = document.querySelector("div#totalAPagar")
const botonPagar = document.querySelector("button.btn.btn-primary.btn-lg.pagar.botonGrande")
const botonSeguirComprando = document.querySelector("button.btn.btn-primary.btn-lg.seguirComprando.botonGrande")

const cargarProductos = (array) => {
    let tabla = ""
    array.length > 0 && array.forEach(prod => {tabla += retornoTablaHTML(prod)})
    tbody.innerHTML = tabla
    totalAPagar.innerHTML = "El total a pagar es: $ " + calculaTotal()
}

let tarjetaPrecio = document.querySelector("section.row")

const guardarCompraStorage = () => {
    compra.length > 0 && localStorage.setItem("compra", JSON.stringify(compra))
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
        compra.push(new artCompra(el.codigo,el.nombre,el.precio,1))
    }
    else {
        compra[indice].cantidad++
        compra[indice].precioTotal = (compra[indice].cantidad * compra[indice].precio)
    }
    guardarCompraStorage()
    cargarProductos(compra)
}

function quitarProdCarrito(indice) {
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
    if (valor >= total) {
        footerModal.innerHTML = `<button type="button" class="btn btn-primary confirmaConfirmaPago" data-bs-dismiss="modal">Confirma Compra</button>`
        bodyModal.innerHTML = "El importe a pagar es $" + total + ".<br>" +
                            "Usted abonara con $" + valor + ".<br>" +
                            "Su vuelto es $" + (valor-total)
        const botonConfirmaPagoFooterModal = document.querySelector("button.btn.btn-primary.confirmaConfirmaPago")
        botonConfirmaPagoFooterModal.addEventListener("click", () => confirmaCompra())
    }
    else {
        footerModal.innerHTML = `<button type="button" class="btn btn-danger noPasa" data-bs-dismiss="modal">Volver</button>`
        bodyModal.innerHTML = "Debe ingresar un valor mayor o igual a $" + total
    }
}

function confirmaCompra() {
    localStorage.removeItem("compra")
    location.href ="index.html"
}

function IrAPagar() {
    compra.length > 0 && (location.href = 'pagar.html')
}