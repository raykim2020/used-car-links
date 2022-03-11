require("dotenv").config();
const mongoose = require('mongoose');
////////////
//Database Connection
////////////

const DATABASE_URL = process.env.DATABASE_URL
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

//Establish

mongoose.connect(DATABASE_URL, CONFIG)

mongoose.connection
    .on("open", () => console.log("Connected to Mongoose"))
    .on("close", () => console.log("Disconnected from Mongoose"))
    .on("error", (error) => console.log(error));

module.exports = mongoose;