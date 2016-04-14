var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());


var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/topic_db');

var userModel = require("./public/server/models/user.model.js")(app, mongoose);
require("./public/server/services/user.service.server.js")(app, userModel);

var articleModel = require("./public/server/models/article.model.js")(app, mongoose);
require("./public/server/services/article.service.server.js")(app, articleModel);

app.get('/', function(req, res){
    res.redirect("/client/index.html");
});


app.listen(port, ipaddress);

