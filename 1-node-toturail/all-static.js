const express = require('express');
const app = express()

// get all files

// setup static and middleware

app.use(express.static('./public'))

// multiple options 

app.all ('a*' , (req , res)=> {
    res.status(404).send('<h1> page not found </h1>');
})
app.listen(5000 , ()=> {
    console.log('server listing on the port 5000');
    
})