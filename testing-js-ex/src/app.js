module.exports = class GestionLibros {
    descuento;
    constructor(){
        this.descuento = 0;
    }
    adquirirLibros(cantidad){
        if(cantidad == 2){
            this.descuento = 5;
        }else if(cantidad == 3){
            this.descuento = 10;
        }
    }
    getDescuento(){
        return this.descuento;
    }
}