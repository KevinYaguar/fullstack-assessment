import { Connection, Request } from 'tedious';
import express from 'express';
import cors from "cors";
import dotenv from 'dotenv';

dotenv.config();

const config = {
  server: `${process.env.SERVER_DB}`,
  authentication: {
    type: 'default',
    options: {
      userName:  `${process.env.USER_DB}`,
      password:  `${process.env.PASSWORD_DB}`
    }
  },
  options: {
    port: 1433, // Default Port,
    trustServerCertificate: true
  }
};
console.log(process.env.SERVER_DB)
const connection = new Connection(config);

connection.connect((err) => {
  if (err) {
    console.log('connection err');
    throw err;
  }

  createDatabase();
});

function createDatabase() {
    const sql = `
        IF NOT EXISTS(SELECT * FROM sys.databases WHERE name = 'DataBaseT')
        BEGIN
            CREATE DATABASE DataBaseT
        END
    `;

    const request = new Request(sql, (err, rowCount) => {
        if (err) {
        throw err;
        }
    });
    connection.execSql(request);
}



export const startServer = () => {

    const app = express();

    app.use(express.json());

    app.use(cors());

    app.get('/status', (req, res) => {
        res.json({
            status: true
        });
    });

    app.get('/', (req, res) => {
        res.json({
            status: true
        });
    });


   /* app.use((err: APIError, req: Request, res: Response, next: Handler) => {
        if (err.constructor.name === 'Error') {
            const error = new APIError();
            res.status(error.httpStatusCode).json(error.errorResponse);
        } else {
            res.status(err.httpStatusCode).json(err.errorResponse);
        }
    })*/

    app.listen(process.env.PORT, () => {
        console.log(`⚡️[server]: Server is running at https://localhost:${process.env.PORT}`);
    })

}

startServer()