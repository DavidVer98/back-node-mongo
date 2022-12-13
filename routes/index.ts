import { Router } from "express"; // importamos el router de express
import Task from "../models/task"; // importamos el modelo de datos

const router = Router(); // creamos una instancia de router

router.get("/task", async (req, res) => {
    const tasks = await Task.find(); // obtenemos todas las tareas de la base de datos
    console.log(tasks); // mostramos las tareas en consola
    res.send(tasks) // creamos una ruta de prueba

});


router.post("/task",  async(req, res) => {
    const { title, description } = req.body; // obtenemos los datos del body
    const date: Date = new Date(); // creamos una fecha
    const tasks = await new Task({title, description, date}); // creamos una nueva tarea con los datos que nos envian
    tasks.save(); // guardamos la tarea en la base de datos
    console.log(tasks) // mostramos la tarea en consola
    res.send(tasks)


    // res.send("create tasks")
}); 

router.get("/task/:id", async (req, res) => {
try {
    console.log(req.params.id); // obtenemos el id de la tarea
    const task = await Task.findById(req.params.id).exec()  ; // obtenemos la tarea de la base de datos
    console.log("getting task id",task); // mostramos la tarea en consola

    if(!task) {
        return res.status(404).json({message:'Task not found'}) // si no se encuentra la tarea enviamos un mensaje de error
    }

    res.send(task)
} catch (error) {
    res.status(500).send(error)
}
});

router.get("/taskDTO/:id", async (req, res) => {
    try {
        console.log("test2.0",req.params.id); // obtenemos el id de la tarea
        const task = await Task.findById(req.params.id).select({ _id: 0 , done:0, date:0}) ; // obtenemos la tarea de la base de datos
        console.log("getting task id",task); // mostramos la tarea en consola
    
        if(!task) {
            return res.status(404).json({message:'Task not found'}) // si no se encuentra la tarea enviamos un mensaje de error
        }
    
        res.send(task)
    } catch (error) {
        res.status(500).send(error);
    } 

});

router.delete("/task/:id", async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id).exec(); // obtenemos el id de la tarea y la eliminamos de la base de datos
        console.log("delete task"); // obtenemos el id de la tarea

        if(!task) {
            return res.status(404).json({message:'Task not found'}) // si no se encuentra la tarea enviamos un mensaje de error
        }
        
        res.send(task)
    } catch (error) {
        //delete task
        res.status(500).send( error)
    }
});

router.put("/task/:id", async (req, res) => {
    try {
        const date: Date = new Date();
        const { title, description }= req.body // obtenemos los datos del body
        const updateTask = await Task.findByIdAndUpdate( req.params.id, { 'title': title, 'description': description, 'date':date } , {new:true } ) // obtenemos el id de la tarea y la actualizamos con los datos que nos envian
 
        console.log(updateTask, "Update.."); // obtenemos el id de la tarea

        if(!updateTask) {
            return res.status(404).json({message:'Task not found'}) // si no se encuentra la tarea enviamos un mensaje de error
        }

        res.send(updateTask)

    } catch (error) {
        res.status(500).send( error)
    }
});

export default router;