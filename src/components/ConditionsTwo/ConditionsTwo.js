import React from 'react';
import classes from './ConditionsTwo.module.css'
const ConditionsTwo = (props) => {
    // let humidity;
    return (
       <div className={classes.Wrapper}>
           {props.error && <small className={classes.Small}>Please enter a valid city.</small>}
           {props.loading && <div className={classes.Loader} />}
           {props.responseObj.cod === 200 ?
               <div>
                    {/* {humidity = props.responseObj.main.humidity} */}
                    {/* <p><strong>{props.responseObj.id}</strong></p> */}
                    <p><strong>{JSON.stringify(props.responseObj)}</strong></p>

               </div>
           : null
           }
       </div>
   )
}
export default ConditionsTwo;