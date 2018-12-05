const db = require('./models');


var order_list = [
    {
        dateValid: new Date("2018-12-14"),
        dateOrdered: new Date("2018-12-13"),
        orderNumber: 1234,
        user: "5c06c4f1973b1acdf55d4062",
        drink: "5c06c4f1973b1acdf55d405e",
        appetizer: "5c06c4f0973b1acdf55d405a"
    },
    {
        dateValid: new Date("2018-12-10"),
        dateOrdered: new Date("2018-12-10"),
        orderNumber: 1234,
        user: "5c06c4f1973b1acdf55d4063",
        drink: "5c06c4f1973b1acdf55d405e",
        appetizer: "5c06c4f0973b1acdf55d405a"
    },
    {
        dateValid: new Date("2018-12-10"),
        dateOrdered: new Date("2018-12-10"),
        orderNumber: 1234,
        user: "5c06c4f1973b1acdf55d4064",
        drink: "5c06c4f1973b1acdf55d405e",
        appetizer: "5c06c4f0973b1acdf55d405a"
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