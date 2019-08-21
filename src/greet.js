const EventEmitter = require('events'); // Requerimos al módulo 'events'
class MyEmitter extends EventEmitter {} // Se extiende una Clase en base al emisorDeEventos(EventEmitter{})
const myEmitter = new MyEmitter(); // Aquí se llama al constructor de la Clase para crear el emisor de eventos.

// myEmitter.on('event', callback) = Le dice al emisorDeEventos: En la situación 'event' ejecuta la función que pasa como callback
// myEmitter.emit('event') = Le dice emite la situación es decir el nombre de la situación que queremos que ocurra.

myEmitter.on('clap', () => {
    console.log('A clapping event was produced.');
});

myEmitter.on('greet', name => {
    console.log(`Please, greet ${name}!`);
});

myEmitter.on('shout', text => {
    console.log(`Ohh... someone told you to shout ${text}!!!!`);
});

myEmitter.on('call', (name, cb) => {
    cb(name);
});

module.exports = myEmitter;