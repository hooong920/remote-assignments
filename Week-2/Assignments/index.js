var express = require('express'); 
var app = express();
app.get('/', function(req, res) {
    res.send("<h1>Hello, My Server!</h1>");
});
app.get("/data", function(req, res) {
    res.send("<h1>Lack of Parameter</h1>");
});



app.get('/:data', function(req, res) {  

    console.log(req.params);
    console.log(req.query);

    var data = req.params.data;
    var num = req.query.number;  
    data = parseInt(data, 10);
    var sum = (data + 1)*data/2;
    res.send((num + 1)*num/2);  
});  

app.listen(3000, function() {
    console.log("listening on http://localhost:3000/");
});