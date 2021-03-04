var Libro = require('./libro');
//
test('TDD: Coste inicial de un libro es de 8€', () => {
    libro = new Libro();
    expect(libro.getPrecio()).toBe(8);
});
