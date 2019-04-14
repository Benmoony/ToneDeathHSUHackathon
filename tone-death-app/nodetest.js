const fs = require('fs');
const path = require('path');
var midifiles = [];

fs.readdir('client/', function(err, files){
	if(err){
		return console.log('unable to scan directory: ' + err);
	}

	files.forEach(function (file){ 
		midifiles.push(file);
		
	});
	return(midifiles);
});

