const user = require('../model/User')
const bcrypt = require('bcryptjs')
const jwt = require('jasonwebtoken')

const register = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function(err, hashPass){
        if(err){
            res.json({
                error:err
            })
        }
    })

    let user = new user({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: hashedPass
    })

    user.save()
    .then(user=> {
        res.json({
            message: 'User Added Successfully'
        })
    })
    .catch(error => {
        res.json({
            message: 'An Error occured!'
        })
    })
}

module.exports = {
    register
}