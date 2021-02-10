import React  from "react";

function PlantSittingOffers(props){

    return ( 
        <div className ="OffersRequests">
           
            <h4> Available sitters </h4>
            <h5> Click on their name to get in touch with them</h5>
            {/* <ul>
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
            </ul> */}
        </div>
    )
}

export default PlantSittingOffers;