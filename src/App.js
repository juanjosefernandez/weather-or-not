import React from 'react';
import Multiday from "./components/Multiday/Multiday";
import './App.css';
import Rainbowfy from 'react-rainbowfy';

    

function App() {
  return (
    <div className="App">

      <Rainbowfy>
      <div className="Title">WEATHER - OR - NOT </div> 
      {/* <p className="Authors">by MISSY & JUAN !</p> */}

      </Rainbowfy>
      {/* <Rainbowfy> where r u?</Rainbowfy> */}
      <Multiday/> 
      
{/* this was the bottom cloud */}
      {/* <div id = "cloud"><span class='shadow'></span></div> */}

       

      

    </div>
  
  );
}

export default App;

