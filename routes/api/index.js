// requiring express and the user and thought routes
const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');
// using the user and thought routes
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);
// exporting the router
module.exports = router;