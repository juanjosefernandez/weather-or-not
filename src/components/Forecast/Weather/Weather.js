//for the Weather API
import React from 'react';
import './App.css';

//API connection: api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}

//API key: e380d21626d076dd171c1a9816790db7

class Weather extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        // date: new Date(),
        // templatesIsLoading: true,
        // subject: "Test",
        // members: [],
  
      }
      // bind things here
    }

    // fetch("https://community-open-weather-map.p.rapidapi.com/weather?callback=test&id=2172797&units=%2522metric%2522%20or%20%2522imperial%2522&mode=xml%252C%20html&q=London%252Cuk", {
	// "method": "GET",
	// "headers": {
	// 	"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
	// 	"x-rapidapi-key": "cb7921a5aemsh82dc0943cf8aed3p1387ffjsn317a83d3b4cd"
	// }
    // })
    // .then(response => {
    //     console.log(response);
    // })
    // .catch(err => {
    //     console.log(err);
    // });

    render() {
        return(
            <div>
            
                API Request's Returns
                <div>Fart. Thank you.</div>

            </div>
        );
    }
}


export default Weather;