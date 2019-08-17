/**
 * 
 * *************
 * Comience aqui
 * *************
 * 
 */
const fs = require("fs"); //módulo nativo de node.js - lo requerimos como si fuese un módulo externo de node / los múdulos nativos no necesitan ser instalados con 'npm install' dentro del directorio de nuestro fichero(proyecto).
const ops = require("./src/fileops");

let nomValue;

const data = (err, text) => {
    if(err) throw err;
    const nombres = text.split("\n")
    nomValue = ops.callNames(nombres)

    fs.writeFile("./resources/namenew.txt", nomValue.join("\n"), (err, result) => {
        if(err) throw err;
    })
}

fs.readFile("./resources/name.txt", "utf8", data)

//======================================================================================================//
// let incValue;

// const data = (err, text) => {
//     if(err) throw err; //throw detiene la ejecución del código y coloca el error en la consola.
//     // console.log(text)
//     const number = text.split("\n").map(n => Number(n));
//     // console.log(ops.incrementValues(number));
//     incValue = ops.incrementValues(number);
    
//     fs.writeFile("./resources/numbernew.txt", incValue.join("\n"), (err, result) => {
//         if(err) throw err;
//     })
// }

// fs.readFile("./resources/number.txt", "utf8", data)
//======================================================================================================//

//split() = function que es parte del estatuto de los string, este divide y separa en los diferentes elementos que la componen de forma que podamos hacer la operación.
// split("") va ha esperar que le enviemos algun separador como argumento para que el pueda segmentar la cadena de código.