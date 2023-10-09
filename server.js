require('dotenv').config();
const express = require('express');
const { connectDatabase } = require('./config/connection');
const routes = require('./routes/api');

const app = express();

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the defined routes
app.use('/api', routes); 

app.get('/test', (req, res) => res.send('Test successful!'));


// Connect to MongoDB
connectDatabase();

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
