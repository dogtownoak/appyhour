const db = require('./models');


var order_list = [
    {
        dateValid: new Date("2018-12-14"),
        dateOrdered: new Date("2018-12-13"),
        orderNumber: 1234,
        user: "5c09aa78a6106d47bcb5606e",
        drink: "5c09aa78a6106d47bcb5606c",
        appetizer: "5c09aa78a6106d47bcb56067"
    },
    {
        dateValid: new Date("2018-12-14"),
        dateOrdered: new Date("2018-12-13"),
        orderNumber: 1234,
        user: "5c09aa78a6106d47bcb5606e",
        drink: "5c09aa78a6106d47bcb5606c",
        appetizer: "5c09aa78a6106d47bcb56067"
    },
    {
        dateValid: new Date("2018-12-14"),
        dateOrdered: new Date("2018-12-13"),
        orderNumber: 1234,
        user: "5c09aa78a6106d47bcb5606e",
        drink: "5c09aa78a6106d47bcb5606c",
        appetizer: "5c09aa78a6106d47bcb56067"
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