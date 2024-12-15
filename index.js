const { registrarCita, consultarCitas } = require('./operaciones.js');

const argsUsuario = process.argv.slice(2);

if (argsUsuario.length > 0) {
    const operacion = argsUsuario[0];

    if (operacion === 'consultar') {
        console.log(consultarCitas());
    }
    else if (operacion === 'registrar') {

        if (argsUsuario.length === 6) {
            const listaCitas = consultarCitas();
            listaCitas.push(
                {
                    "nombre": argsUsuario[1],
                    "edad": argsUsuario[2],
                    "tipo": argsUsuario[3],
                    "color": argsUsuario[4],
                    "Enfermedad": argsUsuario[5]
                }

            );

            registrarCita(listaCitas);
            console.log(listaCitas);

        } else {
            console.log('Datos no validos')
        }
    } else {
        console.log('Operaciones permitas: consultar y registrar');
    }
} else {
    console.log('Debes indicar,  consultar o registrar');
}