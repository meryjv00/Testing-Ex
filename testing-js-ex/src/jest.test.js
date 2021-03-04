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