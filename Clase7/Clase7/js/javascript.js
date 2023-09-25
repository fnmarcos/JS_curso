// Mail

// marcos_fernandez97@hotmail.com

class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    getInformacionProducto() {
        return "Nombre: " + this.nombre + " | Precio: " + this.precio + " | Stock " + this.stock + " ";
    }
}

class ProductoElectronico extends Producto {
    constructor(nombre, precio, stock, potencia) {
        super(nombre, precio, stock);
        this.potencia = potencia;
    }

    getPotencia() {
        return this.potencia;
    }
}

class ProductoAlimenticio extends Producto {
    fechaVencimiento;
    alimentoPerecedero;
    constructor(nombre, precio, stock, fechaVencimiento, alimentoPerecedero) {
        super(nombre, precio, stock)
        this.fechaVencimiento = fechaVencimiento;
        this.alimentoPerecedero = alimentoPerecedero;
    }
    tipoAlimento() {
        let respuesta = "";

        if (this.alimentoPerecedero) {
            respuesta = this.nombre + ' es un alimento perecedero.';
        } else {
            respuesta = this.nombre + ' no es un alimento perecedero.';
        }

        return respuesta;
    }
}

class Carrito {

    constructor() {
        this.productos = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
    }

    eliminarProducto(index) {
        this.productos.splice(index, 1);
    }

    calcularTotal() {

        return (
            this.productos.reduce((sum_acumulativa, currentValue) =>
                (sum_acumulativa + parseInt(currentValue.precio)), 0)
        )
    }

    borrarCarrito() {
        this.productos.splice(0, this.productos.length);
    }

}

//inicio de variables
const carrito = new Carrito();

function agregarAlCarrito(elemento) {

    let tipoProducto = $(elemento).attr("data-tipo");
    let index = $(elemento).attr("data-index");
    let nombreProducto = $("#producto_" + index + " .nombre").text();
    let precio = $("#producto_" + index + " .precio").text();

    if (tipoProducto === "electronico") {

        let potencia = $("#producto_" + index + " .potencia").text();
        let pe = new ProductoElectronico(nombreProducto, precio, 1, potencia);
        carrito.agregarProducto(pe);

    } else {

        let fechaVencimiento = $("#producto_" + index + " .caducidad").text();
        let alimentoPerecedero = true;
        let pa = new ProductoAlimenticio(nombreProducto, precio, 1, fechaVencimiento, alimentoPerecedero);
        carrito.agregarProducto(pa);
    }
    mostrarCarrito();
}

function mostrarCarrito() {

    const listaCarrito = $("#lista-carrito");
    const resumenCompras = $("#resumen")

    listaCarrito.empty();


    carrito.productos.forEach(
        (producto, index) => {

            const li = $("<li>").text(producto.getInformacionProducto());
            const eliminarBtn = $("<button>").text("Eliminar");

            listaCarrito.append(li);

            li.append(eliminarBtn);

            eliminarBtn.click(() => eliminarDelCarrito(index));

        }
    );

    resumenCompras.html("Cantidad de productos: " + carrito.productos.length + " . Total: " + carrito.calcularTotal());

    const eliminarCarrto = $("<button>").text("Borrar Carrito");

    resumenCompras.append(eliminarCarrto);

    eliminarCarrto.click(() => eliminarDelCarrito());
}

function eliminarDelCarrito(index) {

    if (index == undefined) {

        carrito.borrarCarrito();
    }
    else {
        carrito.eliminarProducto(index);
    }
    mostrarCarrito();

}








