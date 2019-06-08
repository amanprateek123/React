import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
 state = {
   persons: [
     {name:"Aman", age:19},
     {name:"Vatan",age:18}
   ]
 }
 switchHandler = () => {
this.setState({
  persons: [
    {name:"Rishu", age:19},
    {name:"Laddu",age:18}
  ]
})
 }
  render() {
    return (
      <div className="App">
        <h1>Hi, I am React App!</h1>
        <p>It is working!!</p>
        <button onClick={this.switchHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My Hobbies:Coding</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
      </div>
    );
  }
}

export default App;
