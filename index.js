/**
 * 
 * *************
 * Comience aqui
 * *************
 *  
 */

const cp = require("child_process"); // requerimos el módulo child_process

function execCommand(commad) { // recibe el comando
    cp.exec(commad, (err, stdout, stderr) => { // Este método envía un 'command' la cual genera un shell y luego ejecuta command dentro de ese shell. También envía un callback que proporciona una función y se llama con los argumentos 'error', 'stdout', 'stderr'
    // En el exito, error será null. En caso de error, error será una instancia de error.
    // Los argumentos stdout, stderr pasados a la devolución de llamada contendrán la salida stdout y stderr del proceso hijo, la salida o resultado con respecto al comando recibido.
        if(err) {
           console.log(`Error: ${err}`);
           return;
        }
        if(stdout) { console.log(`Standar out: ${stdout}`) }
        if(stderr) { console.log(`Standar err: ${stderr}`) }
    })
}

execCommand("node ./src/script.js --base=5")