/*import { Connection, Request } from 'tedious'

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
    port: 1433 // Default Port
  }
};

export const connection = new Connection(config);

connection.connect((err) => {
  if (err) {
    console.log('connection err');
    throw err;
  }

  createDatabase();
});

function createDatabase() {
    const sql = `
        IF NOT EXISTS(SELECT * FROM sys.databases WHERE name = 'DataBase')
        BEGIN
            CREATE DATABASE DataBase
        END
    `;

    const request = new Request(sql, (err, rowCount) => {
        if (err) {
        throw err;
        }
    });
    connection.execSql(request);
}*/