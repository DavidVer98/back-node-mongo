"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); // importamos el router de express
const task_1 = __importDefault(require("../models/task")); // importamos el modelo de datos
const router = (0, express_1.Router)(); // creamos una instancia de router
router.get("/task", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tasks = yield task_1.default.find(); // obtenemos todas las tareas de la base de datos
    console.log(tasks); // mostramos las tareas en consola
    res.send(tasks); // creamos una ruta de prueba
}));
router.post("/task", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description } = req.body; // obtenemos los datos del body
    const date = new Date(); // creamos una fecha
    const tasks = yield new task_1.default({ title, description, date }); // creamos una nueva tarea con los datos que nos envian
    tasks.save(); // guardamos la tarea en la base de datos
    console.log(tasks); // mostramos la tarea en consola
    res.send(tasks);
    // res.send("create tasks")
}));
router.get("/task/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.params.id); // obtenemos el id de la tarea
        const task = yield task_1.default.findById(req.params.id).exec(); // obtenemos la tarea de la base de datos
        console.log("getting task id", task); // mostramos la tarea en consola
        if (!task) {
            return res.status(404).json({ message: 'Task not found' }); // si no se encuentra la tarea enviamos un mensaje de error
        }
        res.send(task);
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
router.get("/taskDTO/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("test2.0", req.params.id); // obtenemos el id de la tarea
        const task = yield task_1.default.findById(req.params.id).select({ _id: 0, done: 0, date: 0 }); // obtenemos la tarea de la base de datos
        console.log("getting task id", task); // mostramos la tarea en consola
        if (!task) {
            return res.status(404).json({ message: 'Task not found' }); // si no se encuentra la tarea enviamos un mensaje de error
        }
        res.send(task);
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
router.delete("/task/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield task_1.default.findByIdAndDelete(req.params.id).exec(); // obtenemos el id de la tarea y la eliminamos de la base de datos
        console.log("delete task"); // obtenemos el id de la tarea
        if (!task) {
            return res.status(404).json({ message: 'Task not found' }); // si no se encuentra la tarea enviamos un mensaje de error
        }
        res.send(task);
    }
    catch (error) {
        //delete task
        res.status(500).send(error);
    }
}));
router.put("/task/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const date = new Date();
        const { title, description } = req.body; // obtenemos los datos del body
        const updateTask = yield task_1.default.findByIdAndUpdate(req.params.id, { 'title': title, 'description': description, 'date': date }, { new: true }); // obtenemos el id de la tarea y la actualizamos con los datos que nos envian
        console.log(updateTask, "Update.."); // obtenemos el id de la tarea
        if (!updateTask) {
            return res.status(404).json({ message: 'Task not found' }); // si no se encuentra la tarea enviamos un mensaje de error
        }
        res.send(updateTask);
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
exports.default = router;
