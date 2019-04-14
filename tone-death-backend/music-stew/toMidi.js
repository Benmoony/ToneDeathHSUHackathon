var MidiWriter = require('midi-writer-js');

module.exports = {
    writeMIDI: function (notes, addToName){
        var track = new MidiWriter.Track();
        
        for(var i = 0; i < 8; i++){

        
        track.addEvent([
                    new MidiWriter.NoteEvent({pitch: [notes[i]], duration: '4'}),
            ], function(event, index) {
            return {sequential:true};
        }
        );
    }
        
        var write = new MidiWriter.Writer(track);
        write.saveMIDI('music' + addToName);
        console.log(write.dataUri())
    }
};