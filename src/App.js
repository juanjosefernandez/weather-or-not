import React from 'react';
import Forecast from "./components/Forecast/Forecast";
import Multiday from "./components/Multiday/Multiday";
import Logo from './components/Logo/logo';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <h1>Weather-Or-Not</h1>
        <h4>by JUAN AND MISSY</h4>
      </header>   
         {/* current weather */}
      {/* <Forecast/> */}

      {/* multiday forecast - 5 days, every 3 hours */}
      {/* goes here */}
      <Multiday/>  
    </div>
  );
}

export default App;
