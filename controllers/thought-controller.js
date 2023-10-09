const User = require('../models/User');
const Thought = require('../models/Thought');

// Get all thoughts
const getAllThoughts = async (req, res) => {
    try {
        const thoughts = await Thought.find({});
        res.status(200).json(thoughts);
    } catch (err) {
        res.status(500).json(err);
    }
};

// Get a single thought by its ID
const getThoughtById = async (req, res) => {
    try {
        const thought = await Thought.findById(req.params.thoughtId);
        if (!thought) {
            res.status(404).json({ message: 'No thought found with this id!' });
            return;
        }
        res.status(200).json(thought);
    } catch (err) {
        res.status(500).json(err);
    }
};

// Create a new thought
const createThought = async (req, res) => {
    try {
        const thought = await Thought.create(req.body);
        await User.findOneAndUpdate(
            { _id: req.body.userId },
            { $push: { thoughts: thought._id } },
            { new: true }
        );
        res.status(200).json(thought);
    } catch (err) {
        res.status(500).json(err);
    }
};

// Update a thought by its ID
const updateThought = async (req, res) => {
    try {
        const thought = await Thought.findByIdAndUpdate(
            req.params.thoughtId,
            req.body,
            { new: true, runValidators: true }
        );
        if (!thought) {
            res.status(404).json({ message: 'No thought found with this id!' });
            return;
        }
        res.status(200).json(thought);
    } catch (err) {
        res.status(500).json(err);
    }
};

// Delete a thought by its ID
const deleteThought = async (req, res) => {
    try {
        const thought = await Thought.findByIdAndDelete(req.params.thoughtId);
        if (!thought) {
            res.status(404).json({ message: 'No thought found with this id!' });
            return;
        }
        await User.findOneAndUpdate(
            { _id: thought.userId },
            { $pull: { thoughts: thought._id } },
            { new: true }
        );
        res.status(200).json({ message: 'Thought deleted successfully!' });
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought
};

