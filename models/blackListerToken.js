const mongoose = require("mongoose");

const blackSchema = new mongoose.Schema({
token: String
});

const BlackModel = mongoose.model("Blacklist", blackSchema);

module.exports = BlackModel;