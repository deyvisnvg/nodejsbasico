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
        rl.question(question, answer => resolve(answer)) // Por cada pregunta recibida(segun la posición[i]) esperará una respuesta por parte del usuario. 
    })
}

const ask = question => {
    return new Promise(async resolve => {
        let resultados = [] // nuevo array vacío
        for (let i = 0; i < question.length; i++) { // iteramos la posición del array(preguntas) menores a su longitud, donde i = 0, 1, 2
            const result = await askQuestion(rl, question[i]); // Se le envía la pregunta segun la posición del ciclo[i]
            resultados.push(result) // A la respuesta del usuario lo empujamos y lo guardamos en resultados[]
        }
        rl.close();
        resolve(resultados);
    })
}

ask(q)
.then(result => console.log(`Hola ${result[0]} ${result[1]}, tu edad es la siguiente: ${result[2]}`))


// rl.question("Cuál es tu nombre?", answer => {
//     console.log(`Hola, tu nombre es ${answer}`)
// })