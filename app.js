const usability = require('./functions');


const writeHere = process.argv[2];
const titleTarea = process.argv[3];
const statusTarea = process.argv[4];
const estadoParaFiltrar = process.argv[3];
const showList = (word) => {
    switch (writeHere) {
        case "crear":
            usability.guardarTarea(titleTarea, statusTarea);
             break;
        case "listar" :
            usability.showTasks();
            break;
        case "filtrar" :
            usability.filtrarPorEstado(estadoParaFiltrar);
            break;
        case undefined :
            console.log('Atención - Tienes que pasar una acción.');
            break;
        default :
            console.log('No entiendo qué quieres hacer.')
    }
}


console.log("Tarea agregada");

