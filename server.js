const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');


const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

mongoose.connect(process.env.CONNECT); // Needs to be completed prior to deployment

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Connected on localhost:${PORT}`));
