import React from 'react';


const person = (props) => {
    return (
        <div>
             <p>I am {props.name} and {props.age} year old!</p>
             <p><b>{props.children}</b></p>
        </div>
       
    )
}
export default person;