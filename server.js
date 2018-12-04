//require express and other modules
const
    express = require('express'),
    app = express(),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    db = require('./models')
    ctrl = require('./controllers')

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

//Index
app.get('/api/orders', ctrl.order.index);

//Create
app.post('/api/orders', ctrl.order.create);

//Update
app.put('/api/orders/:id', ctrl.order.update);

//Delete
app.delete('/api/orders/:id', ctrl.order.delete);


//Server Start
app.listen(3000, () => {
    console.log("HTTP server listening at localhost:3000");
});