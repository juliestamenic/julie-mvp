import React  from "react";
import { filterUsersByLocation } from './helpers';

function PlantSittingResults({ me, users }){
  const filteredUsers = filterUsersByLocation(users, me.location);
  const popUserData = (e, user) => {
    e.preventDefault();
    return alert(
      `${user.name} is located in ${user.location} and his phone number is ${user.phone}`
      );
  }
    return ( 
        <div className ="filteredResults" >
          <h4>Available Results</h4>
          <h5> Click on their name to get in touch with them</h5>
          {
            filteredUsers.map((user, i) => (
              <li
                key={ `${user}-${i}`}
                onClick={ (e) => popUserData(e, user)} >
                { user.name }
              </li>
            ))
          }
        </div>
    )
}


export default PlantSittingResults;