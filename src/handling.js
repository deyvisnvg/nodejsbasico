const fs = require('fs');

module.exports = {
    sync: function(){
        try {
            const m = 1;
            const n = m + z;
        } catch (err) {
            throw `This is a sync ${err}`;
        }
    },

// Ocurre que cuando se llama a una operación asíncrona 'fs.readFile()' dentro de un try{} catch{}, el catch sale 
// del contexto de ejecución de la misma, cuando esta resuelve u obtiene su respuesta asíncrona; de tal forma que
// si nosotros intentamos hacer un throw dentro de un try{} catch{} y de una función u operación que es asíncrona 
// entonces este throw(error) no va ser capturado por el catch{} y realmente va a detener la ejecución del código.

// Ojo: no lanzar throw dentro de funciones asíncronas y bloques con try{} catch{} y que son malas prácticas.

    errorFirstCallbackWrong: function() {
        try {
            fs.readFile('/some/file/that/does-not-exist', (err, data) => {
                // mistaken assumption: throwing here...
                if (err) {
                    throw `This is a sync ${err}`;
                }
            });
        } catch (err) {
            // This will not catch the throw!
            console.error(`Catched err: ${err}`);
        }
        console.log("Hola!");
    },
    errorFirstCallback: function() {
        fs.readFile('/some/file/that/does-not-exist', (err, data) => {
            if (err) {
                console.error('This error-first callback', err);
                return;
            }
            console.log(data);
        });
    } 
}