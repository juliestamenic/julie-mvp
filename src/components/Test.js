import React  from "react";
// import PlantSittingOffers from "./PlantSittingOffers";
// import PlantOwnerForm from "./PlantOwnerForm";



// const names = ['James', 'John', 'Paul', 'Ringo', 'George'];

// function Test() {
//   return (
//     <div>
//         <h1>Hello</h1>
//       {names.filter(name => name.includes('J')).map(filteredName => (
//         <li>
//           {filteredName}
//         </li>
//       ))}
//     </div>
//   );
// }

function Test(props){


    // let InitialSitters = [
    //     { nameSitter: 'Julie', locationSitter: "Barcelona", phoneSitter: "671 273 802" , startDateSitter: "" , endDateSitter : "" },
    //     { nameSitter: 'Tom', locationSitter: "Barcelona", phoneSitter: "1 674 273 802" , startDateSitter: "" , endDateSitter : "" },
    //     { nameSitter: 'Fred', locationSitter: "Paris", phoneSitter: "6 674 273 802" , startDateSitter: "" , endDateSitter : "" }
    //   ];

    return ( 
        <div className ="test">
           {props.sitters.filter(InitialSitter => InitialSitter.locationSitter === "Paris").map(filteredSitter => (
        <li>
          {filteredSitter.nameSitter}
        </li>
      ))}
            
        </div>
    )
}

export default Test;