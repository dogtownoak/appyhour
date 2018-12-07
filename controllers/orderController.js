const db = require('../models');

module.exports = {
    index: (req, res) => {
        db.Order.find({})
        .populate('user')
        .populate('drink')
        .populate('appetizer')
        .exec(function(err, allOrders){
            if(err) return console.log(err);
            res.json({'data': allOrders});
        })
    },

    create: (req, res) => {
        db.Order.create(req.body, (err, order) => {
            if (err) {
                return console.log(err);
            } 
            res.json(order);
        })
    },

    update: (req,res) => {
        var orderId = req.params.id;
        var order = req.body;
        db.Order.findByIdAndUpdate({_id: orderId}, order, (err, updatedOrder) => {
            if (err) { 
                return console.log(err);
            }
            res.json(updatedOrder);
        })
    },

    delete: (req, res) => {
        var orderId = req.params.id;
        db.Order.findByIdAndDelete({_id: orderId}, (err, deletedOrder) => {
            if (err) {
                return console.log(err);
            }
            res.json(deletedOrder);
        })
    }
};