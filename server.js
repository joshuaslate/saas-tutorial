// Include our packages in our main server file
var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var port = 3000;

app = express();

app.listen(port);
console.log('Your server is running on port ' + port + '.');