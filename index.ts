import app from './app';
import { startConnection } from './database';

startConnection(); // Call startConnection function
const PORT = process.env.PORT || 3000
app.listen(PORT)
console.log(`Server runing on port ${PORT}`);