// requiring mongoose and the dateFormat utility function
// requiring the reaction schema
const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const dateFormat = require('../utils/utils');

// creating the thought schema
const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormat(timestamp)
    },
    username: {
        type: String,
        required: true
    },
    reactions: [reactionSchema]
});

// creating the virtual for the reaction count
ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});
// model for the thought schema
const Thought = model('Thought', ThoughtSchema);
// exporting the thought model
module.exports = Thought;
