

const express = require('express');
const app = express();
const {products} = require('./data')

app.get('/', (req, res)=> {
    res.send('<h1> Home page</h1> <a href = "/api/products"> producs </a>')
})
app.get('/api/products', (req, res) => {
    const newProduct = products.map((product)=> {
        const {id, name , image} = product
        return {id, name , image}
    })
    res.json(newProduct)
})
app.get('/api/products/:productID', (req, res) => {
    const { productID } = req.params;
    const singleProduct = products.find((product)=>  product.id === Number(productID))
    
 return  res.json(singleProduct)
})

app.listen(5000, (req , res)=> {
    console.log('server is listing on port 5000...');
    
})