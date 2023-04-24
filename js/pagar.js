const imputEfectivo = document.querySelector("input#efectivo")
const formaPago = document.querySelector("div#formaPago")

botonSeguirComprando.addEventListener("click", () => location.href = 'index.html')

recuperarCompraStorage()

cargarProductos(compra)

devolverFormaPago()

const imputValorEfectivo = document.querySelector("input#ingresoEfectivo")
const botonConfirmaPago = document.querySelector("button.btn.btn-primary.btn-lg.confirmaPago.botonGrande")

botonConfirmaPago.addEventListener("click", () => revisarPagoVuelto(parseFloat(imputValorEfectivo.value)))