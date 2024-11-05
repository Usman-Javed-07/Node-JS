const express = require('express');
const app = express();
const {products} = require('./data');
const { method } = require('lodash');

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
if(!singleProduct) {
    return res.status(404).send('product does not Exist');
}
    
 return  res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params);
    res.send('hello world')
    
})



app.get('/api/v1/query', (req, res) => {
const {search , limit} = req.query ;
let sortedProduct = [...products];

if(search) {
    sortedProduct = sortedProduct.filter((product)=> {
        return product.name.startsWith(search)
    })
}
if(limit) {
    sortedProduct = sortedProduct.slice(0, Number(limit))
}
if(sortedProduct.length < 1) {
  return res.status(200).json({sucess: true , data: []})
}
 return res.status(200).json(sortedProduct);
})
app.listen(5000, (req , res)=> {
    console.log('server is listing on port 5000...');
    
})