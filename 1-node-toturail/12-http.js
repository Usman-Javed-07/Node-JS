const http = require('http');

const server = http.createServer((req, res) => {
     if(req.url === '/') {
        res.end('welcome to home page');
     }
     if (req.url === '/about') {
        res.end('welcome to about page')
     }
    res.end (
        `
        <h1> Opps </h1>
        <p> page you are looking to see can not find </p> 
        
        <a href "/" > go back </a>
        `
    )

//     console.log(req);
    
//   res.write("hello welocme to the page");
//   res.end();

})

server.listen(5000);