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
    if (imputEfectivo.checked) {
        formaPago.innerHTML = `
        <h6>Ingrese el importe con el que va a pagar:</h6>
        <div class="input-group mb-3">
            <span class="input-group-text">$</span>
            <span class="input-group-text">0.00</span>
            <input type="text" class="form-control" id="ingresoEfectivo" aria-label="Dollar amount (with dot and two decimal places)">
        </div>`
    }
    else {
        formaPago.innerHTML = `
            <h6>Ingrese los datos de la tarjeta:</h6>
            <div class="row">
                <div class="col-md-6 mb-3">
                    <label for="cc-name">Nombre Titular Tarjeta</label>
                    <input type="text" class="form-control" id="cc-name" placeholder="" required="">
                    <small class="text-muted">Se requiere el nombre completo como figura en la tarjeta</small>
                    <div class="invalid-feedback">Name on card is required</div>
                </div>
                <div class="col-md-6 mb-3">
                    <label for="cc-number">Credit card number</label>
                    <input type="text" class="form-control" id="cc-number" placeholder="" required="">
                    <div class="invalid-feedback">Credit card number is required</div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3 mb-3">
                    <label for="cc-expiration">Expiration</label>
                    <input type="text" class="form-control" id="cc-expiration" placeholder="" required="">
                    <div class="invalid-feedback">Expiration date required</div>
                </div>
                <div class="col-md-3 mb-3">
                    <label for="cc-expiration">CVV</label>
                    <input type="text" class="form-control" id="cc-cvv" placeholder="" required="">
                    <div class="invalid-feedback">Security code required</div>
                </div>
            </div>`
    }
}