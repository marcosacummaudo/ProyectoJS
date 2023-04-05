const contenedorTabla = document.querySelector("div.contentTabla")
const footer = document.querySelector("footer")
const fecha = new Date().getFullYear()

footer.innerHTML = `
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-md-4">
                <p class="text-center"><img src="img/phone.svg" alt="telefono"> 0345 4217711 | <a href="https://api.whatsapp.com/send/?phone=543454015523&amp;text&amp;type=phone_number&amp;app_absent=0" target="_blank"><img src="img/icons8-whatsapp24.svg" alt="whatsapp"> 3454015523</a></p>
            </div>
            <div class="col-xs-12 col-md-4">
                <p class="text-center"><strong>© ${fecha} Helados Roma</strong></p>
            </div>
            <div class="col-xs-12 col-md-4">
                <a href="https://www.instagram.com/heladeriaroma_/?hl=es" target="_blank"><p class="text-center"><img src="img/instagram.svg" alt="instagram"> ¡Seguinos!</p></a>
            </div>
        </div>
    </div>`

contenedorTabla.innerHTML = `
    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th>NOMBRE</th>
                <th>CANTIDAD</th>
                <th>PRECIO</th>
                <th>IMPORTE</th>
            </tr>
        </thead>
        <tbody>
            
        </tbody>
    </table>`

const retornoTablaHTML = (prod)=> {
    return `<tr>
                <td>${prod.nombre}</td>
                <td>${prod.cantidad}</td>
                <td>${prod.precio}</td>
                <td>${prod.precioTotal}</td>
            </tr>`
}

function retornoCardPrecio(el) {
    tarjetaPrecio.innerHTML += `<div class="card cardPrecio">
                                    <div class="card-body">
                                        <h5 class="card-title">${el.nombre}</h5>
                                        <h6 class="card-subtitle mb-2 text-muted">Precio: $${el.precio}</h6>
                                        <p class="card-text">Cant. Gustos: ${el.cantGustos}.</p>
                                        <button class="btn btn-primary prod" id="${el.codigo}" type="submit">+</button>
                                        <button class="btn btn-primary prod" id="-${el.codigo}" type="submit">-</button>
                                    </div>
                                </div>`
}

function devolverFormaPago () {
    formaPago.innerHTML = `
        <h6>Ingrese el importe con el que va a pagar:</h6>
        <div class="col-6 input-group mb-3">
            <span class="input-group-text">$</span>
            <span class="input-group-text">0.00</span>
            <input type="text" class="form-control" id="ingresoEfectivo" aria-label="Dollar amount (with dot and two decimal places)">
        </div>`
}
