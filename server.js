// Include our packages in our main server file
var express = require('express');
app = express();
var mongoose = require('mongoose');
var port = 3000;

app.listen(port);
console.log('Your server is running on port ' + port + '.');
