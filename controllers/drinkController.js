const db = require('../models');

module.exports = {
    index: (req, res) => {
        db.Drink.find({})
        .exec(function(err, allDrinks){
            if(err) return console.log(err);
        res.json(allDrinks);
        })
    },
}