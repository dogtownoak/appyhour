const mongoose = require('mongoose');
Schema = mongoose.Schema;

const AppetizerSchema = new Schema({
    type: String,
    vegan: Boolean,
    style: String,
    brand: String,
    image: String,
    desription: String,
    dateValid: Date,
    business: String,
    businessAddress: String,
    businessLocation: String
});

const Appetizer = mongoose.model('Appetizer', AppetizerSchema);

module.exports = Appetizer;