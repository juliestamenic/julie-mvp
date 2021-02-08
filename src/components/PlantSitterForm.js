import React , {useState} from 'react';
import Calendar from "./Calendar";
import BasicInfoForm from './BasicFormInfo'


function PlantSitterForm(props)  {

  const [nameSitter , setNameSitter] = React.useState('');
  const [locationSitter , setLocationSitter] = React.useState('');
  const [plantsSitter , setPlantsSitter] = useState(0);
  const [startDateSitter, setStartDateSitter] = useState('');
  const [endDateSitter, setEndDateSitter] = useState('');


//Handle change for name and location
  function handleChange(event) {
    // console.log(event.target.value)
    switch (event.target.name) {
      case "name":
        setNameSitter(event.target.value);
        break;
      case "plants":
        setPlantsSitter(event.target.value);
        break;
      case "location":
        setLocationSitter(event.target.value);
        break;
      default:
        break;
    }
 }

 //Plant counter
  const addPlant = (event) => {
    event.preventDefault()
    setPlantsSitter(plantsSitter +1)
  }

  const removePlant = (event) => {
    event.preventDefault()
    setPlantsSitter(plantsSitter -1)
  }

 //Calendar dates

function handleChangeDates(date, name) {

  console.log('date: ', date)
  if (name==="startDate") 
  {
    console.log(`Startdate:" ${startDateSitter}`)
    setStartDateSitter(date)
  }
  if (name==="endDate") 
  {
    console.log(`EndDate:" ${endDateSitter}`)
    setEndDateSitter(date)
  }
}

// Submitting the form
function handleSubmit(event) {
  event.preventDefault();
  // console.log(
  // `A request has been logged: 
  // From ${nameSitter} in ${locationSitter} for ${plantsSitter} plant(s) from ${startDateSitter} to ${endDateSitter}
  // `)
  let sitterData = {nameSitter:nameSitter, locationSitter:locationSitter, plantsSitter:plantsSitter, startDateSitter:startDateSitter, endDateSitter:endDateSitter}
  props.parentCB(sitterData)
  setLocationSitter("");
  setNameSitter("");
  setPlantsSitter(0);
  setStartDateSitter("");
  setEndDateSitter("")
}


    return (
      <div>
        <form onSubmit={handleSubmit}> 
          <BasicInfoForm
            name={nameSitter}
            handleChange = {handleChange}
            location = {locationSitter}
            addPlant = {addPlant}
            removePlant={removePlant}
            plants={plantsSitter}
          />
          <Calendar
            startDate={ startDateSitter }
            endDate={ endDateSitter }
            handleChangeDates={ handleChangeDates }
          />

          <button> Offer my help</button>
      
       </form>
      </div>
    )
}

export default PlantSitterForm;