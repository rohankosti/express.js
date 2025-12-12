import express from 'express';
import { loadavg } from 'os';
const app = express();
console.log(app);

app.get('/',(req,res)=>{
    res.send('<h1>Hello from Express.js</h1>');
})

app.get("/about",(req,res)=>{
   res.send("<h3>Hello User From About Page </h3>")
})

app.get('/service',(req,res)=>{
    res.send('<h4>Hello user From Service Page</h4>');
    
})
app.listen(3000,()=>{
    console.log(`server are runnig port on http://localhost:3000`);
    
})