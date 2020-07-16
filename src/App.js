import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {id:'1', name: 'Max', age: 28},
            {id:'2', name: 'Marc', age:24},
            {id:'3', name:'John', age:7}
        ],
        otherState: 'some other value',
        showPersons: false
    };

    deletePersonHandler = (personIndex) =>{
        //const persons = this.state.persons.slice(); //slice without args makes a copy
        const persons = [...this.state.persons]; //copy using next-gen
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    };

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons});
    };
    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    render() {
        const style = {
            backgroundColor: '#1f1f1f',
            font: 'inherit',
            color: 'white',
            borderRadius: '30px',
            boxShadow:  '6px 6px 7px #111111, -6px -6px 7px #2d2d2d',
            padding: '8px',
            cursor: 'pointer',
        }

        let persons = null;

        if (this.state.showPersons){
            persons = (
                <div>
                    {this.state.persons.map((person, index )=> {
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            changed={(event) => this.nameChangedHandler(event, person.id)}
                        />
                    })}
                </div>
            );
        }

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>Switch Name</button>
                {persons}
            </div>
        );
    }
}
export default App;