import React , {useState} from 'react';
import Calendar from './Calendar';
import BasicInfoForm from './BasicFormInfo'


function PlantOwnerForm(props)  {

  const [nameOwner , setNameOwner] = React.useState('');
  const [locationOwner , setLocationOwner] = React.useState('');
  const [plantsOwner , setPlantsOwner] = useState(0);
  const [startDateOwner, setStartDateOwner] = useState('');
  const [endDateOwner, setEndDateOwner] = useState('');
      
//Handle change for town and radius
  function handleChange(event) {
    // console.log('event: ', event)
    // console.log(event.target.value)
    switch (event.target.name) {
      case "name":
        setNameOwner(event.target.value);
        break;
      case "plants":
        setPlantsOwner(event.target.value);
        break;
      case "location":
        setLocationOwner(event.target.value);
        break;
      default:
        break;
    }
 }

 //Plant counter

  const addPlant = (event) => {
    event.preventDefault()
    setPlantsOwner(plantsOwner +1)
  }

  const removePlant = (event) => {
    event.preventDefault()
    setPlantsOwner(plantsOwner -1)
  }

//Calendar dates

function handleChangeDates(date, name) {
  if (name==="startDate") 
  {
    setStartDateOwner(startDateOwner)
    console.log(date)
  }
  if (name==="endDate") 
  {
    setEndDateOwner(date)
  }
}

// Submitting the form
  function handleSubmit(event) {
      event.preventDefault();
      // console.log(
      // `A request has been logged: 
      // From ${nameOwner} in ${locationOwner} for ${plantsOwner} plant(s) from ${startDateOwner} to ${endDateOwner}
      // `);
      //defines an object with data
      let ownerData = {nameOwner:nameOwner, locationOwner:locationOwner, plantsOwner:plantsOwner, startDateOwner:startDateOwner, endDateOwner:endDateOwner}
      // sends it back to parent (App)
      props.parentCallBack(ownerData)
      //Reset fields
      setLocationOwner("");
      setNameOwner("");
      setPlantsOwner(0);
      setStartDateOwner("");
      setEndDateOwner("");
  }

 
    return (
      <div>
        <form onSubmit={handleSubmit}> 
          <BasicInfoForm
            name={nameOwner}
            handleChange = {handleChange}
            location = {locationOwner}
            addPlant = {addPlant}
            removePlant = {removePlant}
            plants={plantsOwner}
          />
         
          <Calendar
            startDate={startDateOwner}
            endDate={endDateOwner}
            handleChangeDates={ handleChangeDates }
          />
          <button> Let's find my Plant-Sitter !</button>
       </form>
      </div>
    )
}

export default PlantOwnerForm;