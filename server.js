const express=require('express')
const app=express()
const path=require('path')

app.use(express.urlencoded({ extended: true })); // Middleware to parse form data

app.get('/users',(req,res)=>{
    const formData = req.body; // Form data from the request body
    console.log(formData); // Log the form data to the console
    res.send("Form data received"); // Send a response to the client

    
})

app.get('/',(req,res)=>{
    console.log('server is responding as axpected')
  //  res.send("server touched")
    res.sendFile(path.join(__dirname,'index.html'))
})

app.listen(4000,()=>{
    console.log('connected to server port on 4000')
})