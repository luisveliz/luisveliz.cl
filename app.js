var express  = require("express"),
    app      = express(),
    http     = require("http"),
    server   = http.createServer(app);

/*var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    //next();
}*/


/*
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });*/





app.configure(function () {
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  //app.use(allowCrossDomain);
});


app.get('/', function(req, res) {
  res.send("Hello world! I'm Luis Veliz");
});


server.listen(3001, function() {
  console.log("Node server running on http://localhost:3001");
});