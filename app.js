// const argv = require('yargs').argv 
const { argv } = require('./config/yargs');
const colors = require('colors');
const { crear, getListado, actualizar, borrar } = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        // console.log('Crear por hacer');
        let tarea = crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = getListado(argv.completado);
        for (let tarea of listado) {
            console.log('========Por Hacer========'.green);
            console.log(tarea.descripcion);
            console.log('Estado:', tarea.completado);
            console.log('=========================\n'.green);
        }
        break;
    case 'actualizar':
        let completado = actualizar(argv.descripcion, argv.completado);
        console.log(completado);
        break;

    case 'borrar':
        let borrado = borrar(argv.descripcion)
        console.log(borrado);
        break;

    default:
        console.log('Comando no reconocido');
        break;
}