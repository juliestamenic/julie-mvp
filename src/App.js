import React, { useState } from "react";
import './App.css';
import PlantSitterForm from "./components/PlantSitterForm";
import PlantOwnerForm from "./components/PlantOwnerForm"
import DashboardUsers from "./components/DashboardUsers"


// let InitialOwners = [
//   { nameOwner: 'Julie S', locationOwner: "Eixample", plantsOwner: "2" , startDateOwner: "" , endDateOwner : "" }
// ];

// let InitialSitters = [
//   { nameSitter: 'Jim R', locationSitter: "Eixample", plantsSitter: "20" , startDateSitter: "" , endDateSitter : "" }
// ];

function App() {

  const [plantSitterView, setPlantSitterView] = useState(true)
  const [owners, setOwners] = useState([]);
  const [sitters, setSitters] = useState([]);


  // to change between PS and PO
  const handleChangeView = (isPlantSitter) => {
    setPlantSitterView(isPlantSitter)
    }

  // to get the data from PO form
  function handleOwnerData(ownerData) {
    let newOwners = [...owners, ownerData];
    setOwners(newOwners)
    console.log(`Owner Data from APP component: ${typeof(ownerData.locationOwner)}${ownerData.locationOwner} ${ownerData.nameOwner} ${ownerData.plantsOwner} ${ownerData.startDateOwner} ${ownerData.endDateOwner}`)
    }

  // to get data from PS form
  function handleSitterData (sitterData) {
    let newSitters = [...sitters, sitterData];
    setSitters(newSitters)
    console.log(`Sitter Data from APP component: ${sitterData.locationSitter} ${sitterData.nameSitter} ${sitterData.plantsSitter} ${sitterData.startDateSitter} ${sitterData.endDateSitter}`)
  }


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
          <DashboardUsers 
          owners={owners} 
          sitters={sitters} 
          />
          
    </div>
  );
}

export default App;
