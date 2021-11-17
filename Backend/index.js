const express = require("express");
const cors = require("cors");
const multipart=require("connect-multiparty");
var multipartMiddleware = multipart();

const app = express();


var corsOptions = {
  origin: "http://localhost:8081"
}; 

// app.use(express.static('public'))
app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(multipartMiddleware);


// simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to LAASH application." });
// });

// set port, listen for requests
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
app.use(require('morgan')('dev'))

require('./routes/userRoutes')(app);


module.exports = app;