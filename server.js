#! /usr/local/bin/env node
var http = require('http'),
	flights = require('./data'),
	db = require('./db'),
    repl = require('repl'),
    argv =  require('optimist').argv,
	app = require('./app')(flights, db);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

var prompt = repl.start({prompt: "flights>"});
//prompt.context.data = flights;

if (argv.flight && argv.destination) {
    flights[argv.flight].data.destination = argv.destination;
}

