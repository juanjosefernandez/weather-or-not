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


    function pushCloud(e){
        e.preventDefault();
        console.log("printing ", e.target);
        setUnicorn(true);
    }

    function getWeather(e){
            e.preventDefault();
            console.log("CITY UPON BUTTON PRESS: ", city);
            // Clear state in preparation for new data
            setError(false);

            console.log("in getWeather")
            setResponseObj({});
            setLoading(true);
            setSafe(false);

            var post;

            // Call the mapbox API
            fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=pk.eyJ1IjoianVhbmpvc2VmZXJuYW5kZXoiLCJhIjoiY2tiaTRyNWM4MGJ1NTJ5bWx2Yzd5a3E3eSJ9.3nNSmXu7AqLrHF-MAepd-A`).then(function (response) {
                if (response.ok) {
                    setLoading(false);
                    return response.json();
                } else {
                    return Promise.reject(response);
                }
            }).then(function (mapBoxData) {

                // Store the post data to a variable
                
                // responseObj = data;

                // Call the openweatherAPI
                return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${mapBoxData.features[0].center[1]}&lon=${mapBoxData.features[0].center[0]}&exclude=minutely,hourly&units=imperial&appid=de21f1eaf5bf29f1eb059f7f97f70b23`);

            }).then(function (response) {
                if (response.ok) {
                    return response.json();
                } else {
                    return Promise.reject(response);
                }
            }).then(function (weatherData) {
                console.log("userData is: ", weatherData);
                responseObj = weatherData;
                setResponseObj(weatherData);

                setSafe(true);
                console.log("STORED AT RESPONSE OBJ AT THIS MOMENT: ", JSON.stringify(responseObj));

            }).catch(function (error) {
                console.warn(error);
            });
            
            return; 
        }



    return (
        <div>
                <form onSubmit={getWeather}>
                    <input className="citytext"
                        type="text"
                        placeholder="Enter City"
                        maxLength="50"
                        className={classes.textInput}
                        value={city}
                        onChange={e => {
                            setCity(e.target.value)
                            }
                        }
                    />
                        <br></br>
                        <button id="cloud" className={classes.Button} type="submit">Get Forecast</button>


                </form>

            <Conditions
            // this component holds our strips.
            responseObj={responseObj}
            error={error} //new
            loading={loading} //new
            safe={safe}
            />

        </div>
    )
}

export default Multiday;