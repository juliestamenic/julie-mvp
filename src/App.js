import React, { useState } from "react";
import './App.css';
// import PlantSitterForm from "./components/PlantSitterForm";
// import PlantOwnerForm from "./components/PlantOwnerForm"
// import DashboardUsers from "./components/DashboardUsers"
import Navbar from "./components/Navbar"
import Routes from "./components/Routes"
import { useHistory } from 'react-router-dom';

let InitialSitters = [
  { nameSitter: 'Julie S', locationSitter: "Barcelona", phoneSitter: "12345" , startDateSitter: "" , endDateSitter : "" }
];

let InitialOwners = [
  { nameOwner: 'Jim', locationOwner: "Barcelona", plantsOwner: "2" , startDateOwner: "01/03/2021" , endDateOwner : "08/03/2021" }
];

function App() {

  // const [plantSitterView, setPlantSitterView] = useState(true)
  const [owners, setOwners] = useState(InitialOwners);
  const [sitters, setSitters] = useState(InitialSitters);
  // const [user , setUser] = useState(InitialUser)
  const history = useHistory();


  // to change between PS and PO
  // const handleChangeView = (isPlantSitter) => {
  //   setPlantSitterView(isPlantSitter)
  //   }

  // to get the data from PO form
  function addOwner(ownerData) {
    let newOwners = [...owners, ownerData];
    setOwners(newOwners)
    console.log(`Owner Data from APP component:  ${ownerData.locationOwner} ${ownerData.nameOwner}${ownerData.phoneOwner} ${ownerData.plantsOwner} ${ownerData.startDateOwner} ${ownerData.endDateOwner}`)
    }

  // to get data from PS form
  function addSitter(sitterData) {
    let newSitters = [...sitters, sitterData];
    console.log(newSitters)
    // setSitters(newSitters)
    // let newSitter = {nameSitter: sitterData.nameSitter, locationSitter: sitterData.locationSitter}
    // setSitters(sitters => [...sitters, newSitter])
    history.push('/plant-sitting-offers');
    //console.log(`Sitter Data from APP component: ${sitterData.locationSitter} ${sitterData.nameSitter}  ${sitterData.startDateSitter} ${sitterData.endDateSitter}`)
  }


  // based in the comparison add what is true in an Array, return this array in a component



  return (
    <div>
  
          <Navbar />
          <Routes sitters={sitters} onSearch={(sitterData) => addSitter(sitterData)} owners={owners} onRequest={addOwner} />
         
    </div>
  );
}

export default App;
