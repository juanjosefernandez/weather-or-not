import React from 'react';
import './Strip.css'

const Strip = (props) => {
    let iconId = "";
    if (props.safe){
        iconId = props.responseObj.daily[props.day].weather[0].icon;
    }
    return(
        <div > 
            <container>
                <section className={props.whichStrip}>
                {/* <p>Hi Temperature, Lo Temp, Description, Day of week and date:</p> */}
                {/* where we use the data from the API call, only render it IF the API call has been successful */}
                {/* <p>Safe/Unsafe: {props.safe ? 'safe' : 'unsafe'} </p> */}
                <p>Lo: {props.safe ?  JSON.stringify(props.responseObj.daily[props.day].temp.min) + "°F" : ""}  Hi: {props.safe ?  JSON.stringify(props.responseObj.daily[props.day].temp.max) + "°F"  : ""}</p>
               
                {/* <p>Main Description: {props.safe ?  JSON.stringify(props.responseObj.daily[props.day].weather[0].main) : ""}</p> */}
                <p>suprise! : {props.safe ?  JSON.stringify(props.responseObj.daily[props.day].weather[0].description) : ""}</p>
                {/* <p>Icon ID: {iconId}</p> */}
                <img src={"http://openweathermap.org/img/wn/"+ iconId + "@2x.png"}></img>
                {/* {props.safe ?  JSON.stringify(props.responseObj.daily[props.day].weather[0].icon) : ""} */}
                
                </section>
            </container>    
        </div>
    )
}
export default Strip;