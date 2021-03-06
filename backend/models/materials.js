const mongoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator");


const materialSchema = mongoose.Schema({
    materialName: {type: String, required: true, unique: true },
    materialPrice: { type: Number, require: true},
    inUse: Boolean
});

materialSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Material', materialSchema);