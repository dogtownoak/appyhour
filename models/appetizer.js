const mongoose = require('mongoose');
Schema = mongoose.Schema;

const AppetizerSchema = new Schema({

});

const Appetizer = mongoose.model('Appetizer', AppetizerSchema);

module.exports = Appetizer;