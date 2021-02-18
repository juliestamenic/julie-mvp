// import React  from "react";
// import { filterUsersByLocation } from './helpers';

// function PlantSittingRequests({ sitter, owners }){
//   const filteredOwners = filterUsersByLocation(owners, sitter.location);
//   const popUserData = (e, owner) => {
//     e.preventDefault();
//     return alert(
//       `${owner.name} is located in ${owner.location} and his phone number is ${owner.phone}`
//       );
//   }
//     return ( 
//         <div className ="filteredOwner" >
//           <h4> Available owners </h4>
//           <h5> Click on their name to get in touch with them</h5>
//           {
//             filteredOwners.map((owner, i) => (
//               <li
//                 key={ `${owner}-${i}`}
//                 onClick={ (e) => popUserData(e, owner)} >
//                 { owner.name }
//               </li>
//             ))
//           }
//         </div>
//     )
// }


// export default PlantSittingRequests;