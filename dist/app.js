"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan")); // middleware
const cors_1 = __importDefault(require("cors")); // middleware
const routes_1 = __importDefault(require("./routes")); // importamos las rutas
const app = (0, express_1.default)();
app.use((0, cors_1.default)()); // configuramos el middleware cors para que acepte peticiones de cualquier origen (localhost:4200) 
app.use((0, morgan_1.default)(("dev"))); // configuramos el middleware morgan para que muestre las peticiones por consola
app.use(express_1.default.json()); // permite que el servidor entienda json
app.use("/api", routes_1.default); // todas las rutas que empiecen con /api serán manejadas por taskRoutes
exports.default = app;
