const EventEmmiter = require('events');

const customEmmiter = new EventEmmiter;

customEmmiter.on('response' , (name, id) => {
    console.log(`Data Recived : User Name ${name} User ID : ${id}`)
})
customEmmiter.on('Response' ,() => {
    console.log('some other Event');
    
})
customEmmiter.emit('response' , 'saad ali' , '20164')