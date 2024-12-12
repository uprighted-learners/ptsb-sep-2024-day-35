const mongoose = require('mongoose');

// create a schema
const animalSchema = new mongoose.Schema({
    name: String,
    age: Number,
    captivityRaised: Boolean,
    latinName: String,
    species: String,
    diet: String,
    habitat: String,
    numberOfLegs: Number,
    numberOfTeeth: Number,
    numberOfEyes: Number,
    color: String,
    numberOfDucksOwned: Number,
})

module.exports = mongoose.model('Animal', animalSchema);