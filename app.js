const usability = require('./functions.js');


let opcion = process.argv[2];
let titleTarea = process.argv[3];
let statusTarea = process.argv[4];
let estadoParaFiltrar = process.argv[3];



    switch (opcion) {
        case "crear":
            usability.guardarTarea(titleTarea, statusTarea);
            console.log("Tarea agregada");
             break;
        case "listar" :
            usability.showTasks();
            break;
        case "filtrar" :
            console.log(usability.filtrarPorEstado(estadoParaFiltrar));
            break;
        case undefined :
            console.log('Atención - Tienes que pasar una acción.');
            break;
        default :
            console.log('No entiendo qué quieres hacer.');
            break;
    }





