var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', function (req, res){
    res.sendFile('index.html', {root: 'C:/Users/m/Documents/homepage'});
});

app.post('/submit-data', function (req, res) {
    var name = req.body.firstName + ' ' + req.body.lastName;
    res.send(name);
});

app.put('/update-data', function (req, res) {
    res.send('PUT request');
});

app.delete('/delete-data', function () {
    res.send('DELETE request');
})

var server = app.listen(5000, function() {
    console.log("Yep, it's alive!");
})
