import React , {useState} from 'react';
import CalendarSitter from "./CalendarSitter";
import BasicInfoForm from './BasicFormInfo'
import { useHistory } from 'react-router-dom';


function PlantSitterForm(props)  {

  const [nameSitter , setNameSitter] = React.useState('');
  const [locationSitter , setLocationSitter] = React.useState('');
  // const [plantsSitter , setPlantsSitter] = useState(0);
  const [phoneSitter , setPhonesitter] = React.useState('');
  const [startDateSitter, setStartDateSitter] = useState('');
  const [endDateSitter, setEndDateSitter] = useState('');
  const history = useHistory();


//Handle change for name and location
  function handleChange(event) {
    // console.log(event.target.value)
    switch (event.target.name) {
      case "name":
        setNameSitter(event.target.value);
        break;
      case "location":
        setLocationSitter(event.target.value);
        break;
      case "phone":
        setPhonesitter(event.target.value);
      break;
      default:
        break;
    }
 }

 //Plant counter
  // const addPlant = (event) => {
  //   event.preventDefault()
  //   setPlantsSitter(plantsSitter +1)
  // }

  // const removePlant = (event) => {
  //   event.preventDefault()
  //   setPlantsSitter(plantsSitter -1)
  // }

 //Calendar dates

function handleChangeDates(date, name) {
  if (name==="startDate") 
  {
    setStartDateSitter(date)
    console.log(`Startdate:" ${startDateSitter}`)
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
  // From ${nameSitter} in ${locationSitter} with phone ${phoneSitter} unavailable from ${startDateSitter} to ${endDateSitter}
  // `)
  let sitterData = {nameSitter, locationSitter, phoneSitter, startDateSitter, endDateSitter}
 console.log(sitterData)
  // props.onSearch(sitterData)
  // setLocationSitter("");
  // setNameSitter("");
  // setPhonesitter("")
  // setStartDateSitter("");
  // setEndDateSitter("")
}

    return (
      <div>
        <form onSubmit={handleSubmit}> 
          <BasicInfoForm
            name={nameSitter}
            handleChange = {handleChange}
            location = {locationSitter}
            phone = {phoneSitter}
          />
          <CalendarSitter
            startDate={ startDateSitter }
            endDate={ endDateSitter }
            handleChangeDates={ handleChangeDates }
          />
          <button onClick={handleSubmit}> Save My Profile</button>
       
       </form>
       <button onClick={(e) => history.push('/plant-sitting-requests')}>See current Offers</button>
      </div>
    )
}

export default PlantSitterForm;