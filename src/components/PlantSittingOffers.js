import React  from "react";

function PlantSittingOffers(props){

    return ( 
        <div className ="OffersRequests">
           
            <h4> Available sitters </h4>
            <h5> Click on their name to get in touch with them</h5>
            <ul>
                {
                    props.sitters.map((sitters, k) => (
                        <div key={k}>
                            <li> Name: {sitters.nameSitter}</li>
                            <li>Location : {sitters.locationSitter} </li>
                            {/* <li>Phone Number : {sitters.phoneSitter} </li> */}
                            <li> Unavailable from: {sitters.startDateSitter.toString()} </li>
                            <li> To: {sitters.endDateSitter.toString()} </li>
                        </div>
                    ))
                }
            </ul>
        </div>
    )
}

export default PlantSittingOffers;