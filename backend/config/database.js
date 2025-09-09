import mysql from 'mysql2/promise';

let connection;

const db = async () => {
  try {
    if (!connection) {
      connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Chindu@123',
        database: 'dummy',
      });
      console.log('Database connected');
    }
    return connection; 
  } catch (error) {
    console.log('Database not connected:', error);
  }
};

export { db };
