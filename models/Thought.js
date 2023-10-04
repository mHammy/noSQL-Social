const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const ThoughtSchema = new Schema({

}); // end ThoughtSchema

ThoughtSchema.virtual('reactionCount').get(function() {

}); // end virtual

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
