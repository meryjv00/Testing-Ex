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