import React from 'react';
import './UserOutput.css';

const userOutput = (props) =>{
    return (
      <div className="UserOutput">
          <p>Username: {props.username}</p>
          <p>Write a username</p>
      </div>
    );
}

export default userOutput;
