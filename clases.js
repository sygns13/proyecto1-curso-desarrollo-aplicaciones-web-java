class Producto{
    constructor(producto, precioCompra, precioVenta, cantidad){
        this.producto = producto;
        this.precioCompra = precioCompra;
        this.precioVenta = precioVenta;
        this.cantidad = cantidad;
    }

    //Getters
    get utilidadUnitaria(){
        return this.calcUtilidadUnitaria();
    }

    get utilidadTotal(){
        return this.calcUtilidadTotal();
    }

    //Metodos
    calcUtilidadUnitaria(){
        return this.precioVenta - this.precioCompra;
    }
    calcUtilidadTotal(){
        return this.cantidad * this.calcUtilidadUnitaria();
    }
}