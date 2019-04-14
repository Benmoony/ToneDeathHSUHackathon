const tf = require('@tensorflow/tfjs');
var MIDIUtils = require('midiutils');

// Optional Load the binding:
// Use '@tensorflow/tfjs-node-gpu' if running with GPU.


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

const shape = [8][1];
const tens1 = tf.tensor(notes, shape);
const tens2 = tf.tensor(notes2, shape);

//const model = tf.sequential();

let hidden = tf.layers.dense({
    units: 1,
    activation: 'sigmoid',
    inputDim: 1
});
let output = tf.layers.dense({
    units: 1,
    activation: 'softmax',
    inputDim: 1
});
// Build and compile model.
//model.add(tf.layers.dense({units: 1, inputShape: [1]}));

model.add(hidden);
model.add(output);
const sgdOpt = tf.train.sgd(0.1);
model.compile({optimizer: sgdOpt, loss: 'meanSquaredError'});

const options ={
    epochs: 100,
    validationData: 0.1,
    shuffle: true
};

/*
model.fit(tens1, tens2, options).then(results => {
    console.log(results)
});
*/

model.fit(tens1, tens2, options);

}
model.predict(tf.tensor2d([notes], [8, 1])).print();


