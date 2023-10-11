// requiring express
const router = require('express').Router();

// requiring the api routes
const apiRoutes = require('./api');

// using the api routes
router.use('/api', apiRoutes);

// exporting the router
module.exports = router;