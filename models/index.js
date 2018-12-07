const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/project-01', { useNewUrlParser: true});

const Appetizer = require('./appetizer');
const Drink = require('./drink');
const User = require('./user');
const Order = require('./order');

exports.Appetizer = Appetizer;
exports.Drink = Drink;
exports.User = User;
exports.Order = Order;