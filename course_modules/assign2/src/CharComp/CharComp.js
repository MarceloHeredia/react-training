import React from 'react';


const charComp = (props) => {
    const boxStyle = {
        display: 'inline-block',
        font: 'inherit',
        color: 'white',
        borderRadius: '50%',
        margin: '16px',
        textAlign: 'center',
        background: 'linear-gradient(145deg, #1c1c1c, #212121)',
        boxShadow: '5px 5px 7px #101010, -5px -5px 7px #2f2f2f',
        padding: '10px',
        border: '0px',
        whiteSpace: 'pre',
        cursor: 'pointer'
    }
    return (
        <div style={boxStyle} onClick={props.clicked}>{props.letter}</div>
    )
};

export default charComp;