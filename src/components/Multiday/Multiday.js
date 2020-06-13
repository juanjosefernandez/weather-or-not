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
    let [unicorn, setUnicorn] = useState(false);



       

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

        function pushCloud(e){
            e.preventDefault();
            console.log("printing ", e.target);
            setUnicorn(true);
        }
    

        return (
            <div>
               
                    <form onSubmit={getMultiDay}>
                        <input classname="citytext"
                            type="text"
                            placeholder="What CITY please?"
                            maxLength="50"
                            className={classes.textInput}
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            />
                            {/* <br></br> */}

                        <button id = "cloud" class={classes.Button} type="submit" onClick={pushCloud}>{unicorn ? "🦄":"Get Forecast"}</button>
                        <span class='shadow'></span>

                    </form>
                    {/* second cloud code below */}
                    {/* <div id = "cloud"><span class='shadow'></span></div> */}

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