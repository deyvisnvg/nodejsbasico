/**
 * 
 * *************
 * Comience aqui
 * *************
 * 
 */

 const cowsay = require("cowsay"); //Para poder referir siempre a un modulo que se  encuentra dentro de la carpeta node_modules y se trate como una 'dependencia externa' vamos a hacer un require sin ningun tipo de camino o ruta relativa (require("./"))

 console.log(cowsay.say({
     text: "Hellow, soy cowsay",
     e: "oO",
     U: "U"
 }));