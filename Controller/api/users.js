const express = require('express');
const router = require('express').Router();
const User = require ('../../Models/user.js')

// Routes:
// /api/users
    //GET all users 
    // GET a single user by its _id and populated thought and friend data
    // POST a new user
    //Example Data:
        //{
        //  "username": "lernantino"
        //  "email": "lernantinto@gmail.com"}

    //PUT to update a user by its _id
    //DELETE to remove a user by its _ID

// /api/users/:userID/friends/:friendID
    //POST to add a new friend to a users list
    //DELETE to remove a friend from a users list

router.get('/getAllUsers', async (req,res) =>{
         console.log('get all users reached');
         User.find().then(data => 
         {res.json(data).end()}
         )
 }); 

router.get('/:id', async (req, res) =>{

        console.log ('get single user reached');
        User.find(req.param.id).then(data => 
        {res.json(data).end()}
        )
})




router.post('/newUser', async(req,res) =>{
    try {
        console.log('router.post reached')
        console.log(req.body)
        var jsonPost = req.body
        User.create (`{username: '${jsonPost.username}', email '${jsonPost.email}'}`)
    } catch (err) {
        res.status(400).json(err)
    }
})

router.put('/updateUserID', async(req,res) =>{
    try { 
        console.log('this will eventually update a user by its ID' )
    } catch (err) {
        res.status(400).json(err)
    }
})

router.delete ('/deleteUserByID', async(req,res) => {
    try {
        console.log ('this will delete a user by its ID');
    } catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router;