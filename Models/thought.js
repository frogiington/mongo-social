const {Schema, model, mongoose} = require('mongoose');
const reaction = require('./reaction')

//Schema that creates thought model
//ThoguhtText: string, required, must be between 1/280
//createdAt: date, set default value to current time stamp, use getter method
//username: string, required
//reactions(replies): array of nested documents created with reactionSchema

const thoughtSchema = new Schema(
    {
        text: {
            type: String,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [{
            type: Schema.Types.ObjectId,
            ref: 'reaction'
            }]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: true
    }
)


//Returns length of reactions in array
thoughtSchema
 .virtual('reactionCount')
 .get(function () {
    return this.reactions.length;
 });

 //initialize thoughts model
 const thoughts = mongoose.model('thought', thoughtSchema)

 module.exports = thoughts;