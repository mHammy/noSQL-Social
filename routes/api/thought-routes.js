// requiring express
const router = require('express').Router();

// deconstructing the methods from the thought-controller
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction,
} = require('../../controllers/thought-controller');

// all thoughts and create thought routes
router.route('/')
    .get(getAllThoughts)
    .post(createThought);

// get one, update, and delete thought routes
router.route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// create reaction route
router.route('/:thoughtId/reactions')
    .post(createReaction)

// delete reaction route
router.route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);

// exporting the router
module.exports = router;
