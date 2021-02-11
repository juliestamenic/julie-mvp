import React  from "react";

function PlantSittingRequests(props){

    //props.owners.filter = same city sitter 
    // result is an array with matching city
    // define variable here

    return ( 
        <div className ="SittingRequests">
           
            <h4> Requests Pending </h4>
            <h5> Click on their name to get in touch with them</h5>
            <ul>
                { 
                    props.owners.map((owners, j) => (
                        <div key={j}>
                            <li onClick={function () {alert(`${owners.nameOwner} is located in ${owners.locationOwner} and his phone number is ${owners.phoneOwner}`);}}> {owners.nameOwner}</li>
                            {/* <li>{owners.locationOwner} </li> */}
                            {/* <li>Phone Number : {owners.phoneOwner} </li> */}
                            <li> Start Date: {owners.startDateOwner.toString()} </li>
                            <li> End Date: {owners.endDateOwner.toString()} </li>
                        </div>
                    ))
                }
            </ul>
        </div>
    )
}


export default PlantSittingRequests;