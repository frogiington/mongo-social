const express = require('express');
const router = require('express').Router();
const thoughts = require ('../../Models/thought.js')

// /api/thoughts
    //GET to get all thoughts
    // GET to get a single thought by its _id
    //POST to create a new thought (dont forget to push the created thoughts _id to the associated users thoughts array field)
    //Example Data:
    //  {
    //      "thoughtText": "Heres a cool thought...",
    //       "username": "lenantino"
    //      "userID": 5edff358a0fcb779aa7b118b}
    //PUT to update a thought by its _id
    //DELETE to remove a thought by its _id

// /api/thoughts/:thoughtId/reactions
    //POST to create a reaction stored in a single thoughts reactions array field
    //DELETE to pull and remove a reaction by the reactions reactionID value

router.get('/getAllThoughts', async (req,res) =>{
    try {
         console.log('router.get in thoughts api reached');
         res.status(200).end();
    } catch (err) {
         res.status(400).json(err);
     }
 }); 

 router.get('/getSingleThought', async(req,res) => {
    try { 
        console.log('single thought tentacle reached');
        res.status(200).end;
    } catch (err) {
        res.status(400).json(err);
    }
 });

// router.post('/postNewThought', async(req,res) => {
//     try {
//         console.log('This function will post a new thought eventually.');
//         var jsonPost = json.parse(req.body);
//         thoughts.create(`{thoughtText: '${jsonPost.thoughtText}', username: '${jsonPost.username}}`)
//     }
// })

    module.exports = router;