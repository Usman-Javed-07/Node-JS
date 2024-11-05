

const express = require('express');
const app = express();
const morgan = require('morgan');
const logger = require('./logger')
const authorize = require('./authorize')


// 
// 1. use vs route
// 2. option -  our own / express / third party


// app.use([logger, authorize])
// app.use(express.static('./public'))

app.use(morgan('tiny'))
app.get('/', (req , res)=> {
    res.send('Home')
})


app.get('/' , logger , (req, res)=> {
    res.send('Home')
})
app.get('/about' ,logger, (req , res)=> {
    res.send('about')
})
app.get('/api/products' ,logger, (req , res)=> {
    res.send('products')
})
app.get('/api/items' , (req , res)=> {
    res.send('items')
})

app.listen(5000, (req , res)=> {
    console.log('server is listing on port 5000...');
    
})