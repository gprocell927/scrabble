import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NewWord from './new-word.js'

class Application extends Component {
  constructor() {
    super();
    this.state = {
      word: '',
      inputValue: '',
    };
  }

  scoreWord(word) {
  // map and sum values of word
  // return score
  }

  handleChange(inputValue) {
    this.setState({ inputValue });
  }

  render() {
    return (
       <div>
          <header>
            <h2>Srabble Scorer</h2>
            <input
              className="inputField"
              value={this.state.inputValue}
              onChange={(e) => this.handleChange(e.target.value)}
            />
          </header>
      </div>
    );
  }
}

module.exports = Application;
