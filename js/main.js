function calcularVuelto(pago, importe) {
    let vuelto = pago - importe
    alert("El importe de su compra es: $" + importe + "\n" + 
            "Usted abonara con: $" + pago + "\n" +
            "Su vuelto es: $" + vuelto + "\n" +
            "¡Muchas gracias por su compra!")
}

function revisarPago(opcionElegida) {
    let pago
    let precioAPagar = 0
    precioAPagar = opcionElegida.reduce((acum, el) => acum + el.precio, 0)
    do {
        do {
            pago = parseFloat(prompt("El importe a pagar es $" + precioAPagar + ", ¿con cuanto abonara?\n" +
                                    "Debe ingresar un número igual o mayor que $" + precioAPagar))
        } while (isNaN(pago))
    } while(pago<precioAPagar)
    calcularVuelto(pago,precioAPagar)
}

function saludar() {
    let respuesta1 = "False"
        do {
            do {
                opcion = prompt(mensajeInicial)
                if(opcion === null) {
                    alert("Acaba de cancelar el inicio de su compra.")
                    break
                }
                if(opcion!=='1' && opcion!=='2' && opcion!=='3' && opcion!=='4' && opcion!=='5') {
                    alert("Debe ingresar un número del 1 al 5.")
                }
            } while (opcion!=='1' && opcion!=='2' && opcion!=='3' && opcion!=='4' && opcion!=='5')
            if (opcion !== null) {
                opcionNumero = parseInt(opcion)
                opcionElegida = tamHelados.find((el) => el.codigo === opcionNumero)
                compra.push(opcionElegida)
            respuesta1 = confirm("¿Desea otro helado?")
            }
            else{
                break
            }
        }while (respuesta1)
    if (opcion !== null) {
        revisarPago(compra)
    }
}

function ejecutar() {
    //debugger
    let respuesta = "False"
    do {
        compra.splice(0, compra.length)
        saludar()
        respuesta = confirm("¿Desea continuar comprando?")
    } while (respuesta)
}
