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
        {/* prints out the contents of responseObj to help us see if it is null or not */}
        <Strip whichStrip="StripOne" responseObj={props.responseObj} safe={props.safe} loading={props.loading} day={0}/> 
        <Strip whichStrip="StripTwo" responseObj={props.responseObj} safe={props.safe} loading={props.loading} day={1}/> 
        <Strip whichStrip="StripThree" responseObj={props.responseObj} safe={props.safe} loading={props.loading} day={2}/> 
        <Strip whichStrip="StripFour" responseObj={props.responseObj} safe={props.safe} loading={props.loading} day={3}/> 
        <Strip whichStrip="StripFive" responseObj={props.responseObj} safe={props.safe} loading={props.loading} day={4}/> 

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