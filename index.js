/**
 * 
 * *************
 * Comience aqui
 * *************
 * 
 */

// Ocurre que cuando se llama a una operación asíncrona 'fs.readFile()' dentro de un try{} catch{}, el catch sale 
// del contexto de ejecución de la misma, cuando esta resuelve u obtiene su respuesta asíncrona; de tal forma que
// si nosotros intentamos hacer un throw dentro de un try{} catch{} y de una función u operación que es asíncrona 
// entonces este throw(error) no va ser capturado por el catch{} y realmente va a detener la ejecución del código.

// Ojo: no lanzar throw dentro de funciones asíncronas y bloques con try{} catch{} y que son malas prácticas.

const error = require("./src/errors");
const handling = require("./src/handling");
//===========================================================/
// try {
//     error.standardErr.range()
// } catch (error) {
//     console.log(error)
// }

// console.log("Hola");
//===========================================================/

//===========================================================/
// try {
//     handling.sync();
// } catch (error) {
//     console.log(error);
// }

// console.log("Hola papi");
//===========================================================/

//===========================================================/

handling.errorFirstCallbackWrong();