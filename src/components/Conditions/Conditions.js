import React from 'react';
import Strip from '../Strip/Strip';
import classes from './Conditions.module.css'
const Conditions = (props) => {
    // let dayOneData = props.responseObj.list[0];
    // let dayTwoData;
    // let dayThreeData;
    // let dayFourData;
    // let dayFiveData;

    return (
       <div className={classes.Wrapper}>
        {/* <Strip className="StripOne" day={responseObj.daily[0]}/>  */}
        {/* <Strip whichStrip="StripOne" data = {dayOneData}/>  */}
        <Strip whichStrip="StripOne"/> 
        <Strip whichStrip="StripTwo"/> 
        <Strip whichStrip="StripThree"/> 
        <Strip whichStrip="StripFour"/> 
        <Strip whichStrip="StripFive"/> 

           {/* {props.error && <small className={classes.Small}>Please enter a valid city.</small>}
           {props.loading && <div className={classes.Loader} />}
           {props.responseObj.cod === 200 ?
               <div>
                    {/* {humidity = props.responseObj.main.humidity} */}
                    {/* <p><strong>{props.responseObj.id}</strong></p> */}
                    {/* <p><strong>{JSON.stringify(props.responseObj)}</strong></p> */}
           
               {/* </div> */}
        {/* //    : null */}
           {/* }  */}
       </div>
   )
}
export default Conditions;