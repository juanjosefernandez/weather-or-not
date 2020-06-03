import React, { useState } from 'react';
import ConditionsTwo from '../ConditionsTwo/ConditionsTwo';
import classes from './Multiday.module.css';

const Multiday = () => {

    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('imperial');
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);
    // const uriEncodedCity = encodeURIComponent(city);
    let [responseObj, setResponseObj] = useState({});

       

    function getMultiDay(e) {

    function weatherBalloon( cityID ) {
        var key = '{yourkey}';
        fetch('https://api.openweathermap.org/data/2.5/forecast?id=' + cityID+ '&appid=' + "de21f1eaf5bf29f1eb059f7f97f70b23")  
        .then(function(resp) { return resp.json() }) // Convert data to json
        .then(function(data) {
          console.log(data);
        })
        .catch(function() {
          // catch any errors
        });
      }

      console.log("before weather balloon");
      weatherBalloon( 6167865 );
      console.log("after weather balloon");
      
        e.preventDefault();
     


        // For testing the basic API code provided by RapidAPI
        fetch("https://community-open-weather-map.p.rapidapi.com/forecast?q=san%20francisco%252Cus", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                "x-rapidapi-key": "cb7921a5aemsh82dc0943cf8aed3p1387ffjsn317a83d3b4cd",
                "Access-Control-Allow-Origin": "*"
            }
        })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        });
        // 
        if (city.length === 0) {
            console.log("In check for city lenght of 0");

            return setError(true);
        }

        // Clear state in preparation for new data
        setError(false);
        setResponseObj({});
       
        setLoading(true);
        let uriEncodedCity = encodeURIComponent(city);

        fetch(`https://community-open-weather-map.p.rapidapi.com/forecast?units=${unit}&zip=${uriEncodedCity}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                "x-rapidapi-key": process.env.REACT_APP_API_KEYTWO
            }
            
        })
        .then(response => response.json()
        )
        .then(response => {
            console.log(response.cod);
            if (response.cod !== 200) {
                throw new Error()
            }
            console.log("above line 45");
            setResponseObj(response);
            setLoading(false);
        })
        .catch(err => {
            setError(true);
            setLoading(false);
            console.log(err);
        });

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
                        <label className = {classes.Radio}>
                            <input
                                type="radio"
                                name="units"
                                checked={unit === "imperial"}
                                value="imperial"
                                onChange={(e) => setUnit(e.target.value)}
                                />
                            Fahrenheit
                        </label>
                        <label className = {classes.Radio}>
                            <input
                                type="radio"
                                name="units"
                                checked={unit === "metric"}
                                value="metric"
                                onChange={(e) => setUnit(e.target.value)}
                                />
                            Celcius
                        </label>

                        <button className={classes.Button} type="submit">Get Multiday Forecast</button>

                    </form>
                
             <ConditionsTwo
                responseObj={responseObj}
                error={error} //new
                loading={loading} //new
                />

            </div>
        )
}

export default Multiday;