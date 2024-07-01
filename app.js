const express=require('express');
const app=express();
const path=require('path');
// require('dotenv').config();
// const PORT=process.env.Port;
// console.log(PORT);

app.use(express.static(path.join(__dirname,"public")));

app.get('/test',(req,res)=>{
    res.send("test route ")
})


app.get('/abc',(req,res)=>{
    res.send("abc route ")
})
app.get('/xyz',(req,res)=>{
    res.send("xyz route ")
})


app.get('/',(req,res)=>{
    res.send('this is a sample route');
})

app.listen(3333,()=>{
    console.log("app is running at port 3333");
})