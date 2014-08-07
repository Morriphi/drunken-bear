(function(){
  var http = require('http');
  var send = require('send');
  var server = http.createServer();
  server.on('request', function(req, res){
    send(req, req.url, {root: './'}).pipe(res);
   });
   server.listen(30000);
   console.log('server started on port 30000');
})();
