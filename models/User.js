// requiring mongoose with the destructured Schema and model properties
const { Schema, model } = require('mongoose');

// creating the user schema
const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Please enter a valid email address']
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        },
        toObject: {
            virtuals: true
        }
    }
);

// creating virtual for friend count
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});
// model for the user schema
const User = model('User', UserSchema);
// exporting the user model
module.exports = User;
