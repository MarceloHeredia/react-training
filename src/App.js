import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props =>  {

    const stateArr = useState({
        persons: [
            {name: 'Max', age: 28},
            {name: 'Marc', age:24},
            {name:'John', age:7}
        ],
        otherState: 'some other value'
    });
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
}

export default app;
/*
switchNameHandler = () => {
    this.setState({
        persons: [
            {name: 'Marcel', age: 28},
            {name: 'Marc', age:24},
            {name:'John', age:8}
        ]})
};
 */