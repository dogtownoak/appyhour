const mongoose = require('mongoose');
Schema = mongoose.Schema;

const UserSchema = new Schema({

});

const User = mongoose.model('User', UserSchema);

module.exports = User;
