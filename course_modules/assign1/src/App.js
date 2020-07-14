import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


class App extends Component {
  state = {
    username: 'random username'
  }

  usernameChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <UserInput
          change={this.usernameChangeHandler}
          currName={this.state.username}/>
        <UserOutput username={this.state.username}/>
        <UserOutput username="test"/>
        <UserOutput username={"mltplNames"}/>
        <UserOutput username={this.state.username}/>
      </div>
    );
  }
}

export default App;
