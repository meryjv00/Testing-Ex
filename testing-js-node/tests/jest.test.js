/**
 * Comunes
 */
const suma = require('../src/sum');
test('sumar 1 + 2 es igual a 3', () => {
    expect(suma(1, 2)).toBe(3);
});

test('dos mas dos son cuatro', () => {
    expect(2 + 2).toBe(4);
    expect(2 + 2).not.toBe(5);
});

test('asignacion de objeto', () => {
    const data = { uno: 1 };
    data['dos'] = 2;
    expect(data).toEqual({ uno: 1, dos: 2 });
});

test('agregando un numero positivo que no sea 0', () => {
    for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
            expect(a + b).not.toBe(0);
        }
    }
});

/**
 * Veracidad
 */
test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

test('cero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});

/**
 * Números
 */
test('dos mas dos', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    // toBe y toEqual son equivalentes para números
    expect(value).toBe(4);
    expect(value).toEqual(4);
});

test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3);           This won't work because of rounding error
    expect(value).toBeCloseTo(0.3); // This works.
});

/**
 * Strings
 */
test('no hay I en Team', () => {
    expect('team').not.toMatch(/I/);
});

test('hay "stop" en Christoph', () => {
    expect('Christoph').toMatch(/stop/);
});
/**
 * Array
 */
const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
];

test('the shopping list has milk on it', () => {
    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
});

/**
 * Excepciones
 */
function compileAndroidCode() {
    throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
    expect(() => compileAndroidCode()).toThrow();
    expect(() => compileAndroidCode()).toThrow(Error);

    // You can also use the exact error message or a regexp
    expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
    expect(() => compileAndroidCode()).toThrow(/JDK/);
});