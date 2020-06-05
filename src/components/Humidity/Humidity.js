import React from 'react';
// import classes from './Conditions.module.css'
const humidity = (props) => {
    let message = "";
    if (props.value > 60){
        message = "wow it's muggy."
    }
    else{
        message = "nice! It's a fresh one."
    }
    return (
       <div>
            <p>The humidity is currently at {props.value}%. {message}</p>    
       </div>
   )
}
export default humidity;