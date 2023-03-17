function calcularVuelto(pago, importe) {
    let vuelto = pago - importe
    alert("El importe de su compra es: $" + importe + "\n" + 
            "Usted abonara con: $" + pago + "\n" +
            "Su vuelto es: $" + vuelto + "\n" +
            "¡Muchas gracias por su compra!")
}

function revisarPago(precio) {
    let pago
    do {
        do {
            pago = parseFloat(prompt("El importe a pagar es $" + precio + ", ¿con cuanto abonara?\n" +
                                        "Debe ingresar un número igual o mayor que $" + precio))
        } while (isNaN(pago))
    } while(pago<precio)
    calcularVuelto(pago,precio)
}

function saludar() {
    let precio
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
    switch(opcion) {
        case "1":
            precio = 2000
            break
        case "2":
            precio = 1000
            break
        case "3":
            precio = 500
            break
        case "4":
            precio = 400
            break
        case "5":
            precio = 250
            break
        default:
            precio = 0
            break
    }
    if (precio !== 0) {
        revisarPago(precio)
    }
}

function ejecutar() {
    //debugger
    let respuesta = "False"
    do {
        saludar()
        respuesta = confirm("¿Desea continuar comprando?")
    } while (respuesta)
}
