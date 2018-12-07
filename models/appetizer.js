const mongoose = require('mongoose');
Schema = mongoose.Schema;

const AppetizerSchema = new Schema({
    type: String,
    vegan: Boolean,
    style: String,
    image: String,
    description: String,
    dateValid: Date,
    business: String,
    businessAddress: String,
    businessLocation: String
});

const Appetizer = mongoose.model('Appetizer', AppetizerSchema);

module.exports = Appetizer;