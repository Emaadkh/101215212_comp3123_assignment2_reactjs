const mongoose = require('mongoose')
const express = require('express')

const userModel = require('../models/users')

const route = express.Router()

route.post('/user/signup', async(req, res) => {

    try { 
        const user = new userModel(req.body)
        await user.save()
        res.status(201, { message: "Successfully added user"}).send(user)
    }
    catch(error) {
        res.status(500).send(error.message)
    }
})

route.post('/user/login', async(req, res) => {
  
    let password = req.body.password
    let userName = req.body.username
    console.log({userName})
    console.log({password})
    const user = await userModel.findOne({username : userName})

    if(!!!user) {
        res.status(404).send({"message": "Error "})
    }


    if(userName == user.username && password == user.password) {
        res.status(200).send({"status" : true, "username": user.username, message: "Successfully signed in"})
    }
    else {
        res.status(500).send({status: false, message: "Incorrect username or password"})
    }
})


module.exports = route

/*
{
    "username": "John",
    "email": "John@gmail.com",
    "password": "2572"
}
*/