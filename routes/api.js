const API_BASE = "/api"
const db = require("../db");

module.exports = function(app){
    app.get(`${API_BASE}/users`, (req, res)=>{
        const query = db.getUsers();
        res.json(query);
    }),
    app.get(`${API_BASE}/user/:id`, (req, res)=>{ //Enviamos la id como parámetro en la URL del resultado que queremos obtener
        const query = db.getUserById(req.params.id); //Utilizando 'req.params.id' va ha optener el 'id' que le pasamos como parámetro en la URL
        res.json(query);
    })
};