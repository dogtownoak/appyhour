const mongoose = require('mongoose');
Schema = mongoose.Schema;

const OrderSchema = new Schema({
    dateValid: Date,
    dateOrdered: Date,
    orderNumber: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    drink: {
        type: Schema.Types.ObjectId,
        ref: 'Drink'
    },
    appetizer: {
        type: Schema.Types.ObjectId,
        ref: 'Appetizer'
    }
    
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;