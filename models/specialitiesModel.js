const mongoose = require("mongoose");

let specialities = new mongoose.Schema(
    {
        name: { type: String }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("specialities", specialities);