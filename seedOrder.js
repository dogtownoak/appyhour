const db = require('./models');


var order_list = [
    {
        dateValid: new Date("2018-12-14"),
        dateOrdered: new Date("2018-12-13"),
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