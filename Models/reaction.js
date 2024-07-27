const {Schema, model} = require('mongoose');


const reactionSchema = new Schema(
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

const reaction  = model('reaction', reactionSchema);
module.exports = reaction