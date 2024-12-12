const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

const PORT = 8080;

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB!'))
    .catch(err => console.log(err));

app.get('/api/health', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});