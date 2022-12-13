import app from './app';
import { startConnection } from './database';

startConnection(); // Call startConnection function
app.listen(3000)
console.log('Server running on port 3000');