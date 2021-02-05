import React , {useState} from 'react';
import Calendar from "./Calendar";


function PlantSitterForm(props)  {

  const [name , setName] = React.useState('');
  const [town , setTown] = React.useState('');
  const [radius, setRadius] = React.useState('');
  // const [date, setDate] = React.useState('Today');
      
//Handle change for town and radius
  function handleChange(event) {
    // console.log(event.target.value)
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        break;
      case "radius":
        setRadius(event.target.value);
        break;
      case "town":
        setTown(event.target.value);
        break;
      default:
        break;
    }
 }

 //Plant counter
 const [plants , setPlants] = useState(null);
  const addPlant = (event) => {
    event.preventDefault()
    setPlants(plants +1)
  }

// Submitting the form
  function handleSubmit(event) {
      event.preventDefault();
      console.log(
      `A request has been logged: 
      From ${name} in ${town} within ${radius} KM for ${plants} plant(s)
      `)
      setTown("");
      setRadius("");
      setName("");
      setPlants(null);
  }

  //Select the time frame
 

    return (
      <div>
        <form onSubmit={handleSubmit}> 
          <h3> {props.name} </h3>
          <label> Name
            <input
            name="name"
            type="text"
            value={name}
            onChange={handleChange}
            >
            </input>
          </label>
          <label> Town
           <select 
           name="town" 
           value={town} 
           onChange={handleChange}>
            <option id="empty" ></option>
            <option id="barcelona" >Barcelona</option>
            <option id="paris" >Paris</option>
          </select>
          </label>
        
          <label> Radius in KM
           <select 
           name="radius" 
           value={radius} 
           onChange={e => handleChange(e)}>
            <option id="0" ></option>
            <option id="1" >0</option>
            <option id="2" >1</option>
            <option id="3" >2</option>
          < option id="4" >5</option>
          </select>
         </label>


         <label> Number of Plants 
            <button onClick={addPlant}> Add </button>
            <h3> {plants} </h3>
          </label>

          <Calendar />

          <button> Let's find my Plant-Sitter !</button>
       </form>
      </div>
    )
}

export default PlantSitterForm;