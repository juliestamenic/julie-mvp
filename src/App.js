import React, { useState } from "react";
import './App.css';
import PlantSitterView from "./components/PlantSitterView";
import PlantOwnerView from "./components/PlantOwnerView";



function App() {

  const [plantSitterView, setPlantSitterView] = useState(true)

  const handleChangeView = (isPlantSitter) => {
    setPlantSitterView(isPlantSitter)
    }

  return (
    <div>
          <h1>The Lucky Plant App</h1>
          <button className ={plantSitterView ? 'button-active' : "button"} onClick={() => handleChangeView(true)}> I am a Plant Sitter</button>
          <button className ={!plantSitterView ? 'button-active' : "button"} onClick={() => handleChangeView(false)}>I am a Plant Owner</button>
          {plantSitterView && <PlantSitterView 
          handleChangeView={handleChangeView} />}
          {!plantSitterView && <PlantOwnerView />}
 
    </div>
  );
}

export default App;
