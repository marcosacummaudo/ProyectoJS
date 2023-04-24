const compraSabores = document.querySelector("div.accordion.accordion-flush")
const listadoSabores = document.querySelector("section.row.listadoSabores")
const tbodySabores = document.querySelector("tbody.sabores")


// contenedorTablaSabores.innerHTML = `
//     <table class="table sabores">
//         <thead>
//             <tr>
//                 <th scope="col">Cremas Clasicas y Especiales</th>
//                 <th scope="col">Chocolates</th>
//                 <th scope="col">Dulce de Leches</th>
//                 <th scope="col">Frutas a la Crema</th>
//                 <th scope="col">Frutas al Agua</th>
//             </tr>
//         </thead>
//         <tbody class="sabores">
            
//         </tbody>
//     </table>`

const obtenerSabores = () => {
    fetch(urlSabores)
        .then(response => response.status === 200 && response.json())
        .then((data)=> sabores.push(...data))
        .then(()=> cargarSabores(sabores))
        .catch(error=> {
            retornoErrorListaSabores()
        })
}

//debugger

obtenerSabores()


//cargarPrecios()

//habilitarClic()

//retornoListaSabores(sabores)

recuperarCompraStorage()

armarArraySabores()

cargarCompraSabores(compraParaSabores)

//botonLimpiar.addEventListener("click", () => mensajeSeguroBorrado())

function armarArraySabores() {
    //debugger
    compra.forEach(el => {
        for (let i = 0; i < el.cantidad; i++) {
            compraParaSabores.push(el)
        }
    })
}

function cargarCompraSabores (array) {
    //debugger
    array.length > 0 && array.forEach(prod => {compraSabores.innerHTML += CompraSabores(prod)})
}


function CompraSabores(array) {
    return `<div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        ${array.nombre}
                    </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <div class="row row-cols-12 row-cols-md-6 g-4">
                            <div class="col">
                                <div class="card">
                                    <!-- <img src="..." class="card-img-top" alt="..."> -->
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <!-- <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
}

//listadoSabores

function cargarPrecios() {
    sabores.length > 0 && sabores.forEach(el => {retornoCardPrecio(el)})
}

function retornoListaSabores(el) {
//     //debugger
    listadoSabores.innerHTML += `<li>${el.codigo} - ${el.nombre}:
                                    <p>${el.descripcion}</p>
                                </li>`
}

function retornoErrorListaSabores() {
    listadoSabores.innerHTML += `<h3>No se puedieron cargar los sabores.</h3>`
}

// function cargarSabores() {
//     sabores.length > 0 && sabores.forEach(el => {retornoListaSabores(el)})
// }

// const cargarProductos = (array) => {
//     let tabla = ""
//     array.length > 0 && array.forEach(prod => {tabla += retornoTablaHTML(prod)})
//     tbody.innerHTML = tabla
//     totalAPagar.innerHTML = "El total a pagar es: $ " + calculaTotal()
// }

//const cargarSabores = (array) => {
function cargarSabores(array) {
    let tabla = ""
    array.length > 0 && array.forEach(prod => {tabla += retornoTablaSaboresHTML(prod)})
    tbodySabores.innerHTML = tabla
//    totalAPagar.innerHTML = "El total a pagar es: $ " + calculaTotal()
}

botonPagar.addEventListener("click", () => irAPagar())

botonSeguirComprando.addEventListener("click", () => location.href = 'index.html')


