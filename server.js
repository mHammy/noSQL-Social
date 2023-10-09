require('dotenv').config();
const express = require('express');
const connectDatabase = require('./config/connection');
const routes = require('./routes');

const app = express();

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the defined routes
app.use('/api', routes); 

// Connect to MongoDB
connectDatabase();

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
