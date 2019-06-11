import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import person from './Person/Person';

class App extends Component {
 state = {
   persons: [
     {id:1, name:"Aman", age:19},
     {id:2, name:"Vatan",age:18}
   ],
   showPerson:false
 }
 
 deleteHandler = (personIndex) => {
 let persons = this.state.persons.slice();
 persons.splice(personIndex,1);
 this.setState({persons: persons});
 }

 changeHandler = (event,id) => {
const personIndex = this.state.persons.findIndex(p => {
  return p.id===id;
}) 
const person = {
  ...this.state.persons[personIndex]
}
person.name= event.target.value;
const persons = [...this.state.persons]
persons[personIndex]=person;
  this.setState({
    persons: persons
  })
 }

 toggleHandler = () => {
   const doesShow = this.state.showPerson;
   this.setState({showPerson: !doesShow});
 }
  render() {
const style = {
padding: '8px',
backgroundColor: 'white',
border: '1px solid blue',
cursor: 'pointer'
}
  let persons = null;
  if(this.state.showPerson===true)
  {
    persons=( <div>
         {this.state.persons.map((person,index) => {
           return <Person
           click={this.deleteHandler.bind(this,index)}
            name={person.name} age={person.age} key={person.id}
            changed={(event) => this.changeHandler(event,person.id)}/>
         })}
    </div> )
  }
   
    return (
      <div className="App">
        <h1>Hi, I am React App!</h1>
        <p>It is working!!</p>
        <button style={style} onClick={this.toggleHandler}>Toggle Person</button>
        {persons}
      </div>
    );
  }
}

export default App;
