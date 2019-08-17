/**
 * 
 * *************
 * Comience aqui
 * *************
 * 
 */
const call = require("./src/call");

// call.greet("Emir Salazar");

// call.withPromise("Emir", "Salazar")
// .then(dato => call.greet(dato))

// call.withPromise("Emir", "Salazar")
// .then(dato => {
//     call.greet(dato);
//     return call.promesa2("Deyvis", "Valdez")
// })
// .then(dato => {
//     call.greet(dato);
//     return call.promesa3("Marivi", "Valdez")
// })
// .then(dato => call.greet(dato))

async function callWithPromise() {
    const fullName = await call.withPromise("Emir", "Salazar") //async/await detiene la ejecución del programa hasta que todas las promesas sean resueltas, ya resueltas te resolverá todas las promesas en un solo resultado y no de una en una.
    const fullName2 = await call.promesa2("Deyvis", "Salazar")
    const fullName3 = await call.promesa3("Marivi", "Salazar")
    // call.greet(fullName)
    console.log(fullName);
    console.log(fullName2);
    console.log(fullName3);
}

callWithPromise();