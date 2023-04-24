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
    constructor(codigo,nombre,precio,cantGustos,cantidad) {
        this.codigo = codigo
        this.nombre = nombre
        this.precio = precio
        this.cantGustos = cantGustos
        this.cantidad = cantidad
        this.precioTotal = (this.precio * this.cantidad)
    }
}

const tamHelados = []

const sabores = []

const compra = []

const urlProductos = 'https://643fdd30b9e6d064be00ea74.mockapi.io/roma/Productos'

const urlSabores = 'https://643fdd30b9e6d064be00ea74.mockapi.io/roma/Sabores'
