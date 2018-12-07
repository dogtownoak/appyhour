const db = require('./models');

var appetizer_list = [
    {
        type: "Chicken Wings",
        vegan: false,
        style: "American",
        description: "Bone-in Buffalo style hot wings",
        image: "https://loremflickr.com/320/240/appetizer?random=1",
        dateValid: new Date("12-13-2018"),
        business: "Original Buffalo Wings",
        businessAddress: "2499 Lombard Street, San Francisco CA 94123",
        businessLocation: "{lat: 37.798864, lng: -122.4424}"
    },
    {
        type: "Poke Nachos",
        vegan: false,
        style: "Buffalo",
        description: "Bone-in Buffalo style hot wings",
        image: "https://loremflickr.com/320/240/appetizer?random=2",
        dateValid: new Date("12-13-2018"),
        business: "Original Buffalo Wings",
        businessAddress: "2499 Lombard Street, San Francisco CA 94123",
        businessLocation: "{lat: 37.798864, lng: -122.4424}"
    },
    {
        type: "Sliders",
        vegan: false,
        style: "American",
        description: "Filet mignon sliders",
        image: "https://loremflickr.com/320/240/appetizer?random=3",
        dateValid: new Date("12-13-2018"),
        business: "Kincaid's Oakland",
        businessAddress: "1 Frannklin St, Oakland, CA 94607",
        businessLocation: "{lat: 37.793228, lng: -122.392883}"
    },
    {
        type: "Hummus Platter",
        vegan: true,
        style: "Middle Eastern",
        description: "Hummus platter with pita chips",
        image: "https://loremflickr.com/320/240/appetizer?random=4",
        dateValid: new Date("12-13-2018"),
        business: "Arabian Nights Restaurant",
        businessAddress: "2345 Mission St, San Francisco, CA 94110",
        businessLocation: "{lat: 37.748470, lng: -122.418110}"
    },
    {
        type: "Chicken Wings",
        vegan: false,
        style: "American",
        description: "Bone-in Buffalo style hot wings",
        image: "https://loremflickr.com/320/240/appetizer?random=5",
        dateValid: new Date("12-13-2018"),
        business: "Original Buffalo Wings",
        businessAddress: "2499 Lombard Street, San Francisco CA 94123",
        businessLocation: "{lat: 37.798864, lng: -122.4424}"
    },
    {
        type: "Poke Nachos",
        vegan: false,
        style: "Buffalo",
        description: "Bone-in Buffalo style hot wings",
        image: "https://loremflickr.com/320/240/appetizer?random=6",
        dateValid: new Date("12-13-2018"),
        business: "Original Buffalo Wings",
        businessAddress: "2499 Lombard Street, San Francisco CA 94123",
        businessLocation: "{lat: 37.798864, lng: -122.4424}"
    },
    {
        type: "Sliders",
        vegan: false,
        style: "American",
        description: "Filet mignon sliders",
        image: "https://loremflickr.com/320/240/appetizer?random=7",
        dateValid: new Date("12-13-2018"),
        business: "Kincaid's Oakland",
        businessAddress: "1 Frannklin St, Oakland, CA 94607",
        businessLocation: "{lat: 37.793228, lng: -122.392883}"
    },
    {
        type: "Hummus Platter",
        vegan: true,
        style: "Middle Eastern",
        description: "Hummus platter with pita chips",
        image: "https://loremflickr.com/320/240/appetizer?random=8",
        dateValid: new Date("12-13-2018"),
        business: "Arabian Nights Restaurant",
        businessAddress: "2345 Mission St, San Francisco, CA 94110",
        businessLocation: "{lat: 37.748470, lng: -122.418110}"
    },
    {
        type: "Chicken Wings",
        vegan: false,
        style: "American",
        description: "Bone-in Buffalo style hot wings",
        image: "https://loremflickr.com/320/240/appetizer?random=9",
        dateValid: new Date("12-13-2018"),
        business: "Original Buffalo Wings",
        businessAddress: "2499 Lombard Street, San Francisco CA 94123",
        businessLocation: "{lat: 37.798864, lng: -122.4424}"
    },
    {
        type: "Poke Nachos",
        vegan: false,
        style: "Buffalo",
        description: "Bone-in Buffalo style hot wings",
        image: "https://loremflickr.com/320/240/appetizer?random=10",
        dateValid: new Date("12-13-2018"),
        business: "Original Buffalo Wings",
        businessAddress: "2499 Lombard Street, San Francisco CA 94123",
        businessLocation: "{lat: 37.798864, lng: -122.4424}"
    },
    {
        type: "Sliders",
        vegan: false,
        style: "American",
        description: "Filet mignon sliders",
        image: "https://loremflickr.com/320/240/appetizer?random=11",
        dateValid: new Date("12-13-2018"),
        business: "Kincaid's Oakland",
        businessAddress: "1 Frannklin St, Oakland, CA 94607",
        businessLocation: "{lat: 37.793228, lng: -122.392883}"
    },
    {
        type: "Hummus Platter",
        vegan: true,
        style: "Middle Eastern",
        description: "Hummus platter with pita chips",
        image: "https://loremflickr.com/320/240/appetizer?random=12",
        dateValid: new Date("12-13-2018"),
        business: "Arabian Nights Restaurant",
        businessAddress: "2345 Mission St, San Francisco, CA 94110",
        businessLocation: "{lat: 37.748470, lng: -122.418110}"
    },
    {
        type: "Chicken Wings",
        vegan: false,
        style: "American",
        description: "Bone-in Buffalo style hot wings",
        image: "https://loremflickr.com/320/240/appetizer?random=13",
        dateValid: new Date("12-13-2018"),
        business: "Original Buffalo Wings",
        businessAddress: "2499 Lombard Street, San Francisco CA 94123",
        businessLocation: "{lat: 37.798864, lng: -122.4424}"
    },
    {
        type: "Poke Nachos",
        vegan: false,
        style: "Buffalo",
        description: "Bone-in Buffalo style hot wings",
        image: "https://loremflickr.com/320/240/appetizer?random=14",
        dateValid: new Date("12-13-2018"),
        business: "Original Buffalo Wings",
        businessAddress: "2499 Lombard Street, San Francisco CA 94123",
        businessLocation: "{lat: 37.798864, lng: -122.4424}"
    },
    {
        type: "Sliders",
        vegan: false,
        style: "American",
        description: "Filet mignon sliders",
        image: "https://loremflickr.com/320/240/appetizer?random=15",
        dateValid: new Date("12-13-2018"),
        business: "Kincaid's Oakland",
        businessAddress: "1 Frannklin St, Oakland, CA 94607",
        businessLocation: "{lat: 37.793228, lng: -122.392883}"
    },
    {
        type: "Hummus Platter",
        vegan: true,
        style: "Middle Eastern",
        description: "Hummus platter with pita chips",
        image: "https://loremflickr.com/320/240/appetizer?random=16",
        dateValid: new Date("12-13-2018"),
        business: "Arabian Nights Restaurant",
        businessAddress: "2345 Mission St, San Francisco, CA 94110",
        businessLocation: "{lat: 37.748470, lng: -122.418110}"
    },
    {
        type: "Chicken Wings",
        vegan: false,
        style: "American",
        description: "Bone-in Buffalo style hot wings",
        image: "https://loremflickr.com/320/240/appetizer?random=17",
        dateValid: new Date("12-13-2018"),
        business: "Original Buffalo Wings",
        businessAddress: "2499 Lombard Street, San Francisco CA 94123",
        businessLocation: "{lat: 37.798864, lng: -122.4424}"
    },
    {
        type: "Poke Nachos",
        vegan: false,
        style: "Buffalo",
        description: "Bone-in Buffalo style hot wings",
        image: "https://loremflickr.com/320/240/appetizer?random=18",
        dateValid: new Date("12-13-2018"),
        business: "Original Buffalo Wings",
        businessAddress: "2499 Lombard Street, San Francisco CA 94123",
        businessLocation: "{lat: 37.798864, lng: -122.4424}"
    },
    {
        type: "Sliders",
        vegan: false,
        style: "American",
        description: "Filet mignon sliders",
        image: "https://loremflickr.com/320/240/appetizer?random=19",
        dateValid: new Date("12-13-2018"),
        business: "Kincaid's Oakland",
        businessAddress: "1 Frannklin St, Oakland, CA 94607",
        businessLocation: "{lat: 37.793228, lng: -122.392883}"
    },
    {
        type: "Hummus Platter",
        vegan: true,
        style: "Middle Eastern",
        description: "Hummus platter with pita chips",
        image: "https://loremflickr.com/320/240/appetizer?random=20",
        dateValid: new Date("12-13-2018"),
        business: "Arabian Nights Restaurant",
        businessAddress: "2345 Mission St, San Francisco, CA 94110",
        businessLocation: "{lat: 37.748470, lng: -122.418110}"
    },
    {
        type: "Chicken Wings",
        vegan: false,
        style: "American",
        description: "Bone-in Buffalo style hot wings",
        image: "https://loremflickr.com/320/240/appetizer?random=21",
        dateValid: new Date("12-13-2018"),
        business: "Original Buffalo Wings",
        businessAddress: "2499 Lombard Street, San Francisco CA 94123",
        businessLocation: "{lat: 37.798864, lng: -122.4424}"
    },
    {
        type: "Poke Nachos",
        vegan: false,
        style: "Buffalo",
        description: "Bone-in Buffalo style hot wings",
        image: "https://loremflickr.com/320/240/appetizer?random=22",
        dateValid: new Date("12-13-2018"),
        business: "Original Buffalo Wings",
        businessAddress: "2499 Lombard Street, San Francisco CA 94123",
        businessLocation: "{lat: 37.798864, lng: -122.4424}"
    },
    {
        type: "Sliders",
        vegan: false,
        style: "American",
        description: "Filet mignon sliders",
        image: "https://loremflickr.com/320/240/appetizer?random=23",
        dateValid: new Date("12-13-2018"),
        business: "Kincaid's Oakland",
        businessAddress: "1 Frannklin St, Oakland, CA 94607",
        businessLocation: "{lat: 37.793228, lng: -122.392883}"
    },
    {
        type: "Hummus Platter",
        vegan: true,
        style: "Middle Eastern",
        description: "Hummus platter with pita chips",
        image: "https://loremflickr.com/320/240/appetizer?random=24",
        dateValid: new Date("12-13-2018"),
        business: "Arabian Nights Restaurant",
        businessAddress: "2345 Mission St, San Francisco, CA 94110",
        businessLocation: "{lat: 37.748470, lng: -122.418110}"
    },
    {
        type: "Chicken Wings",
        vegan: false,
        style: "American",
        description: "Bone-in Buffalo style hot wings",
        image: "https://loremflickr.com/320/240/appetizer?random=25",
        dateValid: new Date("12-13-2018"),
        business: "Original Buffalo Wings",
        businessAddress: "2499 Lombard Street, San Francisco CA 94123",
        businessLocation: "{lat: 37.798864, lng: -122.4424}"
    },
    {
        type: "Poke Nachos",
        vegan: false,
        style: "Buffalo",
        description: "Bone-in Buffalo style hot wings",
        image: "https://loremflickr.com/320/240/appetizer?random=26",
        dateValid: new Date("12-13-2018"),
        business: "Original Buffalo Wings",
        businessAddress: "2499 Lombard Street, San Francisco CA 94123",
        businessLocation: "{lat: 37.798864, lng: -122.4424}"
    },
    {
        type: "Sliders",
        vegan: false,
        style: "American",
        description: "Filet mignon sliders",
        image: "https://loremflickr.com/320/240/appetizer?random=27",
        dateValid: new Date("12-13-2018"),
        business: "Kincaid's Oakland",
        businessAddress: "1 Frannklin St, Oakland, CA 94607",
        businessLocation: "{lat: 37.793228, lng: -122.392883}"
    },
    {
        type: "Hummus Platter",
        vegan: true,
        style: "Middle Eastern",
        description: "Hummus platter with pita chips",
        image: "https://loremflickr.com/320/240/appetizer?random=28",
        dateValid: new Date("12-13-2018"),
        business: "Arabian Nights Restaurant",
        businessAddress: "2345 Mission St, San Francisco, CA 94110",
        businessLocation: "{lat: 37.748470, lng: -122.418110}"
    },
    {
        type: "Chicken Wings",
        vegan: false,
        style: "American",
        description: "Bone-in Buffalo style hot wings",
        image: "https://loremflickr.com/320/240/appetizer?random=29",
        dateValid: new Date("12-13-2018"),
        business: "Original Buffalo Wings",
        businessAddress: "2499 Lombard Street, San Francisco CA 94123",
        businessLocation: "{lat: 37.798864, lng: -122.4424}"
    },
    {
        type: "Poke Nachos",
        vegan: false,
        style: "Buffalo",
        description: "Bone-in Buffalo style hot wings",
        image: "https://loremflickr.com/320/240/appetizer?random=30",
        dateValid: new Date("12-13-2018"),
        business: "Original Buffalo Wings",
        businessAddress: "2499 Lombard Street, San Francisco CA 94123",
        businessLocation: "{lat: 37.798864, lng: -122.4424}"
    },
    {
        type: "Sliders",
        vegan: false,
        style: "American",
        description: "Filet mignon sliders",
        image: "https://loremflickr.com/320/240/appetizer?random=31",
        dateValid: new Date("12-13-2018"),
        business: "Kincaid's Oakland",
        businessAddress: "1 Frannklin St, Oakland, CA 94607",
        businessLocation: "{lat: 37.793228, lng: -122.392883}"
    },
    {
        type: "Hummus Platter",
        vegan: true,
        style: "Middle Eastern",
        description: "Hummus platter with pita chips",
        image: "https://loremflickr.com/320/240/appetizer?random=32",
        dateValid: new Date("12-13-2018"),
        business: "Arabian Nights Restaurant",
        businessAddress: "2345 Mission St, San Francisco, CA 94110",
        businessLocation: "{lat: 37.748470, lng: -122.418110}"
    },
    {
        type: "Chicken Wings",
        vegan: false,
        style: "American",
        description: "Bone-in Buffalo style hot wings",
        image: "https://loremflickr.com/320/240/appetizer?random=33",
        dateValid: new Date("12-13-2018"),
        business: "Original Buffalo Wings",
        businessAddress: "2499 Lombard Street, San Francisco CA 94123",
        businessLocation: "{lat: 37.798864, lng: -122.4424}"
    },
    {
        type: "Poke Nachos",
        vegan: false,
        style: "Buffalo",
        description: "Bone-in Buffalo style hot wings",
        image: "https://loremflickr.com/320/240/appetizer?random=34",
        dateValid: new Date("12-13-2018"),
        business: "Original Buffalo Wings",
        businessAddress: "2499 Lombard Street, San Francisco CA 94123",
        businessLocation: "{lat: 37.798864, lng: -122.4424}"
    },
    {
        type: "Sliders",
        vegan: false,
        style: "American",
        description: "Filet mignon sliders",
        image: "https://loremflickr.com/320/240/appetizer?random=35",
        dateValid: new Date("12-13-2018"),
        business: "Kincaid's Oakland",
        businessAddress: "1 Frannklin St, Oakland, CA 94607",
        businessLocation: "{lat: 37.793228, lng: -122.392883}"
    },
    {
        type: "Hummus Platter",
        vegan: true,
        style: "Middle Eastern",
        description: "Hummus platter with pita chips",
        image: "https://loremflickr.com/320/240/appetizer?random=36",
        dateValid: new Date("12-13-2018"),
        business: "Arabian Nights Restaurant",
        businessAddress: "2345 Mission St, San Francisco, CA 94110",
        businessLocation: "{lat: 37.748470, lng: -122.418110}"
    },
    {
        type: "Chicken Wings",
        vegan: false,
        style: "American",
        description: "Bone-in Buffalo style hot wings",
        image: "https://loremflickr.com/320/240/appetizer?random=37",
        dateValid: new Date("12-13-2018"),
        business: "Original Buffalo Wings",
        businessAddress: "2499 Lombard Street, San Francisco CA 94123",
        businessLocation: "{lat: 37.798864, lng: -122.4424}"
    },
    {
        type: "Poke Nachos",
        vegan: false,
        style: "Buffalo",
        description: "Bone-in Buffalo style hot wings",
        image: "https://loremflickr.com/320/240/appetizer?random=38",
        dateValid: new Date("12-13-2018"),
        business: "Original Buffalo Wings",
        businessAddress: "2499 Lombard Street, San Francisco CA 94123",
        businessLocation: "{lat: 37.798864, lng: -122.4424}"
    },
    {
        type: "Sliders",
        vegan: false,
        style: "American",
        description: "Filet mignon sliders",
        image: "https://loremflickr.com/320/240/appetizer?random=39",
        dateValid: new Date("12-13-2018"),
        business: "Kincaid's Oakland",
        businessAddress: "1 Frannklin St, Oakland, CA 94607",
        businessLocation: "{lat: 37.793228, lng: -122.392883}"
    },
    {
        type: "Hummus Platter",
        vegan: true,
        style: "Middle Eastern",
        description: "Hummus platter with pita chips",
        image: "https://loremflickr.com/320/240/appetizer?random=40",
        dateValid: new Date("12-13-2018"),
        business: "Arabian Nights Restaurant",
        businessAddress: "2345 Mission St, San Francisco, CA 94110",
        businessLocation: "{lat: 37.748470, lng: -122.418110}"
    },
    {
        type: "Chicken Wings",
        vegan: false,
        style: "American",
        description: "Bone-in Buffalo style hot wings",
        image: "https://loremflickr.com/320/240/appetizer?random=41",
        dateValid: new Date("12-13-2018"),
        business: "Original Buffalo Wings",
        businessAddress: "2499 Lombard Street, San Francisco CA 94123",
        businessLocation: "{lat: 37.798864, lng: -122.4424}"
    },
    {
        type: "Poke Nachos",
        vegan: false,
        style: "Buffalo",
        description: "Bone-in Buffalo style hot wings",
        image: "https://loremflickr.com/320/240/appetizer?random=42",
        dateValid: new Date("12-13-2018"),
        business: "Original Buffalo Wings",
        businessAddress: "2499 Lombard Street, San Francisco CA 94123",
        businessLocation: "{lat: 37.798864, lng: -122.4424}"
    },
    {
        type: "Sliders",
        vegan: false,
        style: "American",
        description: "Filet mignon sliders",
        image: "https://loremflickr.com/320/240/appetizer?random=43",
        dateValid: new Date("12-13-2018"),
        business: "Kincaid's Oakland",
        businessAddress: "1 Frannklin St, Oakland, CA 94607",
        businessLocation: "{lat: 37.793228, lng: -122.392883}"
    },
    {
        type: "Hummus Platter",
        vegan: true,
        style: "Middle Eastern",
        description: "Hummus platter with pita chips",
        image: "https://loremflickr.com/320/240/appetizer?random=44",
        dateValid: new Date("12-13-2018"),
        business: "Arabian Nights Restaurant",
        businessAddress: "2345 Mission St, San Francisco, CA 94110",
        businessLocation: "{lat: 37.748470, lng: -122.418110}"
    },
    {
        type: "Chicken Wings",
        vegan: false,
        style: "American",
        description: "Bone-in Buffalo style hot wings",
        image: "https://loremflickr.com/320/240/appetizer?random=45",
        dateValid: new Date("12-13-2018"),
        business: "Original Buffalo Wings",
        businessAddress: "2499 Lombard Street, San Francisco CA 94123",
        businessLocation: "{lat: 37.798864, lng: -122.4424}"
    },
    {
        type: "Poke Nachos",
        vegan: false,
        style: "Buffalo",
        description: "Bone-in Buffalo style hot wings",
        image: "https://loremflickr.com/320/240/appetizer?random=46",
        dateValid: new Date("12-13-2018"),
        business: "Original Buffalo Wings",
        businessAddress: "2499 Lombard Street, San Francisco CA 94123",
        businessLocation: "{lat: 37.798864, lng: -122.4424}"
    },
    {
        type: "Sliders",
        vegan: false,
        style: "American",
        description: "Filet mignon sliders",
        image: "https://loremflickr.com/320/240/appetizer?random=47",
        dateValid: new Date("12-13-2018"),
        business: "Kincaid's Oakland",
        businessAddress: "1 Frannklin St, Oakland, CA 94607",
        businessLocation: "{lat: 37.793228, lng: -122.392883}"
    },
    {
        type: "Hummus Platter",
        vegan: true,
        style: "Middle Eastern",
        description: "Hummus platter with pita chips",
        image: "https://loremflickr.com/320/240/appetizer?random=48",
        dateValid: new Date("12-13-2018"),
        business: "Arabian Nights Restaurant",
        businessAddress: "2345 Mission St, San Francisco, CA 94110",
        businessLocation: "{lat: 37.748470, lng: -122.418110}"
    },
    {
        type: "Chicken Wings",
        vegan: false,
        style: "American",
        description: "Bone-in Buffalo style hot wings",
        image: "https://loremflickr.com/320/240/appetizer?random=49",
        dateValid: new Date("12-13-2018"),
        business: "Original Buffalo Wings",
        businessAddress: "2499 Lombard Street, San Francisco CA 94123",
        businessLocation: "{lat: 37.798864, lng: -122.4424}"
    },
    {
        type: "Poke Nachos",
        vegan: false,
        style: "Buffalo",
        description: "Bone-in Buffalo style hot wings",
        image: "https://loremflickr.com/320/240/appetizer?random=50",
        dateValid: new Date("12-13-2018"),
        business: "Original Buffalo Wings",
        businessAddress: "2499 Lombard Street, San Francisco CA 94123",
        businessLocation: "{lat: 37.798864, lng: -122.4424}"
    },
    {
        type: "Sliders",
        vegan: false,
        style: "American",
        description: "Filet mignon sliders",
        image: "https://loremflickr.com/320/240/appetizer?random=51",
        dateValid: new Date("12-13-2018"),
        business: "Kincaid's Oakland",
        businessAddress: "1 Frannklin St, Oakland, CA 94607",
        businessLocation: "{lat: 37.793228, lng: -122.392883}"
    },
    {
        type: "Hummus Platter",
        vegan: true,
        style: "Middle Eastern",
        description: "Hummus platter with pita chips",
        image: "https://loremflickr.com/320/240/appetizer?random=52",
        dateValid: new Date("12-13-2018"),
        business: "Arabian Nights Restaurant",
        businessAddress: "2345 Mission St, San Francisco, CA 94110",
        businessLocation: "{lat: 37.748470, lng: -122.418110}"
    },
    {
        type: "Chicken Wings",
        vegan: false,
        style: "American",
        description: "Bone-in Buffalo style hot wings",
        image: "https://loremflickr.com/320/240/appetizer?random=53",
        dateValid: new Date("12-13-2018"),
        business: "Original Buffalo Wings",
        businessAddress: "2499 Lombard Street, San Francisco CA 94123",
        businessLocation: "{lat: 37.798864, lng: -122.4424}"
    },
    {
        type: "Poke Nachos",
        vegan: false,
        style: "Buffalo",
        description: "Bone-in Buffalo style hot wings",
        image: "https://loremflickr.com/320/240/appetizer?random=54",
        dateValid: new Date("12-13-2018"),
        business: "Original Buffalo Wings",
        businessAddress: "2499 Lombard Street, San Francisco CA 94123",
        businessLocation: "{lat: 37.798864, lng: -122.4424}"
    },
    {
        type: "Sliders",
        vegan: false,
        style: "American",
        description: "Filet mignon sliders",
        image: "https://loremflickr.com/320/240/appetizer?random=55",
        dateValid: new Date("12-13-2018"),
        business: "Kincaid's Oakland",
        businessAddress: "1 Frannklin St, Oakland, CA 94607",
        businessLocation: "{lat: 37.793228, lng: -122.392883}"
    },
    {
        type: "Hummus Platter",
        vegan: true,
        style: "Middle Eastern",
        description: "Hummus platter with pita chips",
        image: "https://loremflickr.com/320/240/appetizer?random=56",
        dateValid: new Date("12-13-2018"),
        business: "Arabian Nights Restaurant",
        businessAddress: "2345 Mission St, San Francisco, CA 94110",
        businessLocation: "{lat: 37.748470, lng: -122.418110}"
    },
    {
        type: "Chicken Wings",
        vegan: false,
        style: "American",
        description: "Bone-in Buffalo style hot wings",
        image: "https://loremflickr.com/320/240/appetizer?random=57",
        dateValid: new Date("12-13-2018"),
        business: "Original Buffalo Wings",
        businessAddress: "2499 Lombard Street, San Francisco CA 94123",
        businessLocation: "{lat: 37.798864, lng: -122.4424}"
    },
    {
        type: "Poke Nachos",
        vegan: false,
        style: "Buffalo",
        description: "Bone-in Buffalo style hot wings",
        image: "https://loremflickr.com/320/240/appetizer?random=58",
        dateValid: new Date("12-13-2018"),
        business: "Original Buffalo Wings",
        businessAddress: "2499 Lombard Street, San Francisco CA 94123",
        businessLocation: "{lat: 37.798864, lng: -122.4424}"
    },
    {
        type: "Sliders",
        vegan: false,
        style: "American",
        description: "Filet mignon sliders",
        image: "https://loremflickr.com/320/240/appetizer?random=58",
        dateValid: new Date("12-13-2018"),
        business: "Kincaid's Oakland",
        businessAddress: "1 Frannklin St, Oakland, CA 94607",
        businessLocation: "{lat: 37.793228, lng: -122.392883}"
    },
    {
        type: "Hummus Platter",
        vegan: true,
        style: "Middle Eastern",
        description: "Hummus platter with pita chips",
        image: "https://loremflickr.com/320/240/appetizer?random=60",
        dateValid: new Date("12-13-2018"),
        business: "Arabian Nights Restaurant",
        businessAddress: "2345 Mission St, San Francisco, CA 94110",
        businessLocation: "{lat: 37.748470, lng: -122.418110}"
    },
    {
        type: "Chicken Wings",
        vegan: false,
        style: "American",
        description: "Bone-in Buffalo style hot wings",
        image: "https://loremflickr.com/320/240/appetizer?random=61",
        dateValid: new Date("12-13-2018"),
        business: "Original Buffalo Wings",
        businessAddress: "2499 Lombard Street, San Francisco CA 94123",
        businessLocation: "{lat: 37.798864, lng: -122.4424}"
    },
    {
        type: "Poke Nachos",
        vegan: false,
        style: "Buffalo",
        description: "Bone-in Buffalo style hot wings",
        image: "https://loremflickr.com/320/240/appetizer?random=62",
        dateValid: new Date("12-13-2018"),
        business: "Original Buffalo Wings",
        businessAddress: "2499 Lombard Street, San Francisco CA 94123",
        businessLocation: "{lat: 37.798864, lng: -122.4424}"
    },
    {
        type: "Sliders",
        vegan: false,
        style: "American",
        description: "Filet mignon sliders",
        image: "https://loremflickr.com/320/240/appetizer?random=63",
        dateValid: new Date("12-13-2018"),
        business: "Kincaid's Oakland",
        businessAddress: "1 Frannklin St, Oakland, CA 94607",
        businessLocation: "{lat: 37.793228, lng: -122.392883}"
    },
    {
        type: "Hummus Platter",
        vegan: true,
        style: "Middle Eastern",
        description: "Hummus platter with pita chips",
        image: "https://loremflickr.com/320/240/appetizer?random=4",
        dateValid: new Date("12-13-2018"),
        business: "Arabian Nights Restaurant",
        businessAddress: "2345 Mission St, San Francisco, CA 94110",
        businessLocation: "{lat: 37.748470, lng: -122.418110}"
    },
    {
        type: "Chicken Wings",
        vegan: false,
        style: "American",
        description: "Bone-in Buffalo style hot wings",
        image: "https://loremflickr.com/320/240/appetizer?random=64",
        dateValid: new Date("12-13-2018"),
        business: "Original Buffalo Wings",
        businessAddress: "2499 Lombard Street, San Francisco CA 94123",
        businessLocation: "{lat: 37.798864, lng: -122.4424}"
    },
    {
        type: "Poke Nachos",
        vegan: false,
        style: "Buffalo",
        description: "Bone-in Buffalo style hot wings",
        image: "https://loremflickr.com/320/240/appetizer?random=65",
        dateValid: new Date("12-13-2018"),
        business: "Original Buffalo Wings",
        businessAddress: "2499 Lombard Street, San Francisco CA 94123",
        businessLocation: "{lat: 37.798864, lng: -122.4424}"
    },
    {
        type: "Sliders",
        vegan: false,
        style: "American",
        description: "Filet mignon sliders",
        image: "https://loremflickr.com/320/240/appetizer?random=66",
        dateValid: new Date("12-13-2018"),
        business: "Kincaid's Oakland",
        businessAddress: "1 Frannklin St, Oakland, CA 94607",
        businessLocation: "{lat: 37.793228, lng: -122.392883}"
    },
    {
        type: "Hummus Platter",
        vegan: true,
        style: "Middle Eastern",
        description: "Hummus platter with pita chips",
        image: "https://loremflickr.com/320/240/appetizer?random=67",
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
        description: "5.8% ALC, Bitterness: 16 IBU",
        dateValid: new Date("12-13-2018"),
        business: "Rickhouse",
        businessAddress: "246 Kearny Street, San Francisco CA 94108",
        businessLocation: "{lat: 37.790499, lng: -122.403839}"
    },
    {
        type: "Beer",
        vegan: false,
        style: "Arrogant Bastard Ale",
        brand: "Arrogant Consortia",
        image: "https://loremflickr.com/320/240/beer",
        description: "7.20% ABV, Calories: 216",
        dateValid: new Date("12-13-2018"),
        business: "Rickhouse",
        businessAddress: "246 Kearny Street, San Francisco CA 94108",
        businessLocation: "{lat: 37.790499, lng: -122.403839}"
    },
    {
        type: "Wine",
        vegan: false,
        style: "California Red Blend",
        brand: "Daou Winery",
        image: "https://loremflickr.com/320/240/wine",
        description: "Petite Sirah, Tannat, Shiraz/Syrah, Zinfandel",
        dateValid: new Date("12-13-2018"),
        business: "Daou Winery",
        businessAddress: "2777 Hidden Mountain Road, Paso Robles, CA 93446",
        businessLocation: "{lat: 37.790499, lng: -122.403839}"
    },
    {
        type: "Beer",
        vegan: true,
        style: "Boont Amber Ale",
        brand: "Anderson Valley Brewing Company",
        image: "https://loremflickr.com/320/240/beer",
        description: "5.8% ALC, Bitterness: 16 IBU",
        dateValid: new Date("12-13-2018"),
        business: "Rickhouse",
        businessAddress: "246 Kearny Street, San Francisco CA 94108",
        businessLocation: "{lat: 37.790499, lng: -122.403839}"
    },
    {
        type: "Beer",
        vegan: false,
        style: "Arrogant Bastard Ale",
        brand: "Arrogant Consortia",
        image: "https://loremflickr.com/320/240/beer",
        description: "7.20% ABV, Calories: 216",
        dateValid: new Date("12-13-2018"),
        business: "Rickhouse",
        businessAddress: "246 Kearny Street, San Francisco CA 94108",
        businessLocation: "{lat: 37.790499, lng: -122.403839}"
    },
    {
        type: "Wine",
        vegan: false,
        style: "California Red Blend",
        brand: "Daou Winery",
        image: "https://loremflickr.com/320/240/wine",
        description: "Petite Sirah, Tannat, Shiraz/Syrah, Zinfandel",
        dateValid: new Date("12-13-2018"),
        business: "Daou Winery",
        businessAddress: "2777 Hidden Mountain Road, Paso Robles, CA 93446",
        businessLocation: "{lat: 37.790499, lng: -122.403839}"
    },
    {
        type: "Beer",
        vegan: true,
        style: "Boont Amber Ale",
        brand: "Anderson Valley Brewing Company",
        image: "https://loremflickr.com/320/240/beer",
        description: "5.8% ALC, Bitterness: 16 IBU",
        dateValid: new Date("12-13-2018"),
        business: "Rickhouse",
        businessAddress: "246 Kearny Street, San Francisco CA 94108",
        businessLocation: "{lat: 37.790499, lng: -122.403839}"
    },
    {
        type: "Beer",
        vegan: false,
        style: "Arrogant Bastard Ale",
        brand: "Arrogant Consortia",
        image: "https://loremflickr.com/320/240/beer",
        description: "7.20% ABV, Calories: 216",
        dateValid: new Date("12-13-2018"),
        business: "Rickhouse",
        businessAddress: "246 Kearny Street, San Francisco CA 94108",
        businessLocation: "{lat: 37.790499, lng: -122.403839}"
    },
    {
        type: "Wine",
        vegan: false,
        style: "California Red Blend",
        brand: "Daou Winery",
        image: "https://loremflickr.com/320/240/wine",
        description: "Petite Sirah, Tannat, Shiraz/Syrah, Zinfandel",
        dateValid: new Date("12-13-2018"),
        business: "Daou Winery",
        businessAddress: "2777 Hidden Mountain Road, Paso Robles, CA 93446",
        businessLocation: "{lat: 37.790499, lng: -122.403839}"
    },
    {
        type: "Beer",
        vegan: true,
        style: "Boont Amber Ale",
        brand: "Anderson Valley Brewing Company",
        image: "https://loremflickr.com/320/240/beer",
        description: "5.8% ALC, Bitterness: 16 IBU",
        dateValid: new Date("12-13-2018"),
        business: "Rickhouse",
        businessAddress: "246 Kearny Street, San Francisco CA 94108",
        businessLocation: "{lat: 37.790499, lng: -122.403839}"
    },
    {
        type: "Beer",
        vegan: false,
        style: "Arrogant Bastard Ale",
        brand: "Arrogant Consortia",
        image: "https://loremflickr.com/320/240/beer",
        description: "7.20% ABV, Calories: 216",
        dateValid: new Date("12-13-2018"),
        business: "Rickhouse",
        businessAddress: "246 Kearny Street, San Francisco CA 94108",
        businessLocation: "{lat: 37.790499, lng: -122.403839}"
    },
    {
        type: "Wine",
        vegan: false,
        style: "California Red Blend",
        brand: "Daou Winery",
        image: "https://loremflickr.com/320/240/wine",
        description: "Petite Sirah, Tannat, Shiraz/Syrah, Zinfandel",
        dateValid: new Date("12-13-2018"),
        business: "Daou Winery",
        businessAddress: "2777 Hidden Mountain Road, Paso Robles, CA 93446",
        businessLocation: "{lat: 37.790499, lng: -122.403839}"
    },
    {
        type: "Beer",
        vegan: true,
        style: "Boont Amber Ale",
        brand: "Anderson Valley Brewing Company",
        image: "https://loremflickr.com/320/240/beer",
        description: "5.8% ALC, Bitterness: 16 IBU",
        dateValid: new Date("12-13-2018"),
        business: "Rickhouse",
        businessAddress: "246 Kearny Street, San Francisco CA 94108",
        businessLocation: "{lat: 37.790499, lng: -122.403839}"
    },
    {
        type: "Beer",
        vegan: false,
        style: "Arrogant Bastard Ale",
        brand: "Arrogant Consortia",
        image: "https://loremflickr.com/320/240/beer",
        description: "7.20% ABV, Calories: 216",
        dateValid: new Date("12-13-2018"),
        business: "Rickhouse",
        businessAddress: "246 Kearny Street, San Francisco CA 94108",
        businessLocation: "{lat: 37.790499, lng: -122.403839}"
    },
    {
        type: "Wine",
        vegan: false,
        style: "California Red Blend",
        brand: "Daou Winery",
        image: "https://loremflickr.com/320/240/wine",
        description: "Petite Sirah, Tannat, Shiraz/Syrah, Zinfandel",
        dateValid: new Date("12-13-2018"),
        business: "Daou Winery",
        businessAddress: "2777 Hidden Mountain Road, Paso Robles, CA 93446",
        businessLocation: "{lat: 37.790499, lng: -122.403839}"
    },
    {
        type: "Beer",
        vegan: true,
        style: "Boont Amber Ale",
        brand: "Anderson Valley Brewing Company",
        image: "https://loremflickr.com/320/240/beer",
        description: "5.8% ALC, Bitterness: 16 IBU",
        dateValid: new Date("12-13-2018"),
        business: "Rickhouse",
        businessAddress: "246 Kearny Street, San Francisco CA 94108",
        businessLocation: "{lat: 37.790499, lng: -122.403839}"
    },
    {
        type: "Beer",
        vegan: false,
        style: "Arrogant Bastard Ale",
        brand: "Arrogant Consortia",
        image: "https://loremflickr.com/320/240/beer",
        description: "7.20% ABV, Calories: 216",
        dateValid: new Date("12-13-2018"),
        business: "Rickhouse",
        businessAddress: "246 Kearny Street, San Francisco CA 94108",
        businessLocation: "{lat: 37.790499, lng: -122.403839}"
    },
    {
        type: "Wine",
        vegan: false,
        style: "California Red Blend",
        brand: "Daou Winery",
        image: "https://loremflickr.com/320/240/wine",
        description: "Petite Sirah, Tannat, Shiraz/Syrah, Zinfandel",
        dateValid: new Date("12-13-2018"),
        business: "Daou Winery",
        businessAddress: "2777 Hidden Mountain Road, Paso Robles, CA 93446",
        businessLocation: "{lat: 37.790499, lng: -122.403839}"
    },
    {
        type: "Beer",
        vegan: true,
        style: "Boont Amber Ale",
        brand: "Anderson Valley Brewing Company",
        image: "https://loremflickr.com/320/240/beer",
        description: "5.8% ALC, Bitterness: 16 IBU",
        dateValid: new Date("12-13-2018"),
        business: "Rickhouse",
        businessAddress: "246 Kearny Street, San Francisco CA 94108",
        businessLocation: "{lat: 37.790499, lng: -122.403839}"
    },
    {
        type: "Beer",
        vegan: false,
        style: "Arrogant Bastard Ale",
        brand: "Arrogant Consortia",
        image: "https://loremflickr.com/320/240/beer",
        description: "7.20% ABV, Calories: 216",
        dateValid: new Date("12-13-2018"),
        business: "Rickhouse",
        businessAddress: "246 Kearny Street, San Francisco CA 94108",
        businessLocation: "{lat: 37.790499, lng: -122.403839}"
    },
    {
        type: "Wine",
        vegan: false,
        style: "California Red Blend",
        brand: "Daou Winery",
        image: "https://loremflickr.com/320/240/wine",
        description: "Petite Sirah, Tannat, Shiraz/Syrah, Zinfandel",
        dateValid: new Date("12-13-2018"),
        business: "Daou Winery",
        businessAddress: "2777 Hidden Mountain Road, Paso Robles, CA 93446",
        businessLocation: "{lat: 37.790499, lng: -122.403839}"
    },
    {
        type: "Beer",
        vegan: true,
        style: "Boont Amber Ale",
        brand: "Anderson Valley Brewing Company",
        image: "https://loremflickr.com/320/240/beer",
        description: "5.8% ALC, Bitterness: 16 IBU",
        dateValid: new Date("12-13-2018"),
        business: "Rickhouse",
        businessAddress: "246 Kearny Street, San Francisco CA 94108",
        businessLocation: "{lat: 37.790499, lng: -122.403839}"
    },
    {
        type: "Beer",
        vegan: false,
        style: "Arrogant Bastard Ale",
        brand: "Arrogant Consortia",
        image: "https://loremflickr.com/320/240/beer",
        description: "7.20% ABV, Calories: 216",
        dateValid: new Date("12-13-2018"),
        business: "Rickhouse",
        businessAddress: "246 Kearny Street, San Francisco CA 94108",
        businessLocation: "{lat: 37.790499, lng: -122.403839}"
    },
    {
        type: "Wine",
        vegan: false,
        style: "California Red Blend",
        brand: "Daou Winery",
        image: "https://loremflickr.com/320/240/wine",
        description: "Petite Sirah, Tannat, Shiraz/Syrah, Zinfandel",
        dateValid: new Date("12-13-2018"),
        business: "Daou Winery",
        businessAddress: "2777 Hidden Mountain Road, Paso Robles, CA 93446",
        businessLocation: "{lat: 37.790499, lng: -122.403839}"
    },
    {
        type: "Beer",
        vegan: true,
        style: "Boont Amber Ale",
        brand: "Anderson Valley Brewing Company",
        image: "https://loremflickr.com/320/240/beer",
        description: "5.8% ALC, Bitterness: 16 IBU",
        dateValid: new Date("12-13-2018"),
        business: "Rickhouse",
        businessAddress: "246 Kearny Street, San Francisco CA 94108",
        businessLocation: "{lat: 37.790499, lng: -122.403839}"
    },
    {
        type: "Beer",
        vegan: false,
        style: "Arrogant Bastard Ale",
        brand: "Arrogant Consortia",
        image: "https://loremflickr.com/320/240/beer",
        description: "7.20% ABV, Calories: 216",
        dateValid: new Date("12-13-2018"),
        business: "Rickhouse",
        businessAddress: "246 Kearny Street, San Francisco CA 94108",
        businessLocation: "{lat: 37.790499, lng: -122.403839}"
    },
    {
        type: "Wine",
        vegan: false,
        style: "California Red Blend",
        brand: "Daou Winery",
        image: "https://loremflickr.com/320/240/wine",
        description: "Petite Sirah, Tannat, Shiraz/Syrah, Zinfandel",
        dateValid: new Date("12-13-2018"),
        business: "Daou Winery",
        businessAddress: "2777 Hidden Mountain Road, Paso Robles, CA 93446",
        businessLocation: "{lat: 37.790499, lng: -122.403839}"
    },
    {
        type: "Beer",
        vegan: true,
        style: "Boont Amber Ale",
        brand: "Anderson Valley Brewing Company",
        image: "https://loremflickr.com/320/240/beer",
        description: "5.8% ALC, Bitterness: 16 IBU",
        dateValid: new Date("12-13-2018"),
        business: "Rickhouse",
        businessAddress: "246 Kearny Street, San Francisco CA 94108",
        businessLocation: "{lat: 37.790499, lng: -122.403839}"
    },
    {
        type: "Beer",
        vegan: false,
        style: "Arrogant Bastard Ale",
        brand: "Arrogant Consortia",
        image: "https://loremflickr.com/320/240/beer",
        description: "7.20% ABV, Calories: 216",
        dateValid: new Date("12-13-2018"),
        business: "Rickhouse",
        businessAddress: "246 Kearny Street, San Francisco CA 94108",
        businessLocation: "{lat: 37.790499, lng: -122.403839}"
    },
    {
        type: "Wine",
        vegan: false,
        style: "California Red Blend",
        brand: "Daou Winery",
        image: "https://loremflickr.com/320/240/wine",
        description: "Petite Sirah, Tannat, Shiraz/Syrah, Zinfandel",
        dateValid: new Date("12-13-2018"),
        business: "Daou Winery",
        businessAddress: "2777 Hidden Mountain Road, Paso Robles, CA 93446",
        businessLocation: "{lat: 37.790499, lng: -122.403839}"
    },
    {
        type: "Beer",
        vegan: true,
        style: "Boont Amber Ale",
        brand: "Anderson Valley Brewing Company",
        image: "https://loremflickr.com/320/240/beer",
        description: "5.8% ALC, Bitterness: 16 IBU",
        dateValid: new Date("12-13-2018"),
        business: "Rickhouse",
        businessAddress: "246 Kearny Street, San Francisco CA 94108",
        businessLocation: "{lat: 37.790499, lng: -122.403839}"
    },
    {
        type: "Beer",
        vegan: false,
        style: "Arrogant Bastard Ale",
        brand: "Arrogant Consortia",
        image: "https://loremflickr.com/320/240/beer",
        description: "7.20% ABV, Calories: 216",
        dateValid: new Date("12-13-2018"),
        business: "Rickhouse",
        businessAddress: "246 Kearny Street, San Francisco CA 94108",
        businessLocation: "{lat: 37.790499, lng: -122.403839}"
    },
    {
        type: "Wine",
        vegan: false,
        style: "California Red Blend",
        brand: "Daou Winery",
        image: "https://loremflickr.com/320/240/wine",
        description: "Petite Sirah, Tannat, Shiraz/Syrah, Zinfandel",
        dateValid: new Date("12-13-2018"),
        business: "Daou Winery",
        businessAddress: "2777 Hidden Mountain Road, Paso Robles, CA 93446",
        businessLocation: "{lat: 37.790499, lng: -122.403839}"
    },
    {
        type: "Beer",
        vegan: true,
        style: "Boont Amber Ale",
        brand: "Anderson Valley Brewing Company",
        image: "https://loremflickr.com/320/240/beer",
        description: "5.8% ALC, Bitterness: 16 IBU",
        dateValid: new Date("12-13-2018"),
        business: "Rickhouse",
        businessAddress: "246 Kearny Street, San Francisco CA 94108",
        businessLocation: "{lat: 37.790499, lng: -122.403839}"
    },
    {
        type: "Beer",
        vegan: false,
        style: "Arrogant Bastard Ale",
        brand: "Arrogant Consortia",
        image: "https://loremflickr.com/320/240/beer",
        description: "7.20% ABV, Calories: 216",
        dateValid: new Date("12-13-2018"),
        business: "Rickhouse",
        businessAddress: "246 Kearny Street, San Francisco CA 94108",
        businessLocation: "{lat: 37.790499, lng: -122.403839}"
    },
    {
        type: "Wine",
        vegan: false,
        style: "California Red Blend",
        brand: "Daou Winery",
        image: "https://loremflickr.com/320/240/wine",
        description: "Petite Sirah, Tannat, Shiraz/Syrah, Zinfandel",
        dateValid: new Date("12-13-2018"),
        business: "Daou Winery",
        businessAddress: "2777 Hidden Mountain Road, Paso Robles, CA 93446",
        businessLocation: "{lat: 37.790499, lng: -122.403839}"
    },
    {
        type: "Beer",
        vegan: true,
        style: "Boont Amber Ale",
        brand: "Anderson Valley Brewing Company",
        image: "https://loremflickr.com/320/240/beer",
        description: "5.8% ALC, Bitterness: 16 IBU",
        dateValid: new Date("12-13-2018"),
        business: "Rickhouse",
        businessAddress: "246 Kearny Street, San Francisco CA 94108",
        businessLocation: "{lat: 37.790499, lng: -122.403839}"
    },
    {
        type: "Beer",
        vegan: false,
        style: "Arrogant Bastard Ale",
        brand: "Arrogant Consortia",
        image: "https://loremflickr.com/320/240/beer",
        description: "7.20% ABV, Calories: 216",
        dateValid: new Date("12-13-2018"),
        business: "Rickhouse",
        businessAddress: "246 Kearny Street, San Francisco CA 94108",
        businessLocation: "{lat: 37.790499, lng: -122.403839}"
    },
    {
        type: "Wine",
        vegan: false,
        style: "California Red Blend",
        brand: "Daou Winery",
        image: "https://loremflickr.com/320/240/wine",
        description: "Petite Sirah, Tannat, Shiraz/Syrah, Zinfandel",
        dateValid: new Date("12-13-2018"),
        business: "Daou Winery",
        businessAddress: "2777 Hidden Mountain Road, Paso Robles, CA 93446",
        businessLocation: "{lat: 37.790499, lng: -122.403839}"
    },
    {
        type: "Beer",
        vegan: true,
        style: "Boont Amber Ale",
        brand: "Anderson Valley Brewing Company",
        image: "https://loremflickr.com/320/240/beer",
        description: "5.8% ALC, Bitterness: 16 IBU",
        dateValid: new Date("12-13-2018"),
        business: "Rickhouse",
        businessAddress: "246 Kearny Street, San Francisco CA 94108",
        businessLocation: "{lat: 37.790499, lng: -122.403839}"
    },
    {
        type: "Beer",
        vegan: false,
        style: "Arrogant Bastard Ale",
        brand: "Arrogant Consortia",
        image: "https://loremflickr.com/320/240/beer",
        description: "7.20% ABV, Calories: 216",
        dateValid: new Date("12-13-2018"),
        business: "Rickhouse",
        businessAddress: "246 Kearny Street, San Francisco CA 94108",
        businessLocation: "{lat: 37.790499, lng: -122.403839}"
    },
    {
        type: "Wine",
        vegan: false,
        style: "California Red Blend",
        brand: "Daou Winery",
        image: "https://loremflickr.com/320/240/wine",
        description: "Petite Sirah, Tannat, Shiraz/Syrah, Zinfandel",
        dateValid: new Date("12-13-2018"),
        business: "Daou Winery",
        businessAddress: "2777 Hidden Mountain Road, Paso Robles, CA 93446",
        businessLocation: "{lat: 37.790499, lng: -122.403839}"
    },
    {
        type: "Beer",
        vegan: true,
        style: "Boont Amber Ale",
        brand: "Anderson Valley Brewing Company",
        image: "https://loremflickr.com/320/240/beer",
        description: "5.8% ALC, Bitterness: 16 IBU",
        dateValid: new Date("12-13-2018"),
        business: "Rickhouse",
        businessAddress: "246 Kearny Street, San Francisco CA 94108",
        businessLocation: "{lat: 37.790499, lng: -122.403839}"
    },
    {
        type: "Beer",
        vegan: false,
        style: "Arrogant Bastard Ale",
        brand: "Arrogant Consortia",
        image: "https://loremflickr.com/320/240/beer",
        description: "7.20% ABV, Calories: 216",
        dateValid: new Date("12-13-2018"),
        business: "Rickhouse",
        businessAddress: "246 Kearny Street, San Francisco CA 94108",
        businessLocation: "{lat: 37.790499, lng: -122.403839}"
    },
    {
        type: "Wine",
        vegan: false,
        style: "California Red Blend",
        brand: "Daou Winery",
        image: "https://loremflickr.com/320/240/wine",
        description: "Petite Sirah, Tannat, Shiraz/Syrah, Zinfandel",
        dateValid: new Date("12-13-2018"),
        business: "Daou Winery",
        businessAddress: "2777 Hidden Mountain Road, Paso Robles, CA 93446",
        businessLocation: "{lat: 37.790499, lng: -122.403839}"
    },
    {
        type: "Beer",
        vegan: true,
        style: "Boont Amber Ale",
        brand: "Anderson Valley Brewing Company",
        image: "https://loremflickr.com/320/240/beer",
        description: "5.8% ALC, Bitterness: 16 IBU",
        dateValid: new Date("12-13-2018"),
        business: "Rickhouse",
        businessAddress: "246 Kearny Street, San Francisco CA 94108",
        businessLocation: "{lat: 37.790499, lng: -122.403839}"
    },
    {
        type: "Beer",
        vegan: false,
        style: "Arrogant Bastard Ale",
        brand: "Arrogant Consortia",
        image: "https://loremflickr.com/320/240/beer",
        description: "7.20% ABV, Calories: 216",
        dateValid: new Date("12-13-2018"),
        business: "Rickhouse",
        businessAddress: "246 Kearny Street, San Francisco CA 94108",
        businessLocation: "{lat: 37.790499, lng: -122.403839}"
    },
    {
        type: "Wine",
        vegan: false,
        style: "California Red Blend",
        brand: "Daou Winery",
        image: "https://loremflickr.com/320/240/wine",
        description: "Petite Sirah, Tannat, Shiraz/Syrah, Zinfandel",
        dateValid: new Date("12-13-2018"),
        business: "Daou Winery",
        businessAddress: "2777 Hidden Mountain Road, Paso Robles, CA 93446",
        businessLocation: "{lat: 37.790499, lng: -122.403839}"
    },
    {
        type: "Beer",
        vegan: true,
        style: "Boont Amber Ale",
        brand: "Anderson Valley Brewing Company",
        image: "https://loremflickr.com/320/240/beer",
        description: "5.8% ALC, Bitterness: 16 IBU",
        dateValid: new Date("12-13-2018"),
        business: "Rickhouse",
        businessAddress: "246 Kearny Street, San Francisco CA 94108",
        businessLocation: "{lat: 37.790499, lng: -122.403839}"
    },
    {
        type: "Beer",
        vegan: false,
        style: "Arrogant Bastard Ale",
        brand: "Arrogant Consortia",
        image: "https://loremflickr.com/320/240/beer",
        description: "7.20% ABV, Calories: 216",
        dateValid: new Date("12-13-2018"),
        business: "Rickhouse",
        businessAddress: "246 Kearny Street, San Francisco CA 94108",
        businessLocation: "{lat: 37.790499, lng: -122.403839}"
    },
    {
        type: "Wine",
        vegan: false,
        style: "California Red Blend",
        brand: "Daou Winery",
        image: "https://loremflickr.com/320/240/wine",
        description: "Petite Sirah, Tannat, Shiraz/Syrah, Zinfandel",
        dateValid: new Date("12-13-2018"),
        business: "Daou Winery",
        businessAddress: "2777 Hidden Mountain Road, Paso Robles, CA 93446",
        businessLocation: "{lat: 37.790499, lng: -122.403839}"
    },
    {
        type: "Cider",
        vegan: true,
        style: "Cider",
        brand: "California Cider Company",
        image: "https://loremflickr.com/320/240/apples",
        description: "5.0% ABV, Bitterness: None",
        dateValid: new Date("12-13-2018"),
        business: "Louie's Bar",
        businessAddress: "55 Stevenson St, San Francisco, CA 94105",
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



