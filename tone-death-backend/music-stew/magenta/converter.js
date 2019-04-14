
var midiFileParser = require('midi-file-parser');
var MIDIUtils = require('midiutils');
var song = "../../../midi-files/rachmaninov_69253a_elegie_op_3_no_1_(nc)smythe.mid"

var file = require('fs').readFileSync(song, 'binary')
 
var midi = midiFileParser(file);
var notes = [];
var toAdd;
for(var i = 0; i < midi.tracks[1].length; i++){
    if(midi.tracks[1][i].subtype == 'controller'){
        continue;
    }
    if(midi.tracks[1][i].subtype == "noteOn"){
        toAdd = {pitch: MIDIUtils.noteNumberToName(midi.tracks[1][i].noteNumber), startTime: midi.tracks[1][i].deltaTime/2};
    }    
    if(midi.tracks[1][i].subtype == "noteOff"){
        toAdd.endTime = midi.tracks[1][i].deltaTime;
    }
    notes.push(toAdd);
}

console.log(notes)
