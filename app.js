// app.js
const express = require('express');
const path = require('path');

const app = express();

// Serve static files (CSS) from the root directory
app.use(express.static(__dirname));

// Serve the index.html file when the root route is accessed
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Export the app without starting the server
module.exports = app;
