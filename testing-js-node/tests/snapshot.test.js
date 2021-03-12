/* eslint-disable no-undef */
// Prueba de Snapshot
var geoObject = require('../src/snapshot/datos.db.json');
var enlace = require('../src/snapshot/enlance.json');
const snapshot = require('../src/snapshot/snapshot');

// Creamos el snapshopt
describe('Snapshot', () => {
  // Prueba de Snapshot
  test('Prueba de snapshot', () => {
    // De esta manera siempre comparamos lo que nos llega con lo que hay en la carpeta __snapshots__ (se crea la primera vez)
    expect(snapshot.snapShotObject(geoObject)).toMatchSnapshot();
  });
  // Simulamos que el enlace sea el mismo que el almacenando
  test('Simular UI', () => {
    expect(snapshot.href(enlace)).toMatchSnapshot();
  });

  // Test con cambios permitidos
  test('Log de actividad', () => {
    const log = {
      id: 1,
      date: new Date(),
      active: Math.floor(Math.random() * 100) + 1 < 50,
    };
    // expect(log).toMatchSnapshot();
    expect(log).toMatchSnapshot({
      date: expect.any(Date),
      active: expect.any(Boolean),
    });
  });
});

// Repite el test pero cambia los ficheros originales, como no coiciden con la instantánea, pues dará error
