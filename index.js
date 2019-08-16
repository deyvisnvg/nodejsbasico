/**
 * 
 * *************
 * Comience aqui
 * *************
 * 
 */

const call = require("./src/call");

//  console.log(call.sync("Emir Salazar!"));
// call.withCallback("Emir Salazar", call.sync); //call.sync (Sin parentesis)= Esto es un callback es como si generara la firma o lista por asi decirlo para ser ejecutada.
call.withPromise("Emir Salazar")
.then(dato => console.log(call.sync(dato)));