import React  from "react";

function DashboardUsers(props){

     // function to compare both
  function findSitter (owners , sitters) {
    console.log(owners.nameOwner)
    // if(ownerData.locationOwner === sitterData.locationSitter)
    // {console.log("Location is the same")}
    // console.log(sitters)
  }


    return ( 
        <div className ="Dashboard">
            <h2> Welcome to the Dashboard</h2>
            <h4> Here are the current owners </h4>
            <ul>
                {
                    props.owners.map((owners,i) => (
                        <div key={i}>
                            <li> Name: {owners.nameOwner}</li>
                            <li> Location: {owners.locationOwner} </li>
                            <li> # of plants: {owners.plantsOwner} </li>
                            <li> Start Date: {owners.startDateOwner.toString()} </li>
                            <li> End Date:{owners.endDateOwner.toString()} </li>
                        </div>
                    ))
                }
            </ul>
            <h4> Here are the current sitters </h4>
            <ul>
                {
                    props.sitters.map((sitters, j) => (
                        <div key={j}>
                            <li>  {sitters.nameSitter}</li>
                            <li>{sitters.locationSitter} </li>
                            <li>Plants : {sitters.plantsSitter} </li>
                            <li> Start Date: {sitters.startDateSitter.toString()} </li>
                            <li> End Date: {sitters.endDateSitter.toString()} </li>
                        </div>
                    ))
                }
            </ul>
            <button onClick={findSitter}>Find Sitter</button>
        </div>
    )
}

export default DashboardUsers;