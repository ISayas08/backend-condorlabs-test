const mongoose = require("mongoose");

/**
 * This model is assumed after listing all records in the collection.
 */
let specialities = new mongoose.Schema(
    {
        name: { type: String }
    },
    {
        timestamps: true, //This add createdAt and updatedAt fields
    }
);

module.exports = mongoose.model("specialities", specialities);