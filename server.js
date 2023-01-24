require('dotenv').config({
  path: __dirname + '/.env'
})
const express = require("express");
const app = express();

//Body Parser Middleware
app.use(express.json());

app.use(async (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json"
  );

  next();
});

//Static files
app.use(express.static('/'))

app.use((error, req, res, next) => {
  res.status(404).send({
    message: error.message
  });
  next()
});

const port = process.env.PORT || 5000;
// adding error handling to app startup
app.listen(port, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Server started on port ${port}`);
});
