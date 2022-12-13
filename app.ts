import express from 'express';
import morgan from 'morgan';  // middleware
import cors from 'cors';  // middleware

import taskRoutes from './routes'; // importamos las rutas

const app = express();

app.use(cors()); // configuramos el middleware cors para que acepte peticiones de cualquier origen (localhost:4200) 
app.use(morgan(("dev"))) // configuramos el middleware morgan para que muestre las peticiones por consola
app.use(express.json());  // permite que el servidor entienda json

app.use("/api", taskRoutes); // todas las rutas que empiecen con /api serán manejadas por taskRoutes


export default app; 