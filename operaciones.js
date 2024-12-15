
const fs = require('fs');
const nombreArchivo = 'citas.json'


const registrarCita = (citas) => {
    fs.writeFileSync(nombreArchivo, JSON.stringify(citas));
    console.log("Registro guardado exitosamente")

}

const consultarCitas = () => {
    console.log("El listado de animales agendados son")
    return JSON.parse(fs.readFileSync(nombreArchivo, 'utf-8'));
    
}

 module.exports = { registrarCita, consultarCitas };
 

