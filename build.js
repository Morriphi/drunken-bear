desc("default");
task("default", function(){
  console.log('hello world!');
  return 1;
});

desc("run app");
task("run", function(){
  var server = require('./server.js');
});

