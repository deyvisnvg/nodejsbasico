/**
 * 
 * *************
 * Comience aqui
 * *************
 * 
 */
const greet = require('./src/greet')

greet.emit('clap');

greet.emit('shout','Viva el Amor');

greet.emit('call', 'Emir Salazar', nameRecibido => console.log(`Estamos llamando a: ${nameRecibido}`));