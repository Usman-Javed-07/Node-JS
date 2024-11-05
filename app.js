
// express js 

const express = require('express');
const app = express();
app.get('/', (req , res)=> {
    console.log('user hit the resourece');
    
 res.status(200).send('home page')
});
app.get('/about', (req , res) => {
    res.status(200).send('about page')
});
app.all('*' , (req , res)=> {
res.status(404).send('<h1> Page not found </h1>')
});

app.listen(5000 , ()=> {
    console.log('server listing on port 5000 ....');
    
});


// app.get     read the file
// app.post    insert the file
// app.put     update the file
// app.delete  delete the file
// app.all     match a url path that is exacatly equal to the specified path
// app.use     match a url that start with the path 
// app.listen  tells that in which port to start the app