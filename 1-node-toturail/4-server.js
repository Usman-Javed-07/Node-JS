const http = require('http');

const server = http.createServer ((req , res)=> {

    console.log('request event')
    res.end('hellow world')
    
})

server.listen(5000, ()=> {


    console.log('server listing on port 5000');
})
