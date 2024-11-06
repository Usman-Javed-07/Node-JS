// const express = require('express')
// const router = express.Router()


// router.get('/', (req, res) => {
//     res.status(200).json({success: true , data:people })
// })

// router.post('/api/people', (req , res)=> {
//     const {name} = req.body
//     if(!name) {
//         return res.status(400).json({success:false,msg: 'please provide name value'})
//     }
//     res.status(201).send({success: true, person: name})
// })


// router.post('/api/people/postman', (req , res)=> {
//     const { name } = req.body
//     if(!name) {
//         return res.status(400).json({success: false, msg: 'please provide name value'})
//     }
//     res.status(201).send({success: true, data: [...people, name]})
// })



// //  put request

// router.put ('/api/people/:id', (req , res)=> {
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
// router.delete('/api/people/:id', (req, res)=> {
   
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


// module.exports = router 














const express = require('express');
const router = express.Router();

// Sample data for `people`
let people = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' }
];

// GET all people
router.get('/', (req, res) => {
    res.status(200).json({ success: true, data: people });
});

// POST a new person
router.post('/', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, msg: 'Please provide name value' });
    }
    const newPerson = { id: people.length + 1, name };
    people.push(newPerson);
    res.status(201).json({ success: true, person: newPerson });
});

// POST route for Postman testing (if needed)
router.post('/postman', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, msg: 'Please provide name value' });
    }
    const newPerson = { id: people.length + 1, name };
    people.push(newPerson);
    res.status(201).json({ success: true, data: people });
});

// PUT to update a person by ID
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const person = people.find((person) => person.id === Number(id));

    if (!person) {
        return res.status(404).json({ success: false, msg: `No person with id ${id}` });
    }

    person.name = name;
    res.status(200).json({ success: true, data: people });
});

// DELETE a person by ID
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const personIndex = people.findIndex((person) => person.id === Number(id));
    
    if (personIndex === -1) {
        return res.status(404).json({ success: false, msg: `No person with id ${id}` });
    }

    people = people.filter((person) => person.id !== Number(id));
    res.status(200).json({ success: true, data: people });
});

module.exports = router;
