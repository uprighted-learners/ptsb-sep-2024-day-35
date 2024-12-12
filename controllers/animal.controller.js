const Animal = require("../models/animal.model");

// POST - /api/animals - Create a new animal record
const createAnimal = async (request, response) => {
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
}

// GET - /api/animals - Read all animals
const getAllAnimals = async (req, res) => {
    try {
        // find all animals in the database
        const allAnimals = await Animal.find({});

        // send the animals back to the client
        res.status(200).send(allAnimals);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

// GET - /api/animals/:id - Read a single animal record
const getAnimalById = async (req, res) => {
    try {
        // find the animal by id
        const animal = await Animal.findById(req.params.id);
        // send the animal back to the client
        res.status(200).send(animal);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

// PUT - /api/animals/:id - Update a single animal record
const updateAnimalById = async (req, res) => {
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
}

// DELETE - /api/animals/:id - Delete a single animal record
const deleteAnimalById = async (req, res) => {
    try {
        // find the animal by id
        const animal = await Animal.findByIdAndDelete(req.params.id);

        // send the animal back to the client
        res.status(200).send(animal);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

module.exports = {
    createAnimal,
    getAllAnimals,
    getAnimalById,
    updateAnimalById,
    deleteAnimalById
}