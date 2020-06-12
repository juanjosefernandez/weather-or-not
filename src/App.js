import React from 'react';
import Multiday from "./components/Multiday/Multiday";
import './App.css';
import Rainbowfy from 'react-rainbowfy';

    

function App() {
  return (
    <div className="App">
    
      <Rainbowfy>
      <div className="Title">WEATHER - OR - NOT </div>
      <p>by MISSY & JUAN !</p>
      </Rainbowfy>
      <Rainbowfy></Rainbowfy>
      <Multiday/>  

    </div>
  
  );
}

export default App;

