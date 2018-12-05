const db = require('./models');

var appetizer_list = [
    {
        type: "Chicken Wings",
        vegan: false,
        style: "American",
        image: "https://loremflickr.com/320/240/appetizer?random=1",
        desription: "Bone-in Buffalo style hot wings",
        dateValid: new Date("12-13-2018"),
        business: "Original Buffalo Wings",
        businessAddress: "2499 Lombard Street, San Francisco CA 94123",
        businessLocation: "{lat: 37.798864, lng: -122.4424}"
    },
    {
        type: "Poke Nachos",
        vegan: false,
        style: "Buffalo",
        image: "https://loremflickr.com/320/240/appetizer?random=2",
        desription: "Bone-in Buffalo style hot wings",
        dateValid: new Date("12-13-2018"),
        business: "Original Buffalo Wings",
        businessAddress: "2499 Lombard Street, San Francisco CA 94123",
        businessLocation: "{lat: 37.798864, lng: -122.4424}"
    },
    {
        type: "Sliders",
        vegan: false,
        style: "American",
        image: "https://loremflickr.com/320/240/appetizer?random=3",
        desription: "Filet mignon sliders",
        dateValid: new Date("12-13-2018"),
        business: "Kincaid's Oakland",
        businessAddress: "1 Frannklin St, Oakland, CA 94607",
        businessLocation: "{lat: 37.793228, lng: -122.392883}"
    },
    {
        type: "Hummus Platter",
        vegan: true,
        style: "Middle Eastern",
        image: "https://loremflickr.com/320/240/appetizer?random=4",
        desription: "Hummus platter with pita chips",
        dateValid: new Date("12-13-2018"),
        business: "Arabian Nights Restaurant",
        businessAddress: "2345 Mission St, San Francisco, CA 94110",
        businessLocation: "{lat: 37.748470, lng: -122.418110}"
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
        dateValid: new Date("12-13-2018"),
        business: "Rickhouse",
        businessAddress: "246 Kearny Street, San Francisco CA 94108",
        businessLocation: "{lat: 37.790499, lng: -122.403839}"
    },
    {
        type: "Beer",
        vegan: true,
        style: "Boont Amber Ale",
        brand: "Anderson Valley Brewing Company",
        image: "https://loremflickr.com/320/240/beer",
        desription: "5.8% ALC, Bitterness: 16 IBU",
        dateValid: new Date("12-13-2018"),
        business: "Rickhouse",
        businessAddress: "246 Kearny Street, San Francisco CA 94108",
        businessLocation: "{lat: 37.790499, lng: -122.403839}"
    },
    {
        type: "Beer",
        vegan: true,
        style: "Boont Amber Ale",
        brand: "Anderson Valley Brewing Company",
        image: "https://loremflickr.com/320/240/beer",
        desription: "5.8% ALC, Bitterness: 16 IBU",
        dateValid: new Date("12-13-2018"),
        business: "Rickhouse",
        businessAddress: "246 Kearny Street, San Francisco CA 94108",
        businessLocation: "{lat: 37.790499, lng: -122.403839}"
    },
    {
        type: "Beer",
        vegan: true,
        style: "Boont Amber Ale",
        brand: "Anderson Valley Brewing Company",
        image: "https://loremflickr.com/320/240/beer",
        desription: "5.8% ALC, Bitterness: 16 IBU",
        dateValid: new Date("12-13-2018"),
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
    },
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
    },
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

