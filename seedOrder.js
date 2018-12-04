const db = require('./models');


var order_list = [
    {
        dateValid: new Date("2018-12-14"),
        dateOrdered: new Date("2018-12-13"),
        orderNumber: 1234,
        user: "5c06bedda15273caa916dbd7",
        drink: "5c06bedda15273caa916dbd8",
        appetizer: "5c06bedda15273caa916dbd6"
    },
    {
        dateValid: new Date("2018-12-10"),
        dateOrdered: new Date("2018-12-10"),
        orderNumber: 1234,
        user: "5c06bedda15273caa916dbd7",
        drink: "5c06bedda15273caa916dbd8",
        appetizer: "5c06bedda15273caa916dbd6"
    },
    {
        dateValid: new Date("2018-12-10"),
        dateOrdered: new Date("2018-12-10"),
        orderNumber: 1234,
        user: "5c06bedda15273caa916dbd7",
        drink: "5c06bedda15273caa916dbd8",
        appetizer: "5c06bedda15273caa916dbd6"
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