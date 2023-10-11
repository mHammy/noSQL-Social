// requiring mongoose and the dateFormat utility function
const { Schema } = require('mongoose');
const dateFormat = require('../utils/utils');

// creating the reaction schema
const reactionSchema = new Schema({
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormat(timestamp)
    }
});

// exporting the reaction schema
module.exports = reactionSchema;
