import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Checkbox from "./Checkbox";
import axios from 'axios'

//The array of options for the checkbox to select which files
//You are sending to Magenta.js
//var OPTIONS= ["Test", "Test2", "Test3"];
const input_numbers = {};
var num_clicks = 0;

class App extends Component {

  componentDidMount(){
    axios.get(`http://localhost:8080/api`)
      .then(res => {
        //alert(res.data.message);
    })

    
  }
  
  getCursor(e) {
    var x = e.screenX;
    var y = e.screenY;
    var choice = Math.floor(Math.random() * 2) + 1;

    if(choice == 1){
      //in the future replace with using x and y to generate the random numbers between 1 and 125
      var rand = Math.floor(Math.random() * 127) + 1;
    }

    if(choice == 2){
      var rand = Math.floor(Math.random() * 127) + 1;
    }
    
    //alert(rand);
    input_numbers[num_clicks] = rand;
    num_clicks++;
  }

  sendNumbers(e){
    //This function sends numbers to a text file to the server for the tenser flow application to parse
    //alert("sent numbers: " + input_numbers);

    axios.post(`http://localhost:8080/api/post`, input_numbers)
      .then(res => {
        alert("post data: " + res.data);
    })
  }

  numClicksGet(){
    //would populate the p tag with the number of times the person would have clicked the buttons, preventing anymore clicks after 8
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Team Tone Death HSU Hackathon Application
          </p>
        </header>
        <body>
        <h1>Click 8 Times to Generate an Arpeggio</h1>
        <div class="btn-holder">
          <div class="btn-row">
            <button class="power" onClick={this.getCursor.bind(this)} id="btn-1"></button>
            <button class="power" onClick={this.getCursor.bind(this)}  id="btn-2"></button>
            <button class="power" onClick={this.getCursor.bind(this)}  id="btn-3"></button>
            <button class="power" onClick={this.getCursor.bind(this)}  id="btn-4"></button>
          </div>
          <div class="btn-row-2">
            <button class="power" onClick={this.getCursor.bind(this)}  id="btn-5"></button>
            <button class="power" onClick={this.getCursor.bind(this)}  id="btn-6"></button>
            <button class="power" onClick={this.getCursor.bind(this)}  id="btn-7"></button>
            <button class="power" onClick={this.getCursor.bind(this)}  id="btn-8"></button>
          </div>
          <div class="btn-row-3">
            <button class="power" onClick={this.getCursor.bind(this)} id="btn-9"></button>
            <button class="power" onClick={this.getCursor.bind(this)} id="btn-10"></button>
            <button class="power" onClick={this.getCursor.bind(this)} id="btn-11"></button>
            <button class="power" onClick={this.getCursor.bind(this)} id="btn-12"></button>
          </div>
          <div class="btn-row-3">
            <button class="power" onClick={this.getCursor.bind(this)} id="btn-13"></button>
            <button class="power" onClick={this.getCursor.bind(this)}id="btn-14"></button>
            <button class="power" onClick={this.getCursor.bind(this)} id="btn-15"></button>
            <button class="power" onClick={this.getCursor.bind(this)} id="btn-16"></button>
          </div>
          <p class="num-counter" dangerouslySetInnerHTML={this.numClicksGet()}></p>
          <button onClick={this.sendNumbers}>Submit</button>
          <p id="numbers"></p>
        </div>
        </body>
        <footer>
          <p>Developed By Benjamin Miller, Zach Pole, Levi Pole</p>
          <p>Lumber Hacks 2019</p>
        </footer>
      </div>
    );
  }
}

export default App;
