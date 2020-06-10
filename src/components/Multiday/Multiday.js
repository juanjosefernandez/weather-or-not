import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions';
import classes from './Multiday.module.css';

const Multiday = () => {

    let [city, setCity] = useState('');
    // let [unit, setUnit] = useState('imperial');
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);
    // const uriEncodedCity = encodeURIComponent(city);
    let [responseObj, setResponseObj] = useState({});
    let [safe, setSafe] = useState(false);


       

    function getMultiDay(e) {

        // function weatherBalloon( cityID ) {
        //     var key = '{yourkey}';
        //     fetch('https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=minutely,hourly&units=imperial&appid=de21f1eaf5bf29f1eb059f7f97f70b23')  
        //     .then(function(resp) { return resp.json() }) // Convert data to json
        //     .then(function(data) {
        //     console.log("weatherballoon:", JSON.stringify(data.current.temp));
        //     })
        //     .catch(function() {
        //     // catch any errors
        //     });
        // }
        // weatherBalloon( 6167865 );
        
        e.preventDefault();
        // Clear state in preparation for new data
        setError(false);
        setResponseObj({});
       
        setLoading(true);
        let uriEncodedCity = encodeURIComponent(city);
        
        fetch('https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=minutely,hourly&units=imperial&appid=de21f1eaf5bf29f1eb059f7f97f70b23')
        .then(response => response.json()
         )
        // .then(function(resp) { return resp.json() }) // Convert data to json
        .then(response => {  
            setResponseObj(response);
            setLoading(false);
            setSafe(true);
        })  
        .then(function(data) {
            console.log("weatherballoon:", JSON.stringify(data.current.temp));

            })
            .catch(function() {
            });


        }

        function setLatitudeLongitude(city){
            //sets latitude based on city
            // sets longitude based on city
            return; 
        }
    

        return (
            <div>
                <h2>Find Current Weather Conditions</h2>
                    <form onSubmit={getMultiDay}>
                        <input
                            type="text"
                            placeholder="Enter City"
                            maxLength="50"
                            className={classes.textInput}
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            />
                            <br></br>

                        <button className={classes.Button} type="submit">Get Forecast</button>

                    </form>

             <Conditions
                responseObj={responseObj}
                error={error} //new
                loading={loading} //new
                safe={safe}
                />

            </div>
        )
}

export default Multiday;