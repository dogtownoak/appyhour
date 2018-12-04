const db = require('./models');


var order_list = [
    {
        dateValid: 12/12/2018,
        dateOrdered: 12/11/2018,
        orderNumber: 1234,
        user: "5c05c735e2256dae859d4bbf",
        drink: "5c05c735e2256dae859d4bc0",
        appetizer: "5c05c735e2256dae859d4bbe"
    }
];

db.Order.deleteMany({}, function(err, order) {
    console.log('removed all orders');
    db.Order.create(order_list, function(err, savedOrders){
        if(err){
            console.log(err);
            return;
        }
        console.log("recreated orders");
        console.log("create", order.length, "order");
    })
});