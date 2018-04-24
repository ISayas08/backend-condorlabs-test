const mongoose = require("mongoose");

/**
 * This model is assumed after listing all records in the collection.
 */
let provider = new mongoose.Schema(
    {
        firstName: { type: String },
        lastName: { type: String },
        middleName: { type: String },
        email: { type: String },
        projectedStartDate: { type: String },
        employerId: { type: Number },
        providerType: { type: String },
        staffStatus: { type: String },
        assignedTo: { type: Number },
        status: { type: String },
        specialty: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "specialities"
        }
    },
    {
        timestamps: true, //This add createdAt and updatedAt fields
    }
);

module.exports = mongoose.model("providers", provider);