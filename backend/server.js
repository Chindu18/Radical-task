import express from 'express';
import {db} from './config/database.js';
import employess from './routes/employee.js';

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.Port  || 5000;

//databse connection
db();

//routes
app.use('/api',employess)


app.get('/',(req,res)=>{
    res.send('Hello World');
})




// server listion 
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})