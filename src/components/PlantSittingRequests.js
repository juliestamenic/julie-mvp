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
                            {/* <li>Plants : {sitters.plantsSitter} </li>
                            <li> Start Date: {sitters.startDateSitter.toString()} </li>
                            <li> End Date: {sitters.endDateSitter.toString()} </li> */}
                        </div>
                    ))
                }
            </ul>
        </div>
    )
}

export default PlantSittingRequests;