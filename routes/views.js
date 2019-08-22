module.exports = (app) => {
    app.get("/", (req, res)=>{
        res.send("I'm on the '/' page.");
    });
    app.get("/route", (req, res)=>{
        res.send("I'm on the '/route' page.");
    });
    app.get("*", (req, res)=>{ //Debe estar al final siempre //foult handler = menejador de fallas, ruta alternativa en caso el fichero no exista.
        res.send("Where am I?");
    });
}