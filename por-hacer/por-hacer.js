const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer)
    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo Guardar');
    })
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json')
    } catch (error) {
        listadoPorHacer = []
    }
}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };


    listadoPorHacer.push(porHacer);
    guardarDB()
    return porHacer;
}

const getListado = (completado) => {
    cargarDB();
    return listadoPorHacer.filter(tarea.completado === completado)
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index < 0) {
        return false;
    }

    listadoPorHacer[index].completado = completado;
    guardarDB()
    return true;
}

const borrar = (descripcion) => {
    cargarDB();
    const index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index < 0) {
        return false;
    }

    listadoPorHacer.splice(index, 1);
    guardarDB()
    return true;
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}