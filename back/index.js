import dotenv from 'dotenv';
import { setupSequalizeConnection } from './db.js';
import { startServer } from './server.js';

dotenv.config();

setupSequalizeConnection().then(conn => {

    startServer(conn);
  
});
