(function(){
  var http = require('http');
  var send = require('send');
  var fs = require("fs");
  var server = http.createServer();

  server.on('request', function(req, res){
    send(req, req.url, {root: './'})
        .on('error', function(err){
            serveErrorFile(res, err.status, err.status + '.html');
        })
        .pipe(res);
   });
   server.listen(30000);
   console.log('server started on port 30000');

    function serveErrorFile(response, statusCode, file) {
        response.statusCode = statusCode;
        fs.readFile(file, function(err, data) {
            if (err) throw err;
            response.end(data);
        });
    }
})();
