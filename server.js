var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 4000;

// ========== Telling Express to body parse our data ========== // 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ========== Routing ========== // 

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

// ========== Starts the Server to make sure it's listening ========== //

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  