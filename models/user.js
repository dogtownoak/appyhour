const mongoose = require('mongoose');
Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    userName: String,
    password: String,
    image: String,
    drinkPlanType: String,
    drinkPerWeek: String,
    drinkUsed: Number,
    appetizerPlanType: String,
    appetizerPerWeek: Number,
    appetizerUsed: Number
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
