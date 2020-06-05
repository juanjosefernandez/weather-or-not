import React from 'react';
import Forecast from "./components/Forecast/Forecast";
import Multiday from "./components/Multiday/Multiday";
import Logo from './components/Logo/logo';
import './App.css';

function App() {
  return (
    <div className="App">

      <div>TITLE BAR </div>
      <Multiday/>  

    </div>
  );
}

export default App;
