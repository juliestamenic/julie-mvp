import React , {useState} from 'react';
import Calendar from "./Calendar";


function PlantSitterForm(props)  {

  const [name , setName] = React.useState('');
  const [location , setLocation] = React.useState('');
  const [plants , setPlants] = useState(null);
      
//Handle change for town and radius
  function handleChange(event) {
    // console.log(event.target.value)
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        break;
      case "plants":
        setPlants(event.target.value);
        break;
      case "location":
        setLocation(event.target.value);
        break;
      default:
        break;
    }
 }

 //Plant counter

  const addPlant = (event) => {
    event.preventDefault()
    setPlants(plants +1)
  }

// Submitting the form
  function handleSubmit(event) {
      event.preventDefault();
      console.log(
      `A request has been logged: 
      From ${name} in ${location} for ${plants} plant(s)
      `)
      setLocation("");
      setName("");
      setPlants(null);
      handleCalChange()
  }

  //Select the time frame
    function handleCalChange(date, name) {
      // when changed, add value in the handleSubmit
     props.handleChangeDates(date,name)
    }
 

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


         <label> Number of Plants to be sitted
            <button onClick={addPlant}> Add </button>
            <h3> {plants} </h3>
          </label>

          <Calendar 
          name="Dates"
          onChange={(date)=>handleCalChange(date, "Dates")} />

          <button> Let's find my Plant-Sitter !</button>
       </form>
      </div>
    )
}

export default PlantSitterForm;