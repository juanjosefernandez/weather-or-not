import React, { useState } from 'react';
import ConditionsTwo from '../ConditionsTwo/ConditionsTwo';
import classes from './Multiday.module.css';

const Multiday = () => {

    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('imperial');
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);
    const uriEncodedCity = encodeURIComponent(city);
    let [responseObj, setResponseObj] = useState({});

    function getForecast(e) {
        e.preventDefault();
     
        if (city.length === 0) {
            return setError(true);
        }
     
        // Clear state in preparation for new data
        setError(false);
        setResponseObj({});
       
        setLoading(true);
       
        let uriEncodedCity = encodeURIComponent(city);

        fetch(`https://community-open-weather-map.p.rapidapi.com/forecast?units=${unit}&q=${uriEncodedCity}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                "x-rapidapi-key": "cb7921a5aemsh82dc0943cf8aed3p1387ffjsn317a83d3b4cd"
            }
        // fetch(`https://community-open-weather-map.p.rapidapi.com/forecast?units=${unit}&q=${uriEncodedCity}`, {
        //     "method": "GET",
        //     "headers": {
        //         "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        //         "x-rapidapi-key": process.env.REACT_APP_API_KEY
        //     }
        })
        .then(response => response.json())
        .then(response => {
            if (response.cod !== 200) {
                throw new Error()
            }
    
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
                    <form onSubmit={getForecast}>
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