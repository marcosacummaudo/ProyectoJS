const imputEfectivo = document.querySelector("input#efectivo")
const imputTarjetaDebito = document.querySelector("input#tarjetaDebito")
const formaPago = document.querySelector("div#formaPago")

imputEfectivo.addEventListener("click", () => devolverFormaPago())
imputTarjetaDebito.addEventListener("click", () => devolverFormaPago())

botonSeguirComprando.addEventListener("click", () => location.href = 'index.html')
botonConfirmaPago.addEventListener("click", () => location.href = 'pagar.html')

//debugger
recuperarCompraStorage()

cargarProductos(compra)

devolverFormaPago()

const imputValorEfectivo = document.querySelector("input#ingresoEfectivo")
const imputDebitoNombre = document.querySelector("div.input#cc-name")