const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/project-01', { userNewUrlParser: true});

const Appetizer = require('./appetizer');
const Business = require('./business');
const Drink = require('./drink');
const User = require('./user');

exports.Appetizer = Appetizer;
exports.Business = Business;
exports.Drink = Drink;
exports.User = User;