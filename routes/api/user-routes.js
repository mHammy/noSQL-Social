// requiring express
const router = require('express').Router();

// deconstructing the methods from the user-controller
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
    } = require('../../controllers/user-controller');
    
// all users and create user routes
    router 
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// get one, update, and delete user routes
    router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// add and delete friend routes
    router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend);

// post and delete friend routes
    router.route('/:userId/friends/:friendId').post(addFriend);
    router.route('/:userId/friends/:friendId').delete(removeFriend);

    // exporting the router
    module.exports = router;