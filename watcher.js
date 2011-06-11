var stalker = require('stalker');
var Notifo = require('notifo');

var notification = new Notifo({
    'username': ''
    , 'secret': ''
});

stalker.watch('../snaps/', function (err, file) {
	console.log('I saw a file. It was going like this: ' + file);
	notification.send({
	    'title': 'Front Door Activity',
	    'msg': 'Motion Detected at the front door'
	}, function(err, response) {
	    if (err) {
		console.log(err);
	    } else {
		console.log(response);
	    }
	});
});
