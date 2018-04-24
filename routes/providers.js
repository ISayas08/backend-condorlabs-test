var express = require('express');
var router = express.Router();

const providersModel = require("./../models/providersModel");

/**
 * GET method, get all providersModel
 * 
 * Returns all saved providersModel
 */
router.get('/all', (req, res) => {
  providersModel.find().exec((errProvider, resProvider) => {
    if (!errProvider) {
      res.status(200).send({ msg: "Ok", providers: resProvider });
    } else {
      res.status(500).send({ msg: "There was an error getting the providers", err: errProvider });
    }
  });
});

/**
 * GET method.
 * 
 * To get a provider through its id.
 */
router.get('/:id', (req, res) => {
  const id = req.params.id;

  providersModel.findById(id).exec((errFindById, resFindById) => {
    if (!errFindById) {
      if (resFindById) {
        res.status(200).send({ msg: "Ok", provider: resFindById });
      } else {
        res.status(404).send({ msg: "Provider not found" });
      }
    } else {
      res.status(500).send({ msg: "There was an error getting the provider", err: errFindById });
    }
  });
});

/**
 * DELETE method.
 * 
 * To delete a saved provider.
 */
router.delete("/:id", (req, res) => {
  const id = req.params.id;

  providersModel.findByIdAndRemove(id).exec((errDelete, resDelete) => {
    if (!errDelete) {
      if (resDelete) {
        res.status(200).send({ msg: "Provider deleted", deletedProvider: resDelete });
      } else {
        // The route perhaps never enter here due to the differences between the logs that exist in the bd.
        res.status(404).send({ msg: "Provider not found" });
      }
    } else {
      res.status(500).send({ msg: "There was an error deleting the provider", err: errDelete });
    }
  })
});

/**
 * PUT method. 
 * To update a save provider.
 * 
 * Body example:
 * 
 * {
      "firstName": "Dianelis",
      "lastName": "Güette",
      "middleName": "Judith",
      "email": "isayas@nativapps.co",
      "projectedStartDate": "2017-05-12T10:29:35.444Z",
      "employerId": 500,
      "providerType": "MD",
      "staffStatus": "CONSULTING",
      "assignedTo": 66523,
      "status": "AWAITING_CREDENTIALS",
      "specialty": "5ade78093bebe722d0a57963"
    }
 */
router.put("/:id", (req, res) => {
  const id = req.params.id;
  let bodyPrividerToUpdate = JSON.parse(JSON.stringify(req.body));

  providersModel.findByIdAndUpdate(id, bodyPrividerToUpdate)
    .exec((errUpdate, resUpdate) => {
      if (!errUpdate) {
        if (resUpdate) {
          res.status(200).send({ msg: "Provider updated" });
        } else {
          // The route perhaps never enter here due to the differences between the logs that exist in the bd.
          res.status(404).send({ msg: "Provider not found" });
        }
      } else {
        res.status(500).send({ msg: "There was an error updating the provider", err: errUpdate });
      }
    });
});


/**
 * POST method, save a provider.
 * 
 * Body example:
 * 
 * {
      "firstName": "Dianelis",
      "lastName": "Güette",
      "middleName": "Judith",
      "email": "isayas@nativapps.co",
      "projectedStartDate": "2017-05-12T10:29:35.444Z",
      "employerId": 500,
      "providerType": "MD",
      "staffStatus": "CONSULTING",
      "assignedTo": 66523,
      "status": "AWAITING_CREDENTIALS",
      "specialty": "5ade78093bebe722d0a57963"
    }
 */
router.post("/", (req, res) => {
  let providerToSave = new providersModel(JSON.parse(JSON.stringify(req.body)));
  providerToSave.save((errSave, resSave) => {
    if (!errSave) {
      res.status(200).send({ msg: "Provider saved", id: resSave._id });
    } else {
      res.status(500).send({ msg: "There was an error saving the provider", err: errSave });
    }
  });
});

module.exports = router;
