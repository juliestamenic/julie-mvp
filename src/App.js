import React, { useState } from "react";
import './App.css';
// import PlantOwnerForm from "./components/PlantOwnerForm"
// import DashboardUsers from "./components/DashboardUsers"
import Navbar from "./components/Navbar"
import Routes from "./components/Routes"
import { useHistory } from 'react-router-dom';

let initialSitters = [
  { name: 'Sonia', location: "Barcelona 🇪🇸", phone: "+ 34 671 273 000" , startDate: "" , endDate : "" },
  { name: 'Tom', location: "London 🇬🇧", phone: "+44 768 90 89 09" , startDate: "" , endDate : "" },
  { name: 'Fred', location: "Paris 🇫🇷", phone: "+33 6 01 02 04 23" , startDate: "" , endDate : "" },
  { name: 'Alex', location: "Paris 🇫🇷", phone: "+33 7 11 02 04 23" , startDate: "" , endDate : "" },
  { name: 'Arthur', location: "London 🇬🇧", phone: "+44 768 48 89 09" , startDate: "" , endDate : "" }
];

let initialOwners = [
  { name: 'Jim', location: "Barcelona 🇪🇸", plants: "4" ,phone: "+34 671 872 000" , startDate: "01/03/2021" , endDate : "08/03/2021" },
  { name: 'Jessica', location: "Paris 🇫🇷", plants: "4", phone: "+33 601 841 222" , startDate: "01/03/2021" , endDate : "28/03/2021" },
  { name: 'María', location: "Barcelona 🇪🇸", plants: "2" ,phone: "+34 672 332 010" , startDate: "01/04/2021" , endDate : "08/04/2021" },
  { name: 'Carlos', location: "Barcelona 🇪🇸", plants: "8" ,phone: "+34 652 442 020" , startDate: "01/07/2021" , endDate : "31/07/2021" },
  { name: 'Camille', location: "Paris 🇫🇷", plants: "6", phone: "+33 601 521 212" , startDate: "22/03/2021" , endDate : "28/03/2021" },
  { name: 'Charlotte', location: "Paris 🇫🇷", plants: "1", phone: "+33 601 332 124" , startDate: "01/04/2021" , endDate : "12/04/2021" },
  { name: 'John', location: "London 🇬🇧", plants: "4", phone: "+44 768 90 89 09" , startDate: "01/04/2021" , endDate : "22/04/2021" },
  { name: 'Gary', location: "London 🇬🇧", plants: "2", phone: "+44 748 90 89 09" , startDate: "04/04/2021" , endDate : "05/04/2021" }
];

function App() {

 
  const [owners, setOwners] = useState(initialOwners);
  const [sitters, setSitters] = useState(initialSitters);
  const [sitter, setSitter] = useState('');
  const [owner, setOwner] = useState('');
  const [me, setMe] = useState('')
  const [users, setUsers] = useState([])
  //const [user , setUser] = useState(initialOwners[0]) 
  const history = useHistory();


  // to get the data from PO form
  function addOwner(ownerData) {
    let newOwners = [...owners, ownerData];
    setOwners(newOwners)
    setOwner(ownerData);
    setMe(ownerData);
    setUsers(initialSitters)
    //console.log(`Owner Data from APP component:  ${ownerData.locationOwner} ${ownerData.nameOwner}${ownerData.phoneOwner} ${ownerData.plantsOwner} ${ownerData.startDateOwner} ${ownerData.endDateOwner}`)
    // history.push('/plant-sitting-requests');  
    history.push('/plant-sitting-results');
  }


  // to get data from PS form
  function addSitter(sitterData) {
    // console.log(sitterData, "In App JS OK ")
    let newSitters = [...sitters, sitterData]; // no need
    setSitter(sitterData);  // no need
    setSitters(newSitters)  // no need
    setMe(sitterData);
    setUsers(initialOwners)
    // let newSitter = {nameSitter: sitterData.nameSitter, locationSitter: sitterData.locationSitter}
    // setSitters(sitters => [...sitters, newSitter])
    // history.push('/plant-sitting-requests');
    //console.log(`Sitter Data from APP component: ${sitterData.locationSitter} ${sitterData.nameSitter}  ${sitterData.startDateSitter} ${sitterData.endDateSitter}`)
    history.push('/plant-sitting-results');
  }

  return (
    <div>
  
          <Navbar />
          <Routes
            sitter={sitter}
            sitters={sitters}
            addSitter={()=> addSitter}
            owner={owner}
            owners={owners}
            addOwner={() =>addOwner}
            me={me}
            users={users}
          />

<img id="Logo" src="theluckyplant.jpg" alt="TLP Logo"/>

    </div>
  );
}

export default App;

