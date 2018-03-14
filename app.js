
const express = require('express');
const app = express();
// takes .env file and runs file so all properties listed are available in this environment
require('dotenv').config();
const routes = require('./routes/');

// middleware stack below
app.use("/api/v1/", routes);

// main error handler
app.use( (req, res, next) => {
  let err = new Error("Invalid Query");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.json({
    message: "Invalid Query",
    err: err.message
  });
});

// port to listen on:
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`port ${port} engaged`);
});