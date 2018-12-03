const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/project-01', { userNewUrlParser: true});

const Appetizer = require('./appetizer');
const Drink = require('./drink');
const User = require('./user');
const Order = require('./order');

exports.Appetizer = Appetizer;
exports.Drink = Drink;
exports.User = User;
exports.Order = Order;