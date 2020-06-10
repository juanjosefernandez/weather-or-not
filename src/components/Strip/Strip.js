import React from 'react';
import './Strip.css'

//ANOTHER COMMENT
const Strip = (props) => {
    let boolean = true;

    return(
        <div > 
            <container>
                <section className={props.whichStrip}>
                {/* <p className="temperature">Hi Temperature:</p> */}
                {/* where we use the data from the API call, only render it IF the API call has been successful */}
                {/* {props.safe ? 'safe' : 'unsafe'} */}
                {/* {props.safe ?  JSON.stringify(props.responseObj.daily[0].temp.day) : ""} */}
                {/* {props.safe ?  JSON.stringify(props.responseObj.daily[0].weather[0].description) : ""} */}

                {/* <p>{JSON.stringify(props.responseObj)}</p> */}
                {/* <p>Lo Temperature</p> */}
                {/* <p>Weather Conditions Description</p> */}
                <p>Day of the Week + Date</p>
                </section>
            </container>    
        </div>
    )
}
export default Strip;