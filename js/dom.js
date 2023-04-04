const tbody = document.querySelector("tbody")
const totalAPagar = document.querySelector("div#totalAPagar")
const botonPagar = document.querySelector("button.btn.btn-primary.btn-lg.pagar")
const botonSeguirComprando = document.querySelector("button.btn.btn-primary.btn-lg.seguirComprando")
const botonConfirmaPago = document.querySelector("button.btn.btn-primary.btn-lg.confirmaPago")

const cargarProductos = (array)=> {
    let tabla = ""
    if (array.length > 0) {
        array.forEach(prod => {
            tabla += retornoTablaHTML(prod)
        })
    }
    tbody.innerHTML = tabla
    totalAPagar.innerHTML = calculaTotal()
}

let tarjetaPrecio = document.querySelector("section.row")

const guardarCompraStorage = () => {
    if (compra.length > 0) {
        localStorage.setItem("compra", JSON.stringify(compra))
    }
}

const recuperarCompraStorage = () => {
    const compraActual = JSON.parse(localStorage.getItem("compra"))
    if (compraActual !== null) {
        compra.push(...compraActual)
    }
}

function cargarPrecios(){
    if (tamHelados.length > 0) {
        tamHelados.forEach(el => {
            retornoCardPrecio(el)
        })
    }
}

function agregarProdCarrito(el){
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

function quitarProdCarrito(indice){
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
            debugger
            let codigo = parseInt(e.target.id)
            if(codigo > 0){
                let prod = tamHelados.find((el) => el.codigo === codigo)
                agregarProdCarrito(prod)
            }
            else {
                let indice = compra.map(elem => elem.codigo).indexOf((-codigo))
                if (indice >= 0) {
                    quitarProdCarrito(indice)
                }
            }
    })
    }
}

function calculaTotal () {
    let precioAPagar = 0
    precioAPagar = compra.reduce((acum, el) => acum + el.precioTotal, 0)
    return "El total a pagar es: $ " + precioAPagar
}
