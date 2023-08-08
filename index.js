// Importing Libraries
const express = require('express')
const app = express();

// Setting Server Port Number
const PORT = 8000;

// Importing db configuration
const db = require('./config/dbConnection');

// Express Middleware 
app.use(express.urlencoded({extended: false}))
app.use(express.json());

// Setting initial Route
app.use('/', require('./routes'));




// Running Server
app.listen(PORT, (err)=> {
    console.log(`Server is Running on PORT ${PORT}` )
})