module.exports = {
    greet: function(nombreCompleto) {
        console.log(`Hola ${nombreCompleto}! Sientes la asincronia?`);
    },
    withPromise: function(nombre, apellido) {
        console.log("Llamando función con promesa...");
        return new Promise((resolve, reject)=>{
            console.log("Ejecutando espera...");
            setTimeout(()=>{
                console.log("Resolviendo la espera!1");
                resolve(`${nombre} ${apellido} 1`);
            }, 3000);
        })
    },
    promesa2: function(nombre, apellido) {
        return new Promise((resolve, reject)=>{
            console.log("Ejecutando espera...2");
            setTimeout(()=>{
                console.log("Resolviendo la espera!2");
                resolve(`${nombre} ${apellido} 2`);
            }, 3000);
        })
    },
    promesa3: function(nombre, apellido) {
        return new Promise((resolve, reject)=>{
            console.log("Ejecutando espera...3");
            setTimeout(()=>{
                console.log("Resolviendo la espera!3");
                resolve(`${nombre} ${apellido} 3`);
            }, 3000);
        })
    }
}