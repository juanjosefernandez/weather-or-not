import React from 'react';
import Multiday from "./components/Multiday/Multiday";
import Rainbowfy from 'react-rainbowfy';
import './App.css';

function App() {
  return (
    <div className="App">

      <Rainbowfy>
      <div className="Title">WEATHER - OR - NOT </div> 
      {/* <p className="Authors">by MISSY & JUAN !</p> */}
      </Rainbowfy>      

      <Multiday/>  

      {/* <div id="sky">
        <img id="cloud2"src="https://pngimage.net/wp-content/uploads/2018/05/cute-cloud-png-1.png"></img>
        <img id="sun"src="https://media0.giphy.com/media/F0HOpzaUXInKxPLtr9/source.gif">
      </img></div> */}

    </div>
  );
}

export default App;
