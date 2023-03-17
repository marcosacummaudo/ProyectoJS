let opcion

class tamHelado {
    constructor(codigo,nombre,precio,cantGustos) {
        this.codigo = codigo //hacer secuencial
        this.nombre = nombre //Normalizar para que queden todos con minusculas
        this.precio = precio
        this.cantGustos = cantGustos
    }
}
const tamHelados = []

tamHelados.push(new tamHelado(1, "1 Kilo", 2000, 4))
tamHelados.push(new tamHelado(2, "1/2 Kilo", 1000, 4))
tamHelados.push(new tamHelado(3, "1/4 Kilo", 500, 3))
tamHelados.push(new tamHelado(4, "Cono o Vasito Grande", 400, 2))
tamHelados.push(new tamHelado(5, "Cono o Vasito Chico", 250, 1))

const mensajeInicial =  "¡Bienvenido a Heladería Roma!\n" + 
                        "¿Qué tamaño de helado desea comprar?\n" +
                        tamHelados[0].codigo + " - " + tamHelados[0].nombre + ": $" + tamHelados[0].precio + " | Cantidad de gustos: " + tamHelados[0].cantGustos + "\n" +
                        tamHelados[1].codigo + " - " + tamHelados[1].nombre + ": $" + tamHelados[1].precio + " | Cantidad de gustos: " + tamHelados[1].cantGustos + "\n" +
                        tamHelados[2].codigo + " - " + tamHelados[2].nombre + ": $" + tamHelados[2].precio + " | Cantidad de gustos: " + tamHelados[2].cantGustos + "\n" +
                        tamHelados[3].codigo + " - " + tamHelados[3].nombre + ": $" + tamHelados[3].precio + " | Cantidad de gustos: " + tamHelados[3].cantGustos + "\n" +
                        tamHelados[4].codigo + " - " + tamHelados[4].nombre + ": $" + tamHelados[4].precio + " | Cantidad de gustos: " + tamHelados[4].cantGustos + "\n" +
                        "¡Ingrese el número de la opción seleccionada!"


// function armarListado(arreglo) {
//     listado =+ arreglo.forEach(elemento => {
//         elemento.codigo + " - " + elemento.nombre + ": $" + elemento.precio + "\n"
//     })
//     return listado
// }

// const mensajeInicial =  "¡Bienvenido a Heladería Roma!\n" + 
//                         "¿Qué tamaño de helado desea comprar?\n" +
//                         armarListado(tamHelados) + "\n" +
//                         "¡Ingrese el número de la opción seleccionada!"


