import React from 'react';
//import './Person.css';
import styled from 'styled-components';

const StyledDiv = styled.div`
     width: 60%;
     margin: 12px auto;
     border-radius: 30px;
     box-shadow:  6px 6px 7px #111111,
                 -6px -6px 7px #2d2d2d;
     padding: 16px;
     text-align: center;

     @media (min-width: 500px){
         width: 450px;
     }`;

const person = (props) => {

    return (
        //<div className="Person" style={style}>
        <StyledDiv>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </StyledDiv>
    )
};

export default person;