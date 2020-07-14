import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name: 'Max', age: 28},
            {name: 'Marc', age:24},
            {name:'John', age:7}
        ],
        otherState: 'some other value'
    };

    switchNameHandler = (newName) => {
            this.setState({
                persons: [
                    {name: newName, age: 28},
                    {name: 'Marc', age:24},
                    {name:'John', age:8}
                ]
            });
    };
    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Max', age: 28},
                {name: event.target.value, age:24},
                {name:'John', age:7}
            ]
        });
    };
    render() {
        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                <button onClick={() => this.switchNameHandler('mMarcel')}>Switch Name</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}/>
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this, 'Okorororo')}
                    changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}/>
            </div>
        );
    }
}
export default App;