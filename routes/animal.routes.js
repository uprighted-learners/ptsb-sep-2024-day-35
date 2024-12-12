const express = require("express");
const router = express.Router();

const {
    createAnimal,
    getAllAnimals,
    getAnimalById,
    updateAnimalById,
    deleteAnimalById,
} = require("../controllers/animal.controller");

router.post("/", createAnimal);
router.get("/", getAllAnimals);
router.get("/:id", getAnimalById);
router.put("/:id", updateAnimalById);
router.delete("/:id", deleteAnimalById);

module.exports = router;
