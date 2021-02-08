import React  from "react";

function DashboardUsers(props){
    return ( 
        <div className ="Dashboard">
            <h2> Welcome to the Dashboard</h2>
            <h4> Here are the current owners </h4>
            <ul>
                {
                    props.owners.map((owners,i) => (
                        <div key={i}>
                            <li> {owners.nameOwner}</li>
                            <li>{owners.locationOwner} </li>
                            <li>{owners.plantsOwner} </li>
                            <li> {owners.startDateOwner} </li> 
                            <li>{owners.endDateOwner} </li>
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
                            <li> {sitters.startDateSitter} </li> 
                            <li>{sitters.endDateSitter} </li>
                        </div>
                    ))
                }
            </ul>
        </div>
    )
}

export default DashboardUsers;