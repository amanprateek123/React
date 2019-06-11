import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import person from './Person/Person';

class App extends Component {
 state = {
   persons: [
     {name:"Aman", age:19},
     {name:"Vatan",age:18}
   ],
   showPerson:false
 }
 switchHandler = () => {
this.setState({
  persons: [
    {name: "Rishu", age:19},
    {name:"Laddu",age:18}
  ]
})
 }

 changeHandler = (event) => {
  this.setState({
    persons: [
      {name: event.target.value, age:19},
      {name:"Laddu",age:18}
    ]
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
         {this.state.persons.map(person => {
           return <Person
            name={person.name} age={person.age}/>
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
