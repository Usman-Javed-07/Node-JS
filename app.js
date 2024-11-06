
// const express = require('express')
// const app = express()

// const people = require ('./routes/people')

// // let  {people} = require('../data')
// // static assests
// app.use(express.static('./method-public'))
// // parse form data 
// app.use(express.urlencoded({extended: false}))
// app.use(express.json())



// app.use('/api/people', people)





// app.post('/login' , (req , res)=>{
//     const {name} = req.body;
//     if(name) {
//         return res.status(200).send(`welcome ${name}`)
//     }
//     res.status(401).send('please provide credentials')
// })
// app.get('/api/people', (req, res) => {
//     res.status(200).json({success: true , data:people })
// })

// app.post('/api/people', (req , res)=> {
//     const {name} = req.body
//     if(!name) {
//         return res.status(400).json({success:false,msg: 'please provide name value'})
//     }
//     res.status(201).send({success: true, person: name})
// })


// app.post('/api/people/postman', (req , res)=> {
//     const { name } = req.body
//     if(!name) {
//         return res.status(400).json({success: false, msg: 'please provide name value'})
//     }
//     res.status(201).send({success: true, data: [...people, name]})
// })



// //  put request

// app.put ('/api/people/:id', (req , res)=> {
//     const { id } = req.params
//     const { name } = req.body
//     const person = people.find((person)=> person.id === Number(id))
//     if(!person) {
//         return res
//         .status (404)
//         .json({success: false, msg: `no person with id ${id}`})
//     }
//     const newPeople = people.map((person)=> {
//         if(person.id === Number(id)) {
//             person.name = name
//         }
//         return person
//     })
//     res.status(200).json ({success:true, data:newPeople})
// })

// // delete method '
// app.delete('/api/people/:id', (req, res)=> {
   
//     const person = people.find((person)=> person.id === Number(req.params.id))
//     if(!person) {
//         return res
//         .status (404)
//         .json({success: false, msg: `no person with id ${req.params.id}`})
//     }
//     const newPeople = people.filter(
//         (person)=> person.id !== Number(req.params.id)
//     )
//         return res.status(200).json({success: true , data: newPeople})
// })

// app.listen(5000, (req , res)=> {
//     console.log('server is listing on port 5000...');
    
// })












const express = require('express');
const app = express();
const peopleRouter = require('./routes/people'); // Import the router

// Middleware to serve static files, parse form data, and JSON
app.use(express.static('./method-public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use the people router with the `/api/people` prefix
app.use('/api/people', peopleRouter);

// Route to handle login
app.post('/login', (req, res) => {
    const { name } = req.body;
    if (name) {
        return res.status(200).send(`Welcome ${name}`);
    }
    res.status(401).send('Please provide credentials');
});

app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});
