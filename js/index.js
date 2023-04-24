obtenerProductos()

recuperarCompraStorage()

cargarProductos(compra)

botonPagar.addEventListener("click", () => irAPagar())

botonSabores.addEventListener("click", () => ListaSabores())

botonLimpiar.addEventListener("click", () => mensajeSeguroBorrado())

function ListaSabores() {
    sabores.length = 0
    modalBody.innerHTML = ``
    obtenerSabores()
}

const obtenerSabores = () => {
    fetch(urlSabores)
        .then(response => response.status === 200 && response.json())
        .then((data)=> sabores.push(...data))
        .then(()=> cargarSabores(sabores))
        .catch(error=> {
            retornoErrorListaSabores()
        })
}

function retornoListaSabores(el) {
    modalBody.innerHTML += `<li class="itemsListaSabores">${el.codigo} - ${el.nombre}:
                                <p class="descripcionListaSabores">${el.descripcion}</p>
                            </li>`
}

function retornoErrorListaSabores() {
    modalBody.innerHTML += `<h5>No se pudieron obtener los sabores.</h5>`
}

function cargarSabores() {
    sabores.length > 0 && sabores.forEach(el => {retornoListaSabores(el)})
}
