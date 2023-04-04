let opcion

class tamHelado {
    constructor(codigo,nombre,precio,imagen,cantGustos) {
        this.codigo = codigo
        this.nombre = nombre
        this.precio = precio
        this.imagen = imagen
        this.cantGustos = cantGustos
    }
}

class sabor {
    constructor(codigo,nombre,familia,descripcion) {
        this.codigo = codigo
        this.nombre = nombre
        this.familia = familia
        this.descripcion = descripcion
    }
}

class artCompra {
    constructor(codigo,nombre,precio,cantidad) {
        this.codigo = codigo
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
        this.precioTotal = (this.precio * this.cantidad)
    }
}

const tamHelados = []

const sabores = []

const compra = []

tamHelados.push(new tamHelado(1, "1 Kilo", 2000,"img/Kilo.JPG", 4))
tamHelados.push(new tamHelado(2, "1/2 Kilo", 1000,"img/1-2Kg.JPG", 4))
tamHelados.push(new tamHelado(3, "1/4 Kilo", 500,"img/1-4Kilo.JPG", 3))
tamHelados.push(new tamHelado(4, "Cono/Vasito Grande", 400,"img/2Gustos.png", 2))
tamHelados.push(new tamHelado(5, "Cono/Vasito Chico", 250,"img/1Gusto.png", 1))

