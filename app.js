

const express = require('express');
const app = express();

// middleware 
const logger = (req , res, next)=> {
    const method = req.method;
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method , url , time);
    next()
    
}

app.get('/' , logger , (req, res)=> {
    res.send('Home')
})
app.get('/about' ,logger, (req , res)=> {
    res.send('about')
})



app.listen(5000, (req , res)=> {
    console.log('server is listing on port 5000...');
    
})