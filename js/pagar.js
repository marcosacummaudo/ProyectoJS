const imputEfectivo = document.querySelector("input#efectivo")
const imputTarjetaDebito = document.querySelector("input#tarjetaDebito")
const formaPago = document.querySelector("div#formaPago")

//imputEfectivo.addEventListener("click", () => devolverFormaPago())
//imputTarjetaDebito.addEventListener("click", () => devolverFormaPago())

botonSeguirComprando.addEventListener("click", () => location.href = 'index.html')


//debugger
recuperarCompraStorage()

cargarProductos(compra)

devolverFormaPago()

const imputValorEfectivo = document.querySelector("input#ingresoEfectivo")
const imputDebitoNombre = document.querySelector("div.input#cc-name")
const botonConfirmaPago = document.querySelector("button.btn.btn-primary.btn-lg.confirmaPago.botonGrande")
botonConfirmaPago.addEventListener("click", () => revisarPagoVuelto(parseFloat(imputValorEfectivo.value)))

const bodyModal = document.querySelector("div.modal-body")

const footerModal = document.querySelector("div.modal-footer")

//const botonConfirmaPagoFooterModal = document.querySelector("button.btn.btn-primary.confirmaConfirmaPago")

//botonConfirmaPagoFooterModal.addEventListener("click", () => confirmaCompra())