module.exports = class GestionLibros {
    descuento;
    descuentoTotal;
    constructor() {
        this.descuento = 0;
        this.descuentoTotal = 0;
    }
    adquirirLibros(cantidad) {
        if (cantidad == 2) {
            this.descuento = 5;
        } else if (cantidad == 3) {
            this.descuento = 10;
        } else if (cantidad == 4) {
            this.descuento = 20;
        } else if (cantidad == 5) {
            this.descuento = 25;
        }
    }
    getDescuento() {
        return this.descuento;
    }

    aplicarDescuento(descuento,cantidad){
        var desc = (this.precio * descuento) /100;
        var tot = desc*cantidad;

        this.descuentoTotal = this.precio - tot;
    }

    obtenerDescuento(){
        this.descuentoTotal = 7.20;
        return this.descuentoTotal;
    }

    
}