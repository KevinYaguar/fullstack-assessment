import dotenv from 'dotenv';
import { setupSequalizeConnection } from './db.js';
import { startServer } from './server.js';

dotenv.config();
console.log('jiodihsofi')

setupSequalizeConnection().then(conn => {

    startServer(conn);
  
});
/*
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

const connection = new Connection(config);

connection.connect((err) => {
  if (err) {
    console.log('connection err');
    throw err;
  }

  //createDatabase()
});
*//*
async function createDatabase() {
    const sql = `
        IF NOT EXISTS(SELECT * FROM sys.databases WHERE name = 'Surveys')
        BEGIN
        CREATE DATABASE Surveys;
        END
        GO
            USE Surveys;
        GO
        --You need to check if the table exists
        IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='Survey' and xtype='U')
        BEGIN
            CREATE TABLE Survey (
                Id INT PRIMARY KEY IDENTITY (1, 1),
                Name VARCHAR(100)
            )
        END
    `;

    const request = new Request(sql, (err, rowCount) => {
        if (err) {
        throw err;
        }
    });
    //connection.execSql(request);
}

function createSurveyTable() {
    const sql = `
    IF NOT EXISTS(SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Surveys]') AND type in (N'U'))
    BEGIN
        USE Surveys;
        CREATE TABLE Surveys.dbo.Surveys
        (
            ID int IDENTITY(1,1) NOT NULL,
            Title varchar (30),
            Description varchar (30),
        )
    END
    `;

    /*const request = new Request(sql, (err, rowCount) => {
        if (err) {
        throw err;
        }
    });
    connection.execSql(request);
}*/