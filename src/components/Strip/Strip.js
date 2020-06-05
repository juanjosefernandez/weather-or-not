import React from 'react';
import './Strip.css'

const Strip = (props) => {

    return(
        <div > 
            <container>
                <p className={props.whichStrip}>Hi Temperature</p>
                <p>Lo Temperature</p>
                <p>Weather Conditions Description</p>
                <p>Day of the Week + Date</p>
            </container>    
        </div>
    )
}
export default Strip;