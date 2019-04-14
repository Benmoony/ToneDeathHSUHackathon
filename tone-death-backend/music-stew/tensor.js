
const tf = require('@tensorflow/tfjs');
var MIDIUtils = require('midiutils');

// Optional Load the binding:
// Use '@tensorflow/tfjs-node-gpu' if running with GPU.



//so we have the notes sorted, I can use this to check against the input. 
function toOutput(notes){
    return notes.sort(function(a, b){return a - b});
}
/*
const model = tf.sequential();

for(var j = 0; j < 10; j++){
    var notes = [];
    var notes2 = [];

for (var i = 0; i < 8; i++){
    
    var randNum = Math.floor(Math.random() * 127 )
    if(i < 4){
        var toAdd = randNum + 3;
        notes2.push(toAdd);
    }
    else{
        var toAdd = randNum + 1;
        notes2.push(toAdd);
    }

    var toAdd = randNum + 1;

    notes.push(toAdd);
    }  

    notes2 = toOutput(notes);

   

        //so now I need to test this

    //get random numbers from 0-127 
    // have them stored in array of 8 but have multiple of them. maybe. 
    
    const tens1 = tf.tensor(notes, [1,8], "int32");
    const tens2 = tf.tensor(notes2, [1,8], "int32");

    let hidden = tf.layers.dense({
        //units: number of neural nodes
        inputShape: [8],
        units: 1,
        activation: 'sigmoid'
    });

    let output = tf.layers.dense({
        units: 8,
        activation: 'softmax'
    });
    // Build and compile model.
    //model.add(tf.layers.dense({units: 1, inputShape: [1]}));

    model.add(hidden);
    model.add(output);

    const sgdOpt = tf.train.sgd(0.1);
    model.compile({optimizer: sgdOpt, loss: 'meanSquaredError'});

    const options ={
        epochs: 1000,
        validationData: 0.1,
        //shuffle: true
    };

    /*
    model.fit(tens1, tens2, options).then(results => {
        console.log(results)
    });

    model.fit(tens1, tens2, options).then(() => {
        var test = [27,1,8,13,86,3,127,5];

        var results = model.predict(tf.tensor2d(test, [1,8], "int32")).print();
    });

    //model.save('file://./');
    //tf.loadLayersModel('file://./model.json');
    
}
*/
var notes = [];
var notes2 = [];
for(var j = 0; j < 5; j++){


for (var i = 0; i < 8; i++){
    
    var randNum = Math.floor(Math.random() * 127 )
    if(i < 4){
        var toAdd = randNum + 3;
        notes2.push(toAdd);
    }
    else{
        var toAdd = randNum + 1;
        notes2.push(toAdd);
    }

    var toAdd = randNum + 1;

    notes.push(toAdd);
}  

    notes2 = toOutput(notes);

    var toMidi = require('./toMidi');
    toMidi.writeMIDI(notes2 , j);
}


