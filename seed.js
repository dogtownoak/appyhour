const db = require('./models');

var appetizer_list = [
    {
        type: "Chicken Wings",
        vegan: false,
        style: "Buffalo",
        image: "https://loremflickr.com/320/240/appetizer",
        desription: "Bone-in Buffalo style hot wings",
        dateValid: 12/12/2018,
        business: "Original Buffalo Wings",
        businessAddress: "2499 Lombard Street, San Francisco CA 94123",
        businessLocation: "{lat: 37.798864, lng: -122.4424}"
    }
];

var drink_list = [
    {
        type: "Beer",
        vegan: true,
        style: "Boont Amber Ale",
        brand: "Anderson Valley Brewing Company",
        image: "https://loremflickr.com/320/240/beer",
        desription: "5.8% ALC, Bitterness: 16 IBU",
        dateValid: 13/12/2018,
        business: "Rickhouse",
        businessAddress: "246 Kearny Street, San Francisco CA 94108",
        businessLocation: "{lat: 37.790499, lng: -122.403839}"
    }
];

var user_list = [
    {
        firstName: "Nancy",
        lastName: "Johnson",
        email: "nancyjohnson@gmail.com",
        phone: "415-123-4567",
        userName: "nancyjohnson",
        password: "password1",
        image: "https://loremflickr.com/320/240/headshot",
        drinkPlanType: "Beer Plan",
        drinkPerWeek: 2,
        drinkUsed: 0,
        appetizerPlanType: "Appetizer Plan",
        appetizerPerWeek: 3,
        appetizerUsed: 0
    }
];

var order_list = [
    {
        dateValid: 12/12/2018,
        dateOrdered: 12/11/2018,
        orderNumber: 1234
        // user: {
        //     type: Schema.Types.ObjectId,
        //     ref: 'User'
        // },
        // drink: {
        //     type: Schema.Types.ObjectId,
        //     ref: 'Drink'
        // },
        // appetizer: {
        //     type: Schema.Types.ObjectId,
        //     ref: 'Appetizer'
        
    }
];

db.Appetizer.deleteMany({}, function(err, appetizer) {
    console.log('removed all appetizers');
    db.Appetizer.create(appetizer_list, function(err, savedAppetizers){
        if(err){
            console.log(err);
            return;
        }
        console.log("recreated appetizers");
        console.log("create", appetizer.length, "appetizers");
    })
});

db.Drink.deleteMany({}, function(err, drink) {
    console.log('removed all drinks');
    db.Drink.create(drink_list, function(err, savedDrinks){
        if(err){
            console.log(err);
            return;
        }
        console.log("recreated drinks");
        console.log("create", drink.length, "drinks");
    })
});

db.User.deleteMany({}, function(err, user) {
    console.log('removed all users');
    db.User.create(user_list, function(err, savedUser){
        if(err){
            console.log(err);
            return;
        }
        console.log("recreated user");
        console.log("create", user.length, "user");
    })
});

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