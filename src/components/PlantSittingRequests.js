import React  from "react";

function PlantSittingRequests(props){

    return ( 
        <div className ="SittingRequests">
           
            <h4> Requests Pending </h4>
            <h5> Click on their name to get in touch with them</h5>
            <ul>
                {
                    props.owners.map((owners, j) => (
                        <div key={j}>
                            <li> {owners.nameOwner}</li>
                            <li>{owners.locationOwner} </li>
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