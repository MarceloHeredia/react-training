import React from 'react';


const validation = (props) => {
    let boxStyle = {
      backgroundColor: '#1f1f1f',
      font: 'inherit',
      color: 'white',
      borderRadius: '32px',
      boxShadow: 'inset 5px 5px 6px #0e0e0e, inset -5px -5px 6px #303030',
      padding: '5px',
      border: '0px'
  }
    let parag;

    if (props.len < 7){
        boxStyle.backgroundColor = 'red'
        parag = <p >Text too short</p>
    }
    else{
        boxStyle.backgroundColor = 'green'
        parag = <p >Text long enough</p>
    }
    return (
        <div style={boxStyle}>
            {parag}
        </div>
    )
};
                                                
export default validation;