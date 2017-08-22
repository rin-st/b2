var express = require('express');
var app = express();
const requestIp = require('request-ip');

app.get("/", function (request, response) {
  var ip = requestIp.getClientIp(request);
  var lg = request.headers["accept-language"].split(',')[0];
  var sw = request.headers["user-agent"].split(/\(|\)/)[1];
  var obj = {
    "ipaddress" : ip,
    "language" : lg,
    "software" : sw
  }
   response.send(obj);
});
var listener = app.listen(process.env.PORT, function(){
  console.log('Your app is listening on port ' + listener.address().port);
});
