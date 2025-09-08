import mysql from 'mysql2/promise'

const db =async()=>{
    try {
        const connection=await mysql.createConnection({
        host: 'localhost',
        user:"root",
        password:"Chindu@123",
        database:"dummy"
    })
    console.log("Database connected")
    } catch (error) {
        console.log("Database not connected",error)
    }

}

db();
export default db;