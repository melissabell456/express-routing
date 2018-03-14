
const express = require('express');
const app = express();
// takes .env file and runs file so all properties listed are available in this environment
require('dotenv').config();
const routes = require('./routes/');

console.log('Welcome to express');

// middleware stack below
app.use("/api/v1/", routes);


// TODO Add error handler

// port to listen on:
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`port ${port} engaged`);
});