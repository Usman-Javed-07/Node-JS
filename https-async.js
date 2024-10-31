const http = require('http');

const server = http.createServer((req, res) => {
     if(req.url === '/') {
        res.end('welcome to home page');
     }
     if (req.url === '/about') {
        for (let i = 0; i<1000; i++) {
            for( let j = 0; j<1000 ; j++) {
                console.log(` ${i} ${j}`);
                
            }
        }
        res.end('welcome to about page')
     }
    res.end (  'error page' )
})
server.listen(5000, ()=> {
    console.log('server listing on 5000');
    
});