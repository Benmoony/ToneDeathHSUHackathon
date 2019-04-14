import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Checkbox from "./Checkbox";
import axios from 'axios'

//The array of options for the checkbox to select which files
//You are sending to Magenta.js
var OPTIONS= ["Test", "Test2", "Test3"];

class App extends Component {

  componentDidMount(){
    /*axios.get(`http://localhost:8080/api`)
      .then(res => {
        OPTIONS.push(res.data.message);
      })*/
  }
  //sets the state of all checkboxes to false
  state = {
    checkboxes: OPTIONS.reduce(
      (options, option) => ({
        ...options,
        [option]: false
      }),
      {}
    )
  };

  selectAllCheckboxes = isSelected => {
    Object.keys(this.state.checkboxes).forEach(checkbox => {
      this.setState(prevState => ({
        checkboxes: {
          ...prevState.checkboxes,
          [checkbox]: isSelected
        }
      }));
    });
  };

  selectAll = () => this.selectAllCheckboxes(true);

  deselectAll = () => this.selectAllCheckboxes(false);

  handleCheckboxChange = changeEvent => {
    const { name } = changeEvent.target;

    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
    }));
  };

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    Object.keys(this.state.checkboxes)
      .filter(checkbox => this.state.checkboxes[checkbox])
      .forEach(checkbox => {
        alert(checkbox, "is selected.");
      });
  };

  createCheckbox = option => (
    <Checkbox label={option}
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option}
    />
  );

  fetchMidi(){
  }

  

  //creates checkboxes
  createCheckboxes = () => OPTIONS.map(this.createCheckbox);

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            This is the start of the Team Tone Death HSU Hackathon Application
          </p>
          <p>Lets Get Building!</p>
        </header>
        <body>
          <div class="form-container">
            <form onSubmit={this.handleFormSubmit}>
              {this.createCheckboxes()}
              <div className="form-group mt-2">
                <button type="button" onClick={this.selectAll}>
                  Select All
                </button>
                <button type="button" onClick={this.deselectAll}>
                  Deselect All
                </button>
                <button type="submit">
                  Submit
                </button>
              </div>
            </form>
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
