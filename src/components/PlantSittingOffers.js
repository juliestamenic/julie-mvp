import React  from "react";
import { filterUsersByLocation } from './helpers';

function PlantSittingOffers({ owner, sitters }){
  const filteredSitters = filterUsersByLocation(sitters, owner.location);
  const popUserData = (e, sitter) => {
    e.preventDefault();
    return alert(
      `${sitter.name} is located in ${sitter.location} and his phone number is ${sitter.phone}`
      );
  }
    return ( 
        <div className ="filteredSitters" >
          <h4> Available sitters </h4>
          <h5> Click on their name to get in touch with them</h5>
          {
            filteredSitters.map((sitter, i) => (
              <li
                key={ `${sitter}-${i}`}
                onClick={ (e) => popUserData(e, sitter)} >
                { sitter.name }
              </li>
            ))
          }
        </div>
    )
}


export default PlantSittingOffers;