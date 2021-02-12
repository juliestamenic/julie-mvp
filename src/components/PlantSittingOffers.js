import React  from "react";
// import PlantOwnerForm from "./PlantOwnerForm";

function PlantSittingOffers({sitters}){


    return ( 

      
        <div className ="filteredSitter" >
          <h4> Available sitters </h4>
          <h5> Click on their name to get in touch with them</h5>
           {sitters.filter(InitialSitter => InitialSitter.locationSitter === "London").map(filteredSitter => (
        <li onClick = {function (){alert(`${filteredSitter.nameSitter} is located in ${filteredSitter.locationSitter} and his phone number is ${filteredSitter.phoneSitter}`);}}>
          {filteredSitter.nameSitter}
        </li>
      ))}
            
        </div>

        // <div className ="OffersRequests">
           
        //     <h4> Available sitters </h4>
        //     <h5> Click on their name to get in touch with them</h5>
        //     <ul>
        //         {
        //             props.sitters.map((sitters, k) => (
        //                 <div key={k}>
        //                     <li onClick = {function (){alert(`${sitters.nameSitter} is located in ${sitters.locationSitter} and his phone number is ${sitters.phoneSitter}`);}}> Name: {sitters.nameSitter}</li>
        //                     <li>Location : {sitters.locationSitter} </li>
        //                     {/* <li>Phone Number : {sitters.phoneSitter} </li> */}
        //                     {/* <li> Unavailable from: {sitters.startDateSitter.toString()} </li>
        //                     <li> To: {sitters.endDateSitter.toString()} </li> */}
        //                 </div>
        //             ))
        //         }
        //     </ul>
        // </div>
    )
}

export default PlantSittingOffers;