const mongoose = require('./connection')

const { Schema, model } = mongoose;

const carSchema = new Schema({
    name: String,
    make: String,
    model: String,
    year: String,
    price: String,
    img: String,
    username: String,
})

const Car = model("Car", carSchema)

module.exports = Car;