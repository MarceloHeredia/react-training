import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import CharComp from './CharComp/CharComp.js';

class App extends Component {

  state = {
    text: 'some text',
    txLen: 9
  };

  textChangeHandler = (event) => {
    const newText = event.target.value;
    const newLen = newText.length;
    this.setState({ text: newText, txLen: newLen });
  };

  deleteLetterHandler = (index) => {
    let letters = [...this.state.text]; //copy using next-gen
    letters.splice(index, 1);
    this.setState({ text: letters.join(''), txLen: letters.length });
  };

  render() {

    const boxStyle = {
      backgroundColor: '#1f1f1f',
      font: 'inherit',
      color: 'white',
      borderRadius: '32px',
      boxShadow: 'inset 5px 5px 6px #0e0e0e, inset -5px -5px 6px #303030',
      padding: '8px',
      border: '0px'
    }
    let letters = (
      <div>
        {
          this.state.text.split('').map((letter, index) => {
            return <CharComp
              clicked={() => this.deleteLetterHandler(index)}
              letter={letter}
              key={index}
            />
          })
        }
      </div>
    );
    return (
      <div className="App">
        <p className="ttl">Type some text :)</p>
        <input
          style={boxStyle}
          type="text"
          onChange={(event) => this.textChangeHandler(event)}
          value={this.state.text}
        />
        <p style={boxStyle}>text size(with spaces): {this.state.txLen}</p>
        <Validation len={this.state.txLen} />
        {letters}
      </div>
    );
  }
}

export default App;