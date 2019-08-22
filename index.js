/**
 * 
 * *************
 * Comience aqui
 * *************
 * 
 */
const express = require("express"); //Framework externo
const app = express(); //Creamos una instancia de nuestra aplicación con expressjs // express tiene como fundamento todo el módulo HTTP.

// Express para manejar el contenido que presenta al usuario en cada request utiliza handlers(app.get()...) para ruta específicas,
// es decir que necesitamos definirle a express de alguna forma las rutas con las cuales queremos trabajar, de tal forma el sepa que hacer en cada una y que nos debe servir de vuelta.
app.get("/", (request, response) => { 
    response.send("Estoy en la ruta HOME, me llamo Deyvis") //response = Nos brinda una interfaz para crear una respuesta // .send es una forma de escribir html en node.js()=deducción propia.
})

app.get("/app", (request, response) => { 
    response.send("Estoy en la ruta /app")
})

app.get("*", (request, response) => {  // foulback: falta de respuesta, esto es como una respuesta alternativa en caso de que no se encuentre la ruta.
    response.send("No se donde estoy")
})

app.listen(3000, () => console.log("El servidor express esta en escucha en el puerto 3000"));