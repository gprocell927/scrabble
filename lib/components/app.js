import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NewWord from './components/new-word.js'

class Application extends Component {
  constructor() {
    super();
    this.state = {
      word: '',
    };
  }

  scoreWord(word) {
  // map and sum values of word
  // return score
  }

  render() {
    return (
       <div>
          <header>
            <h2>Srabble Scorer</h2>
            <NewWord
              inputValue={this.state.inputValue}
              handleChange={() => this.handleChange()}
            />
          </header>
      </div>
    );
  }
}

module.exports = Application;
