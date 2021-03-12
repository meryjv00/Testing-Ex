/* eslint-disable no-throw-literal */
var axios = require('axios');

// Vamos a trabajar con un array de contactos y sus operaciones
let contactos = [];


/**
 * Incluye un contacto en nuestra lista de contactos
 * @param {*} contacto Un Contacto
 */
function incluir(contacto) {
  if (
    Object.prototype.hasOwnProperty.call(contacto, 'nombre')
    && Object.prototype.hasOwnProperty.call(contacto, 'email')
    && Object.prototype.hasOwnProperty.call(contacto, 'id')
    // contacto.nombre !== undefined
    // && contacto.email !== undefined
    // && contacto.email !== undefined
  ) {
    contactos.push(contacto);
  } else {
    throw new Error('Formato inválido');
  }
};

/**
 * Elimina un contacto de nuestra lista dado su id
 * @param {*} contactoId ID del contacto
 */
function borrar(contactoId) {
  // Mapeamos el array para quedarnos solo con el ID y buscamos si coincide
  const index = contactos
    .map(({ id }) => id)
    .findIndex((id) => id === contactoId);
  // Podriamos hacerlo
  // const index = contactos.findIndex((id) => id === contactoId);

  // Si coicide lo quitamos
  if (index > -1) {
    // Compiamos el array con todos los qu ehay menos el que queemos quitar
    contactos = [
      ...contactos.slice(0, index),
      ...contactos.slice(index + 1),
    ];
    // Mejor y mas alternativo. Analiza las diferencias :)
    // contactos.splice(index, 1);
  }
};

/**
 * Reinicia la lista o pone a vacía la lista de contactos
 */
function reiniciar() {
  contactos = [];
};

/**
 * Devuelve una lista de contactos
 */
function db() {
  return [
    ...contactos,
  ];
};

/**
 * Devuleve el número de ocurrencias de un EndPoint
 * @param {*} url url del ednpoint
 */
async function starwars(url) {
  // https://swapi.dev/
  return axios.get(url)
    .then(({ data }) => data.count)
    .catch((error) => (error));
};

module.exports = {
  reiniciar,
  incluir,
  borrar,
  db,
  starwars
}