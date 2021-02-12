import React, { useState } from "react";
import './App.css';
// import PlantOwnerForm from "./components/PlantOwnerForm"
// import DashboardUsers from "./components/DashboardUsers"
import Navbar from "./components/Navbar"
import Routes from "./components/Routes"
import { useHistory } from 'react-router-dom';

let InitialSitters = [
  { nameSitter: 'Julie', locationSitter: "Barcelona", phoneSitter: "671 273 802" , startDateSitter: "" , endDateSitter : "" },
  { nameSitter: 'Tom', locationSitter: "London", phoneSitter: "1 674 273 802" , startDateSitter: "" , endDateSitter : "" },
  { nameSitter: 'Fred', locationSitter: "Paris", phoneSitter: "6 674 273 802" , startDateSitter: "" , endDateSitter : "" }
];

let InitialOwners = [
  { nameOwner: 'Jim', locationOwner: "Barcelona", phoneOwner: "+34 671 872 000" , startDateOwner: "01/03/2021" , endDateOwner : "08/03/2021" },
  { nameOwner: 'Jessica', locationOwner: "Paris", phoneOwner: "+34 651 871 000" , startDateOwner: "20/03/2021" , endDateOwner : "28/03/2021" }
];

function App() {

 
  const [owners, setOwners] = useState(InitialOwners);
  const [sitters, setSitters] = useState(InitialSitters);
  const [user , setUser] = useState(InitialOwners[0]) 
  const history = useHistory();


  // to get the data from PO form
  function addOwner(ownerData) {
    let newOwners = [...owners, ownerData];
    setOwners(newOwners)
    console.log(newOwners)
    //console.log(`Owner Data from APP component:  ${ownerData.locationOwner} ${ownerData.nameOwner}${ownerData.phoneOwner} ${ownerData.plantsOwner} ${ownerData.startDateOwner} ${ownerData.endDateOwner}`)
    // history.push('/plant-sitting-requests');  
    history.push('/plant-sitting-offers');  
  }


  // to get data from PS form
  function addSitter(sitterData) {
    // console.log(sitterData, "In App JS OK ")
    let newSitters = [...sitters, sitterData];
    setSitters(newSitters)
    // let newSitter = {nameSitter: sitterData.nameSitter, locationSitter: sitterData.locationSitter}
    // setSitters(sitters => [...sitters, newSitter])
    history.push('/plant-sitting-requests');
    //console.log(`Sitter Data from APP component: ${sitterData.locationSitter} ${sitterData.nameSitter}  ${sitterData.startDateSitter} ${sitterData.endDateSitter}`)
  }

  return (
    <div>
  
          <Navbar />
          <Routes  user={user} sitters={sitters} addSitter={()=> addSitter} owners={owners} addOwner={() =>addOwner} />
         
    </div>
  );
}

export default App;

