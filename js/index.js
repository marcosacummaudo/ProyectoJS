//debugger

cargarPrecios()

habilitarClic()

recuperarCompraStorage()

cargarProductos(compra)

botonPagar.addEventListener("click", () => {
    location.href = 'pagar.html'
    cargarProductos(compra)
})
