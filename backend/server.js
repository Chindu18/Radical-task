import express from 'express';

const app = express();
const PORT = 5000;


app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.use(express.json())


// server listion 
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})