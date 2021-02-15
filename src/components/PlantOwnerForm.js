import React , {useState} from 'react';
import Calendar from './Calendar';
import BasicInfoForm from './BasicFormInfo'
// import { useHistory } from 'react-router-dom';


function PlantOwnerForm(props)  {

  const [name , setName] = React.useState('');
  const [location , setLocation] = React.useState('');
  const [plants , setPlants] = useState(0);
  const [phone , setPhone] = React.useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  // const history = useHistory();
      
//Handle change for town and radius
  function handleChange(event) {
    // console.log('event: ', event)
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
      case "phone":
        setPhone(event.target.value);
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

  const removePlant = (event) => {
    event.preventDefault()
    setPlants(plants -1)
  }

//Calendar dates

function handleChangeDates(date, name) {
  if (name==="startDate") 
  {
    setStartDate(date)
  }
  if (name==="endDate") 
  {
    setEndDate(date)
  }
}

// Submitting the form
  function handleSubmit(event) {
      event.preventDefault();
      // console.log(
      // `A request has been logged: 
      // From ${name} in ${location} for ${plants} plant(s) from ${startDate} to ${endDate}
      // `);
      //defines an object with data
      let ownerData = {name:name, location:location, plants:plants, phone:phone, startDate:startDate, endDate:endDate}
      // sends it back to parent (App)
      props.addOwner(ownerData)
      //Reset fields
      setLocation("");
      setName("");
      setPlants(0);
      setStartDate("");
      setEndDate("");
      setPhone("");
  }

 
    return (
      <div> 
        <form onSubmit={handleSubmit}> 
          <BasicInfoForm
            name={name}
            handleChange = {handleChange}
            location = {location}
            phone={phone}
          />

          <label> <p> Number of Plants to be sitted</p>
            <button onClick={addPlant}> + </button>
            <button onClick={removePlant}> - </button>
            {plants}
          </label>
         
          <Calendar
            startDate={startDate}
            endDate={endDate}
            handleChangeDates={ handleChangeDates }
          />
         <button id="buttonOwner" type="submit" > BROWSE SITTERS AROUND ME</button>
       </form>
      </div>
    )
}

export default PlantOwnerForm;