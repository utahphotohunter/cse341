// Express
const express = require('express');
const app = express();

// Impports
app.use('/', require('./routes/index'))

// Port
const port = 3000;

// Start the server
app.listen(process.env.port || port);
console.log(`Web server is listening at port ${process.env.port || port}`);
