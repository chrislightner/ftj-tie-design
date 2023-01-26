const express = require('express'); //Import the express dependency
const app = express();              //Instantiate an express app, the main work horse of this server
const port = 5000;                  //Save the port number where your server will be listening

//Idiomatic expression in express to route and respond to a client request
app.get('/', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('index.html', {root: __dirname});      //server responds by sending the index.html file to the client's browser
                                                        //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile
});

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`);
});

// require('dotenv').config({
//   path: __dirname + '/.env'
// })
// const express = require("express");
// const app = express();

// //Body Parser Middleware
// app.use(express.json());

// app.use(async (req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Credentials", true);
//   res.header("Access-Control-Allow-Methods", "GET");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json"
//   );

//   next();
// });

// //Static files
// //app.use(express.static('mockups'))

// app.use((error, req, res, next) => {
//   res.status(404).send({
//     message: error.message
//   });
//   next()
// });

// const port = process.env.PORT || 5000;
// // adding error handling to app startup
// app.listen(port, (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log(`Server started on port ${port}`);
// });
