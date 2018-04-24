const mongoose = require("mongoose");

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
        timestamps: true,
    }
);

module.exports = mongoose.model("providers", provider);