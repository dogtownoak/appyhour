const mongoose = require('mongoose');
Schema = mongoose.Schema;

const BusinessSchema = new Schema({

});

const Business = mongoose.model('Business', BusinessSchema);

module.exports = Business;

