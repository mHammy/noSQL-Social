// requiring mongoose
const mongoose = require('mongoose');

// connecting to the database
const connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.CONNECT, { 
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully.');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};
// exporting the connection
module.exports = { connectDatabase };