sabores.push(new sabor(1, "Chantilly", "Cremas Clasicas y Especiales", "Crema, pero con nuestra tradicional receta."))
sabores.push(new sabor(2, "Granizado", "Cremas Clasicas y Especiales", "Chantilly con trozos de chocolate semi amargo."))
sabores.push(new sabor(3, "Tramontana", "Cremas Clasicas y Especiales", "Chantilly con dulce de leche tradicional y micro galletitas bañadas en chocolate."))
sabores.push(new sabor(4, "Vainilla", "Cremas Clasicas y Especiales", "Crema de vainilla."))
sabores.push(new sabor(5, "Crema del Cielo", "Cremas Clasicas y Especiales", "'La' crema del cielo."))
sabores.push(new sabor(6, "Menta Granizada", "Cremas Clasicas y Especiales", "La frescura de la menta y trozos de chocolate semi amargo."))
sabores.push(new sabor(7, "Mascarpone con Frutos Rojos", "Cremas Clasicas y Especiales", "Base del suave queso de postre y un fino coulise de frutos rojos."))
sabores.push(new sabor(8, "Flan con Dulce de Leche", "Cremas Clasicas y Especiales", "El clásico postre argentino en la versión de nuestra heladeria."))
sabores.push(new sabor(9, "Sambayon 'ROMA'", "Cremas Clasicas y Especiales", "Base de yema de huevos, vino marsala y el toque Roma de una tradicional receta."))
sabores.push(new sabor(10, "Bombon Rochers", "Cremas Clasicas y Especiales", "El famoso bombón hecho helado."))
sabores.push(new sabor(11, "OREO", "Cremas Clasicas y Especiales", "Crema sabor a cacao 'oreo' y galletitas partidas."))
sabores.push(new sabor(12, "Chocolate", "Chocolates", "El mejor y más seleccionado cacao hecho helado."))
sabores.push(new sabor(13, "Chocolate Suizo", "Chocolates", "Nuestro chocolate sembrado con dulce de leche tradicional."))
sabores.push(new sabor(14, "Chocolate Almendrado", "Chocolates", "Nuestro chocolate con las mejores almendras y trozos de chocolate semi amargo."))
sabores.push(new sabor(15, "Chocolate 'ROMA'", "Chocolates", "Nuestro chocolate con una selección de nueces, trozos de chocolates semi amargo y un toque de rhum."))
sabores.push(new sabor(16, "Dulce de Leche", "Dulce de Leches", "Un clásico de la gastronomía argentina en su mejor version, la que elaboramos desde 1984."))
sabores.push(new sabor(17, "Dulce de Leche Granizado", "Dulce de Leches", "Nuestro dulce de leche pero con trozos, perdon con TROZOS de chocolate semi amargo."))
sabores.push(new sabor(18, "Dulce de Leche a la Nuez", "Dulce de Leches", "Nuestro dulce de leche con nueces enteras y partidas seleccionadas."))
sabores.push(new sabor(19, "Dulce de Leche 'ROMA'", "Dulce de Leches", "Nuestro dulce de leche con un toque único, dulce de leche tradicional y merengues."))
sabores.push(new sabor(20, "Frutilla a la Crema", "Frutas a la Crema", "Riquísimas pulpas de frutillas heladas."))
sabores.push(new sabor(21, "Banana Split", "Frutas a la Crema", "Seleccionadas bananas licuadas y dulce de leche tradicional."))
sabores.push(new sabor(22, "Cerezas al Marraschino", "Frutas a la Crema", "Helado de cerezas con cerezas trozadas y enteras en la tradicional preparación al licor."))
sabores.push(new sabor(23, "Anana Fizz", "Frutas a la Crema", "Ananá a la crema sembrado con trozos de ananá y un fino agregado de la espumante bebida."))
sabores.push(new sabor(24, "Kinotos al Whisky", "Frutas a la Crema", "Base de helado de vainilla con una medida de whisky y los más ricos kinotos en almibar."))
sabores.push(new sabor(25, "Frutilla", "Frutas al Agua", "Las más ricas frutillas hechas helado."))
sabores.push(new sabor(26, "Durazno", "Frutas al Agua", "Sabrosos duraznos, para gusto muy rico."))
sabores.push(new sabor(27, "Limón", "Frutas al Agua", "Jugo de muchos limones y una tradicional receta."))
sabores.push(new sabor(28, "Cerezas al Limón", "Frutas al Agua", "La frescura de nuestro helado de limón con la dulzura de cerezas trozadas y enteras."))
sabores.push(new sabor(29, "Naranja", "Frutas al Agua", "En la capital nacional del citrus un infaltable."))
sabores.push(new sabor(30, "Ananá", "Frutas al Agua", "Seleccionados ananas licuados para hacer el mejor helado."))
sabores.push(new sabor(31, "Frutos del Bosque", "Frutas al Agua", "Moras, rosa mosqueta y frambuesa, frescura y acidez."))
sabores.push(new sabor(32, "Pomelo Rosado", "Frutas al Agua", "Un cítrico especial para un helado único."))
sabores.push(new sabor(33, "Kiwi", "Frutas al Agua", "Frescura, suavidad y delicadeza en un gusto helado."))

// const mensajeInicial =  "¡Bienvenido a Heladería Roma!\n" + 
//                         "¿Qué tamaño de helado desea comprar?\n" +
//                         tamHelados[0].codigo + " - " + tamHelados[0].nombre + ": $" + tamHelados[0].precio + " | Cantidad de gustos: " + tamHelados[0].cantGustos + "\n" +
//                         tamHelados[1].codigo + " - " + tamHelados[1].nombre + ": $" + tamHelados[1].precio + " | Cantidad de gustos: " + tamHelados[1].cantGustos + "\n" +
//                         tamHelados[2].codigo + " - " + tamHelados[2].nombre + ": $" + tamHelados[2].precio + " | Cantidad de gustos: " + tamHelados[2].cantGustos + "\n" +
//                         tamHelados[3].codigo + " - " + tamHelados[3].nombre + ": $" + tamHelados[3].precio + " | Cantidad de gustos: " + tamHelados[3].cantGustos + "\n" +
//                         tamHelados[4].codigo + " - " + tamHelados[4].nombre + ": $" + tamHelados[4].precio + " | Cantidad de gustos: " + tamHelados[4].cantGustos + "\n" +
//                         "¡Ingrese el número de la opción seleccionada!"

