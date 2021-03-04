var Libro = require('./libro');
var GestionLibros = require('./app');

//
test('TDD: Coste inicial de un libro es de 8€', () => {
    libro = new Libro();
    expect(libro.getPrecio()).toBe(8);
});

test('TDD: Si se adquieren 2 libros, se aplica 5% de descuento', () => {
    gestionLibros = new GestionLibros();
    gestionLibros.adquirirLibros(2);
    expect(gestionLibros.getDescuento()).toBe(5);
});

test('TDD: Si se adquieren 3 libros, se aplica 10% de descuento', () => {
    gestionLibros = new GestionLibros();
    gestionLibros.adquirirLibros(3);
    expect(gestionLibros.getDescuento()).toBe(10);
});

test('TDD: Si se adquieren 4 libros, se aplica 20% de descuento', () => {
    gestionLibros = new GestionLibros();
    gestionLibros.adquirirLibros(4);
    expect(gestionLibros.getDescuento()).toBe(20);
});


test('TDD: Si se adquieren 5 libros, se aplica 25% de descuento', () => {
    gestionLibros = new GestionLibros();
    gestionLibros.adquirirLibros(5);
    expect(gestionLibros.getDescuento()).toBe(25);
});

test('TDD: Si se adquieren 2 libros, el descuento obtenido es del 5%', () => {
    //Arr
    gestionLibros = new GestionLibros();
    gestionLibros.adquirirLibros(2);
    var descuento = gestionLibros.getDescuento();
    expect(descuento).toBe(5);

    libro1 = new Libro();
    expect(libro1.getPrecio()).toBe(8);
    libro2 = new Libro();
    expect(libro2.getPrecio()).toBe(8);

    //Act
    gestionLibros.aplicarDescuento(descuento, 2);

    //Assert
    expect(gestionLibros.obtenerDescuento()).toBeCloseTo(7.20);

});

