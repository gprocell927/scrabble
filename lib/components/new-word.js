import React, { Component } from 'react';
import { render } from 'react-dom';

class NewWord extends Component {
  constructor(props){
    super(props);
  }

  render () {
    return (
      <div>
        <input
          className="inputField"
          placeholder="Enter a word"
          value={this.props.inputValue}
          onChange={(e) => this.props.handleChange(e.target.value)}
        />
      </div>
    );
  }
}

module.exports = NewWord;
