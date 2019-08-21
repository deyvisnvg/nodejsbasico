/**
 * 
 * *************
 * Comience aqui
 * *************
 *  
 */
const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {  // Con createServer creamos la instancia; y le damos el callback(function) que va ha manejar las peticiones.
    fs.readFile("./resources/my_page.html", (err, data) => {
        if(err) { 
            console.error(err); 
            return; // return para que no continúe con la ejecución si no tenemos los datos del archivo.
        }
        response.end(data) // .end = para decirle que la petición termina ahí, y le enviamos directamente los datos.
    })
})

console.log("Iniciando Servidor...")
server.listen(3000) //Encendemos el servidor//listen = le indica que ya puede empezar a escuchar peticiones desde el puerto especíco designado.
