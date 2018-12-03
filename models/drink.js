const mongoose = require('mongoose');
Schema = mongoose.Schema;

const DrinkSchema = new Schema({

});

const Drink = mongoose.model('Drink', DrinkSchema);

module.exports = Drink;