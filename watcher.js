var stalker = require('stalker');
var Notifo = require('notifo');
var express = require('express');
var settings = require('./settings');
var app = express.createServer();

var notification = new Notifo({
    'username': settings.notifo.username, 
    'secret': settings.notifo.secret
});

stalker.watch(settings.monitorFolder, {buffer: 5000}, function(err, files) { 
	var lastFileIndex = files.length - 1;
        var filePath  = files[lastFileIndex].split('/');
	var fileName = filePath[filePath.length - 1];
	console.log('I saw a file. It was going like this: ' + fileName);
	notification.send({
	    'title': 'Front Door Activity',
	    'msg': 'Motion Detected at the front door',
	    'uri': settings.serverURL + fileName
	}, function(err, response) {
	    if (err) {
		console.log(err);
	    } else {
		console.log(response);
	    }
	});

});

app.get('/:snapName', function(req, res){
    res.sendfile(settings.monitorFolder+req.params.snapName);
});

app.listen(3000);
