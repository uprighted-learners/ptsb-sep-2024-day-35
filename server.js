const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(express.json());

const PORT = 8080;

mongoose.connect(`${process.env.MONGO_URI}`)
    .then(() => console.log('Connected to MongoDB!'))
    .catch(err => console.log(err));

app.get('/api/health', (req, res) => {
    res.send('Hello World');
});

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

// create a model
const Animal = mongoose.model('Animal', animalSchema);

// POST - /api/animals - Create a new animal record
app.post("/api/animals", (request, response) => {
    try {
        // create a new animal object using the `animalSchema`
        const newAnimal = new Animal(request.body);

        // save the new animal object to the database
        newAnimal.save();

        // send the new animal object back to the client for veritification
        response.status(201).send(newAnimal);
    } catch (error) {
        console.log(error);
        response.status(500).send(error);
    }
})

// GET - /api/animals - Read all animals
app.get("/api/animals", async (req, res) => {
    try {
        // find all animals in the database
        const allAnimals = await Animal.find({});

        // send the animals back to the client
        res.status(200).send(allAnimals);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
})

// GET - /api/animals/:id - Read a single animal record
app.get("/api/animals/:id", async (req, res) => {
    try {
        // find the animal by id
        const animal = await Animal.findById(req.params.id);
        // send the animal back to the client
        res.status(200).send(animal);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
})

// PUT - /api/animals/:id - Update a single animal record
app.put("/api/animals/:id", async (req, res) => {
    try {
        // find the animal by id
        const animal = await Animal.findById(req.params.id);
        // update the animal
        animal.name = req.body.name;
        animal.age = req.body.age;
        animal.captivityRaised = req.body.captivityRaised;
        animal.latinName = req.body.latinName;
        animal.species = req.body.species;
        animal.diet = req.body.diet;
        animal.habitat = req.body.habitat;
        animal.numberOfLegs = req.body.numberOfLegs;
        animal.numberOfTeeth = req.body.numberOfTeeth;
        animal.numberOfEyes = req.body.numberOfEyes;
        animal.color = req.body.color;
        animal.numberOfDucksOwned = req.body.numberOfDucksOwned;
        // save the animal
        animal.save();
        // send the animal back to the client
        res.status(200).send(animal);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
})

// DELETE - /api/animals/:id - Delete a single animal record
app.delete("/api/animals/:id", async (req, res) => {
    try {
        // find the animal by id
        const animal = await Animal.findByIdAndDelete(req.params.id);

        // send the animal back to the client
        res.status(200).send(animal);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});