const {Schema, model} = require('mongoose');


const friendSchema = new Schema(
    {
        // reactionID : {
        //     type: ObjectId,
        //     default: new ObjectId,
        // },
        reactionBody : {
            type: String,
            required: true,
            maxLength: 280,
        },
        username : {
            type: String,
            required: true,
        }
    }
)

const friend  = model('friend', friendSchema);
module.exports = friend;