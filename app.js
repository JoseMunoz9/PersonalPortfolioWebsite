var express = require("express");
var path = require("path");

var routes = require("./routes");

var app = express();

app.set("port", process.env.PORT || 3000);

app.use(routes);

app.listen(app.get("port"), function(){
    consnole.log("Server started on port " + app.get("port"));
});