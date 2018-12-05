const mongoose = require('mongoose');
Schema = mongoose.Schema;

const DrinkSchema = new Schema({
    type: String,
    vegan: Boolean,
    style: String,
    brand: String,
    image: String,
    description: String,
    dateValid: Date,
    business: String,
    businessAddress: String,
    businessLocation: String
});

const Drink = mongoose.model('Drink', DrinkSchema);

module.exports = Drink;