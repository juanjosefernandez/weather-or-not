import React from 'react';
import './Strip.css'

const Strip = (props) => {
    let boolean = true;

    return(
        <div > 
            <container>
                <section className={props.whichStrip}>
                <p>Hi Temperature:</p>
                {/* where we use the data from the API call, only render it IF the API call has been successful */}
                {props.loading ? 'Still loading' : 'Loaded'}
                {/* <p>{JSON.stringify(props.responseObj)}</p> */}
                <p>Lo Temperature</p>
                <p>Weather Conditions Description</p>
                <p>Day of the Week + Date</p>
                </section>
            </container>    
        </div>
    )
}
export default Strip;