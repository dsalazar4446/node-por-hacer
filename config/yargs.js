const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripcion de la tarea por hacer'

}
const completado = {
    alias: 'c',
    default: true,
    desc: 'Maarca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion,
        completado
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}