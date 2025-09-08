import express from 'express';
import db from './config/database.js';
import employess from './routes/employee.js';

const app = express();
const PORT = process.env.Port  || 5000;

//for middlewares
app.use(express.json())

//databse connection
app.use(db)

//routes
app.use('/api',employess)
app.get('/',(req,res)=>{
    res.send('Hello World');
})




// server listion 
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})