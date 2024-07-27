const mongoose= require('mongoose');
const thoughts = require('./thought.js');
const friend = require ('./friends.js');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId
const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trimmed: true
        },
        email : {
            type: String,
            required: true,
            unique: true
            //look into valid email address via mongoose matching validation
        },
        thoughts :[{
            type: ObjectId,
            ref: 'thoughts'
        }],
        friends: [{
            type: ObjectId,
            ref: 'friend'
        }],
    },
    {
        toJSON:{
            virtuals: true,
        }
    }
)

//vitural friends
userSchema
 .virtual('friendsCount')
 .get(function () {
    return this.friends.length;
 });


const User = mongoose.model('User', userSchema)
module.exports = User;