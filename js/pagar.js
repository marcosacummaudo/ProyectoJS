const imputEfectivo = document.querySelector("input#efectivo")
const imputTarjetaDebito = document.querySelector("input#tarjetaDebito")
const formaPago = document.querySelector("div#formaPago")

botonSeguirComprando.addEventListener("click", () => location.href = 'index.html')

recuperarCompraStorage()

cargarProductos(compra)

devolverFormaPago()

const imputValorEfectivo = document.querySelector("input#ingresoEfectivo")
const imputDebitoNombre = document.querySelector("div.input#cc-name")
const botonConfirmaPago = document.querySelector("button.btn.btn-primary.btn-lg.confirmaPago.botonGrande")
const botonVolverSabores = document.querySelector("button.btn.btn-primary.btn-lg.volverSabores.botonGrande")

botonConfirmaPago.addEventListener("click", () => revisarPagoVuelto(parseFloat(imputValorEfectivo.value)))

botonVolverSabores.addEventListener("click", () => location.href = 'sabores.html')

//const bodyModal = document.querySelector("div.modal-body")

//const footerModal = document.querySelector("div.modal-footer")
