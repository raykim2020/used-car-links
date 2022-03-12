/////////////////////////
//Import our dependencies
///////////////////////
require("dotenv").config();
const express = require('express');
const morgan = require('morgan');
const methodOverride = require("method-override");
const carController = require('./controllers/cars')
const path = require('path');
const UserRouter = require("./controllers/user")
const session = require("express-session")
const MongoStore = require("connect-mongo");

////////////////////////////
//Database Connection
//////////////////////////
// Setup inputs
const DATABASE_URL = process.env.DATABASE_URL;
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
// Events for when connection opens/disconnects/errors




////////////////////////////////////////////////
// Our Models
////////////////////////////////////////////////
// pull schema and model from mongoose using object destructuring

// make cars schema

/////////////////
// make car Model
////////////////////


/////////////////////////////////////////////////
// Create our Express Application Object Bind Liquid Templating Engine
/////////////////////////////////////////////////
const app = express()
app.engine('jsx', require('express-react-views').createEngine());
app.set('view engine', 'jsx')

/////////////////////////////////////////////////////
// Middleware
/////////////////////////////////////////////////////
app.use(morgan("tiny")); //logging
app.use(methodOverride("_method")); // override for put and delete requests from forms
app.use(express.urlencoded({ extended: true })); // parse urlencoded request bodies
app.use(express.static("public")); // serve files from public statically
app.use(
    session({
        secret: process.env.SECRET,
        store: MongoStore.create({ mongoUrl: process.env.DATABASE_URL }),
        saveUninitialized: true,
        resave: false,
    })
);
//////////////////////
//Routes
////////////////////

app.use('/cars', carController);
app.use("/user", UserRouter);
app.get("/", (req, res) => {
    res.redirect("/cars");
});



//////////////////////////////////////////////
// Server Listener
//////////////////////////////////////////////
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Now Listening on port ${PORT}`));

