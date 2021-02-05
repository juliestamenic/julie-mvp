import React , {useState} from 'react';
import Calendar from "./Calendar";


function PlantSitterForm(props)  {

  const [name , setName] = React.useState('');
  const [location , setLocation] = React.useState('');
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
      case "location":
        setLocation(event.target.value);
        break;
      default:
        break;
    }
 }

 //Plant counter
 const [plants , setPlants] = useState(null);
  const addPlant = (event) => {
    event.preventDefault()
    setPlants(plants +5)
  }

// Submitting the form
  function handleSubmit(event) {
      event.preventDefault();
      console.log(
      `A request has been logged: 
      From ${name} in ${location} within ${radius} KM for ${plants} plant(s)
      `)
      setLocation("");
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
          
          <label> Location
           <select 
           name="location" 
           value={location} 
           onChange={handleChange}>
            <option id="empty" ></option>
            <option id="ciutat vella" >Ciutat Vella</option>
            <option id="Eixample" >Eixample</option>
            <option id="Gràcia" >Gràcia</option>
            <option id="HG" >Horta-Guinardó</option>
            <option id="LC" >Les Corts</option>
            <option id="NB" >Nou Barris</option>
            <option id="SA" >Sant Andreu</option>
            <option id="SMa" >Sant Martí</option>
            <option id="SMon" >Sants Montjuic</option>
            <option id="SSG" >Sarrià Sant Gervasi</option>
          </select>
          </label>


         <label> Happy to host up to 
            <button onClick={addPlant}> Add + 5 </button>
            <h3> {plants} </h3>
          </label>

          <Calendar />

          <button> Offer my help</button>
       </form>
      </div>
    )
}

export default PlantSitterForm;