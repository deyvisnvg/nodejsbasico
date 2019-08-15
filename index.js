/**
 * *************
 * Comience aqui
 * *************
 */

const math = require("./math");
const greet = require("./greetings"); //Hace referencia directamente al index.js
const hellow = require("./greetings/hello");

console.log(math.add(4, 5)); // llamamos a la function add(){} con 'math.add'
console.log(math.divide(4, 5));
console.log(math.multiply(4, 5));
console.log(math.substract(4, 5));

console.log(greet.greet("Emir"));
console.log(hellow.sayHello("Deyvis"));