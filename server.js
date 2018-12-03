//require express and other modules
const
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    db = require('./models')
    // ctrl = require('./controllers')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

//serve static files from public folder
app.use(express.static(__dirname + '/public'));

//HTML Endpoints
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

//Routes


//Server Start
app.listen(3000, () => {
    console.log("HTTP server listening at localhost:3000");
});