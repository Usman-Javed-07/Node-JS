
const express = require('express')
const app = express()

let  {people} = require('./data')
// static assests
app.use(express.static('./method-public'))
// parse form data 
// app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.post('/login' , (req , res)=>{
    const {name} = req.body;
    if(name) {
        return res.status(200).send(`welcome ${name}`)
    }
    res.status(401).send('please provide credentials')
})
app.get('/api/people', (req, res) => {
    res.status(200).json({success: true , data:people })
})

app.post('/api/people', (req , res)=> {
    const {name} = req.body
    if(!name) {
        return res.status(400).json({success:false,msg: 'please provide name value'})
    }
    res.status(201).send({success: true, person: name})
})


app.post('/api/people/postman', (req , res)=> {
    const { name } = req.body
    if(!name) {
        return res.status(400).json({success: false, msg: 'please provide name value'})
    }
    res.status(201).send({success: true, data: [...people, name]})
})



//  put request

app.put ('/api/people/:id', (req , res)=> {
    const { id } = req.params
    const { name } = req.body
    const person = people.find((person)=> person.id === Number(id))
    if(!person) {
        return res
        .status (404)
        .json({success: false, msg: `no person with id ${id}`})
    }
    const newPeople = people.map((person)=> {
        if(person.id === Number(id)) {
            person.name = name
        }
        return person
    })
    res.status(200).json ({success:true, data:newPeople})
})

// delete method '
app.delete('/api/people/:id', (req, res)=> {
   
    const person = people.find((person)=> person.id === Number(req.params.id))
    if(!person) {
        return res
        .status (404)
        .json({success: false, msg: `no person with id ${req.params.id}`})
    }
    const newPeople = people.filter(
        (person)=> person.id !== Number(req.params.id)
    )
        return res.status(200).json({success: true , data: newPeople})
})

app.listen(5000, (req , res)=> {
    console.log('server is listing on port 5000...');
    
})