/* export src */
const operaciones = require('../src/funciones');
const personas = require('../src/persona');
const arrays = require('../src/arrays');
const strings = require('../src/strings');
const variables = require('../src/boolean');

//---------------------------------------------

// Igualdad
describe('Matcher de objetos', () => {
  // Lanzamos el test
  test('Comprobamos que los objectos son iguales', () => {
    expect(personas.persona1).toEqual(personas.persona2);
  });
}); 

// Con describe describimos un conjunto de pruebas a realizar
describe('Operaciones matemáticas', () => {
  // Probamos cada uno de los test
  test('Realizamos la suma', () => {
    expect(operaciones.sumar(1, 1)).toBe(2);
  });
  test('Realizamos la resta', () => {
    expect(operaciones.restar(1, 1)).toBe(0);
  });
  test('Realizamos la multiplicacion', () => {
    expect(operaciones.multiplicar(1, 1)).toBe(1);
  });
  test('Realizamos la division', () => {
    expect(operaciones.dividir(1, 1)).toBe(1);
  });
});

// Numéricos
describe('Matchers numéricos', () => {
  // Lanzamos los test
  test('Resultado menor que...', () => {
    expect(operaciones.restar(5, 3)).toBeLessThan(3);
  });
  test('Resultado menor o igual que...', () => {
    expect(operaciones.restar(5, 3)).toBeLessThanOrEqual(2);
  });
  test('Resultado mayor o igual que...', () => {
    expect(operaciones.multiplicar(2, 5)).toBeGreaterThanOrEqual(10);
  });
  test('Resultado mayor que...', () => {
    expect(operaciones.sumar(5, 5)).toBeGreaterThan(9);
  });
  test('Resultado igual que ...', () => {
    expect(operaciones.dividir(5, 5)).toBe(1);
  });
});

// Arrays
describe('Matchers Arrays', () => {
  test('Madrid existe en el array', () => {
    expect(arrays.provincias).toContain('Madrid');
  });
  test('Guadalajara no existe en el array', () => {
    expect(arrays.provincias).not.toContain('Guadalajara');
  });
  test('El array semana tiene 7 elementos', () => {
    expect(arrays.dias).toHaveLength(7);
  });
});

// Con cadenas
describe('Matchers Strings', () => {
  const exp = strings;
  test('Comprobamos si la respuesta es correcta', () => {
    expect(exp.responseOK).toMatch(/OK/);
  });
  test('Comprobamos si la respuesta es incorrecta', () => {
    expect(exp.responseFAIL).toMatch(/FAIL/);
  });
  test('Comprobamos si la respuesta tiene una longitud', () => {
    expect(exp.responseFAIL).toHaveLength(13);
  });
  test('Comprobamos dirección de email', () => {
    expect(exp.email).toMatch(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/);
  });
  test('Comprobamos número de teléfono', () => {
    expect(exp.telefono).toMatch(/^[9|6|7][0-9]{8}$/);
  });
});

 // Booleanos, nulos y Undefined
 describe('Matchers Boolean, Undefined o Null', () => {
  test('Resultado true', () => {
    expect(variables.isTrue()).toBeTruthy();
  });
  test('Resultado false', () => {
    expect(variables.isFalse()).toBeFalsy();
  });
  test('Resultado undefined', () => {
    expect(variables.isUndefined()).toBeUndefined();
  });
  test('Resultado null', () => {
    expect(variables.isNull()).toBeNull();
  });
});


// Precondiciones y postcondiciones. Pudes agriparlo dentro de un describe
/* afterEach(() => console.log('Despues de cada prueba'));
afterAll(() => console.log('Despues de todas las pruebas'));
beforeEach(() => console.log('Antes de cada prueba'));
beforeAll(() => console.log('Antes de todas las pruebas')); */
