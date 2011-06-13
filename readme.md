Butler is meant to serve and 
notify me when someone is at
the front door.

It watches the snaps folder
which gets a new file
added when ever motion is
detected at the front door.

This might one day watch
the cam directly

The settings file for the app needs to look like so :

var settings = {
	notifo : {
	    'username': '', 
	    'secret': ''
	},
	severURL: '',
	monitorFolder: ''
}

Save it as settings.js, keep in mind that it will 
not be commited or changed
