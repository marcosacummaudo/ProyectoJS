//debugger
let lista = document.getElementById("listaPrecio")

tamHelados.forEach(el => {
    lista.innerHTML += `<li>${el.codigo} - ${el.nombre}: $${el.precio}</li>`
})

let listaSab = document.getElementById("listaSabores")

sabores.forEach(el => {
    listaSab.innerHTML += `<li>${el.codigo} - ${el.nombre}: ${el.descripcion}</li>`
})

let compraReal = document.getElementById("compraRealizada")

compra.forEach(el => {
    compraReal.innerHTML += `<li>${el.codigo} - ${el.nombre}: $${el.precio}</li>`
})
