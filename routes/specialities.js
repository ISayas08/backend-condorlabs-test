// Basic imports
var express = require('express');
var router = express.Router();

// Getting the model for this route.
const specialities = require("./../models/specialitiesModel");

/**
 * GET method.
 * 
 * Returns all saved specialities.
 */
router.get('/all', (req, res) => {
    specialities.find().exec((errSpecialty, resSpecialty) => {
        if (!errSpecialty) {
            res.status(200).send({ msg: "Ok", specialty: resSpecialty });
        } else {
            res.status(500).send({ msg: "There was an error getting the specialities", err: errSpecialty });
        }
    });
});

/**
 * POST method.
 * 
 * To save a new speciality.
 */
router.post("/", (req, res) => {
    let specialityToSave = new specialities(JSON.parse(JSON.stringify(req.body)));

    specialityToSave.save((errSave, resSave) => {
        if (!errSave) {
            res.status(200).send({ msg: "Speciality saved", id: resSave._id });
        } else {
            res.status(500).send({ msg: "There was an error saving the Speciality", err: errSave });
        }
    });
});

module.exports = router;