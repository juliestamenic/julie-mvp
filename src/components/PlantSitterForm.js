import React , {useState} from 'react';
import CalendarSitter from "./CalendarSitter";
import BasicInfoForm from './BasicFormInfo'
import { useHistory } from 'react-router-dom';


function PlantSitterForm(props)  {

  const [nameSitterValue , setNameSitterValue] = React.useState('');
  const [locationSitterValue , setLocationSitterValue] = React.useState('');
  // const [plantsSitter , setPlantsSitter] = useState(0);
  const [phoneSitterValue , setPhonesitterValue] = React.useState('');
  const [startDateSitterValue, setStartDateSitterValue] = useState('');
  const [endDateSitterValue, setEndDateSitterValue] = useState('');
  const history = useHistory();


//Handle change for name and location
  function handleChange(event) {
    // console.log(event.target.value)
    switch (event.target.name) {
      case "name":
        setNameSitterValue(event.target.value);
        break;
      case "location":
        setLocationSitterValue(event.target.value);
        break;
      case "phone":
        setPhonesitterValue(event.target.value);
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
    setStartDateSitterValue(date)
    console.log(`Startdate:" ${startDateSitterValue}`)
  }
  if (name==="endDate") 
  {
    console.log(`EndDate:" ${endDateSitterValue}`)
    setEndDateSitterValue(date)
  }
}

// Submitting the form
function handleSubmit(event) {
  event.preventDefault();
  // console.log(
  // `A request has been logged: 
  // From ${nameSitter} in ${locationSitter} with phone ${phoneSitter} unavailable from ${startDateSitter} to ${endDateSitter}
  // `)
  let sitterData = {nameSitter:nameSitterValue, locationSitter:locationSitterValue, phoneSitter:phoneSitterValue, startDateSitter:startDateSitterValue, endDateSitter:endDateSitterValue}
  //props.sitters=[...props.sitters, sitterData];
  props.addSitter(sitterData)
  console.log(props.addSitter, sitterData);
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
            name={nameSitterValue}
            handleChange = {handleChange}
            location = {locationSitterValue}
            phone = {phoneSitterValue}
          />
          <CalendarSitter
            startDate={ startDateSitterValue }
            endDate={ endDateSitterValue }
            handleChangeDates={ handleChangeDates }
          />
          <button type="submit"> Save My Profile and *See Matching Offers - Soon to be releaed*</button>
       
       </form>
       {/* <button onClick={(e) => history.push('/plant-sitting-requests')}>See all Offers</button> */}
      </div>
    )
}

export default PlantSitterForm;