//debugger

cargarPrecios()

habilitarClic()

recuperarCompraStorage()

cargarProductos(compra)

botonPagar.addEventListener("click", () => IrAPagar())

function IrAPagar() {
    if(compra.length > 0) {
        location.href = 'pagar.html'
    }
    else {

    }
}