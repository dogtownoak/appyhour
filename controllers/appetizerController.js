const db = require('../models');

// Index Appetizers
module.exports = {
    index: (req, res) => {
    db.Appetizer.find({})    
        .exec(function(err, appetizer){
        if(err) return console.log("index error: " + err);
        res.json(appetizer);   
        })
    }
}