const { clear } = require('console');
const fs = require('fs');
const db = require('./tareas.json');

//funcion para guardar la tarea poniendo nombre y estado por terminal

const guardarTarea = (title, taskStatus) => {
    const task = {
        title : title,
        taskStatus: taskStatus,
    }
    const dataBase = db;
    dataBase.push(task)
    const taskJson = JSON.stringify(db, null, 4);
    fs.writeFileSync('./tareas.json', taskJson)
}

//traer el array de JSON
function bringTasks(){ 
   return JSON.parse(fs.readFileSync("./tareas.json"));

}


// listar las tareas
const showTasks = () => {
    db.forEach(function(elemento){
        return console.log(elemento);
    });
}


const filtrarPorEstado = (estado) => {
    let tasks = bringTasks();
    return tasks.filter(item => item.taskStatus === estado);
    
}


module.exports = {guardarTarea, showTasks, filtrarPorEstado, bringTasks}