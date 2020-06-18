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

    // defining set lat and long function
    function setLatitudeLongitude(){
        //    e.preventDefault();
            console.log("in setLatitudeLongitude")
            // setMapResponseObj({});
            // setMapLoading(true);
            // mapbox API code goes here - 
            console.log("what is at the weather responseObj",JSON.stringify(responseObj));

            var post;

            // Call the mapbox API
            fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=pk.eyJ1IjoianVhbmpvc2VmZXJuYW5kZXoiLCJhIjoiY2tiaTRyNWM4MGJ1NTJ5bWx2Yzd5a3E3eSJ9.3nNSmXu7AqLrHF-MAepd-A`).then(function (response) {
                if (response.ok) {
                    return response.json();
                } else {
                    return Promise.reject(response);
                }
            }).then(function (data) {

                // Store the post data to a variable
                responseObj = data;

                // Fetch the openweatherAPI
                return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.features[0].center[1]}&lon=${data.features[0].center[0]}&exclude=minutely,hourly&units=imperial&appid=de21f1eaf5bf29f1eb059f7f97f70b23`);

            }).then(function (response) {
                if (response.ok) {
                    return response.json();
                } else {
                    return Promise.reject(response);
                }
            }).then(function (userData) {
                console.log(userData);
            }).catch(function (error) {
                console.warn(error);
            });
            
            return; 
        }

    function getMultiDay(e) {
        console.log("boop")
        console.log(city);
        e.preventDefault();
        // Clear state in preparation for new data
        setError(false);
        setResponseObj({});
        setLatitudeLongitude(
            
            function () {
            console.log("in the callback of setlatitudelongitude");
                setLoading(true);
                // fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly&units=imperial&appid=de21f1eaf5bf29f1eb059f7f97f70b23`)
                // .then(response => response.json()
                //     )
                // .then(response => {  
                //     setResponseObj(response);
                //     setLoading(false);
                //     setSafe(true);
                //     console.log("Open Weather Response Object:" , JSON.stringify(responseObj));
                // })  
                // .catch(function() {
                //     });
            }
        )
    }

    function testFunction(value, callback) {
        setCity(value);
        callback();
        return value;
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
                        onChange={e => {
                            testFunction((e.target.value), function () {console.log(city);});
                            }
                        }
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