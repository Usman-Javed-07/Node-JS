const authorize = (req , res, next) =>{
    const {user} = req.query 
    if(user === 'john') {
        req.user = {name : 'jhon', id:3}
        next()
    }
    else {
        res.status(401).send('unathorized')
    }
}

module.exports = authorize ;