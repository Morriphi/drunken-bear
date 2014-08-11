desc("default");
task("default", function(){
  console.log('hello world!');
});

desc("run app");
task("run", function(){
  var server = require('./server.js');
});

