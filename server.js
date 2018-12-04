//require express and other modules
const
    express = require('express'),
    app = express(),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    db = require('./models')
    // ctrl = require('./controllers')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//serve static files from public folder
app.use(express.static(__dirname + '/public'));

//HTML Endpoints
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

//Routes

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

// Endpoint functionality:
    // Full CRUD order


////////////// SHOW INDEX OF ORDERS /////////////////////////////
app.get('/api/orders', (req, res) => {
    db.Order.find({})
    .populate('user')
    .populate('drink')
    .populate('appetizer')
    .exec(function(err, allOrders){
        if(err) return console.log(err);
        res.json({'data': allOrders});
    })
});

////////////// UPDATE ORDER ////////////////
app.put('/api/orders/:id', (req,res) => {
    var orderId = req.params.id;
    var order = req.body;
    db.Order.findByIdAndUpdate({_id: orderId}, order, (err, updatedOrder) => {
        if (err) { 
            return console.log(err);
        }
        res.json(updatedOrder);
    })
});

////////////// DELETE ORDER //////////////////////////////////////
app.delete('/api/orders/:id', (req, res) => {
   var orderId = req.params.id;
    db.Order.findByIdAndDelete({_id: orderId}, (err, deletedOrder) => {
        if (err) {
            return console.log(err);
        }
        res.json(deletedOrder);
    })
});

//Server Start
app.listen(3000, () => {
    console.log("HTTP server listening at localhost:3000");
});