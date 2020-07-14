import React from 'react';

const userInput = (props) => {
    const style = {
        backgroundColor: '#1f1f1f',
        font: 'inherit',
        color: 'white',
        borderRadius: '32px',
        boxShadow: 'inset 5px 5px 6px #0e0e0e, inset -5px -5px 6px #303030',
        padding: '8px',
        border: '0px'
    }
    return (
      <div className="UserInput">
          <p>Enter Username</p>
          <input 
            style={style}
            type="text"
            onChange={props.change}
            value={props.currName} ></input>
      </div>
    );
}

export default userInput;
