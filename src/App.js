import React, { useState } from "react";
import './App.css';
import PlantSitterForm from "./components/PlantSitterForm";
import PlantOwnerForm from "./components/PlantOwnerForm"

let InitialOwners = [
  { nameOwner: 'Julie S', locationOwner: "Eixample", plantsOwner: "2" , startDateOwner: "1st March" , endDateOwner : "5th Match" }
];

let InitialSitters = [
  { nameSitter: 'Jim R', locationSitter: "Eixample", plantsSitter: "20" , startDateSitter: "1st March" , endDateSitter : "10th Match" }
];

function App() {

  const [plantSitterView, setPlantSitterView] = useState(true)
  const [owners, setOwners] = useState(InitialOwners);
  const [sitters, setSitters] = useState(InitialSitters);

  // to change between PS and PO
  const handleChangeView = (isPlantSitter) => {
    setPlantSitterView(isPlantSitter)
    }

  // to get the data from PO form
  function handleOwnerData(ownerData) {
    let newOwner = {ownerData}
    let newOwners = [...owners, newOwner];
    console.log(newOwners)
    setOwners(owners => newOwners)
    //console.log(`Owner Data: ${ownerData.locationOwner} ${ownerData.nameOwner} ${ownerData.plantsOwner} ${ownerData.startDateOwner} ${ownerData.endDateOwner}`)
    }

  // to get data from PS form
  function handleSitterData (sitterData) {
    let newSitter = {sitterData}
    let newSitters = [...sitters, newSitter];
    console.log(newSitters)
    // console.log(`Sitter Data: ${sitterData.locationSitter} ${sitterData.nameSitter} ${sitterData.plantsSitter} ${sitterData.startDateSitter} ${sitterData.endDateSitter}`)
  }

  // function to compare both


  // based in the comparison add what is true in an Array, return this array in a component



  return (
    <div>
          <h1>The Lucky Plant App</h1>
          <button className ={plantSitterView ? 'button-active' : "button"} onClick={() => handleChangeView(true)}> I am a Plant Sitter</button>
          <button className ={!plantSitterView ? 'button-active' : "button"} onClick={() => handleChangeView(false)}>I am a Plant Owner</button>
          {plantSitterView && <PlantSitterForm 
          handleChangeView={handleChangeView}
          parentCB={handleSitterData} />}
          {!plantSitterView && <PlantOwnerForm 
          parentCallBack={handleOwnerData} /> 
          }
         
    </div>
  );
}

export default App;
