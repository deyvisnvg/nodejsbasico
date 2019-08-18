/**
 * 
 * *************
 * Comience aqui
 * *************
 * 
 */

// El readline módulo proporciona una interfaz para leer datos de un flujo legible (como process.stdin) una línea a la vez.
// Las instancias de la readline.Interfaceclase se construyen utilizando el readline.createInterface()
// método. Cada instancia está asociada con una sola secuencia input legible y una única secuencia de 
// output escritura . El output flujo se utiliza para imprimir solicitudes de entrada del usuario que 
// llega y se lee desde el input flujo.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const q = [
    "Cuál es tu primer nombre? ",
    "Cuál es tu primer apellido? ",
    "Cuál es tu edad? "
]

const askQuestion = (rl, question) => {
    return new Promise((resolve, reject) => {
        rl.question(question, answer => {
            resolve(answer)
        })
    })
}

const ask = question => {
    return new Promise(async resolve => {
        
    })
}

// rl.question("Cuál es tu nombre?", answer => {
//     console.log(`Hola, tu nombre es ${answer}`)
// })