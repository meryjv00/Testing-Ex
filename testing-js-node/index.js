var express = require('express');
var body_parser = require('body-parser');

var app = express();

app.set("view engine", "jade");
app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());

//------------------------------------
//**********************************/
app.get("/", function(req, res) {
    res.send("TESTING JS NODE");
});

//**********************************/
app.listen(8090);

//-----------------
//--VARIABLES
var operaciones = require('./src/funciones');
var personas = require('./src/persona');
var arrays = require('./src/arrays');
var strings = require('./src/strings');
var variables = require('./src/boolean');
var asincronia = require('./src/asincronia');

//-----------------
//--EJECUCIÓN
console.log('Hola');
console.log('Esto es una prueba de test');
console.log('Ejecutando las funciones');
//--
console.log(`Sumar (1,1) = 2 -> ${operaciones.sumar(1, 1)}`);
console.log(`Restar (1,1) = 0 -> ${operaciones.restar(1, 1)}`);
console.log(`Multiplicar (2,2) = 4 -> ${operaciones.multiplicar(2, 2)}`);
console.log(`Dividir (4,2) = 2 -> ${operaciones.dividir(4, 2)}`);
//--
console.log('Mostrando Objetos Persona');
console.log(`Persona1 ->${personas.persona1.nombre} - ${personas.persona1.edad}`);
console.log(`Persona2 ->${personas.persona2.nombre} - ${personas.persona2.edad}`);
//--
console.log('Trabajando con boolean, nulos y undefined');
console.log(`isFalse -> ${variables.isFalse()}`);
console.log(`isNull -> ${variables.isNull()}`);
console.log(`isTrue -> ${variables.isTrue()}`);
console.log(`isUndefined -> ${variables.isUndefined()}`);
//--
console.log('Trabajando con Arrays');
arrays.dias.forEach((dia) => { console.log(`Día -> ${dia}`); });
console.log(`Provincias -> ${arrays.provincias}`);
//--
console.log('Trabajando con Strings');
for (const property in strings) {
  console.log(`${property}: ${strings[property]}`);
}
console.log(JSON.stringify(strings));
//--
console.log('Trabajando con Callbacks');
console.log(asincronia.callback);
console.log('Trabajando con Promesas');
const url = 'https://my-json-server.typicode.com/typicode/demo/posts';
asincronia.axiosGet(url)
  .then((res) => { console.log(res); })
  .catch((error) => { console.log(error); });
console.log(url);
console.log('Trabajando con Supertest');
//--
console.log('Trabajando con Supertest en API REST');

console.log('Trabajando con en DOM');

console.log('Trabajando con SnapShot');
