import React , {useState} from 'react';
import CalendarSitter from "./CalendarSitter";
import BasicInfoForm from './BasicFormInfo'

function PlantSitterForm(props)  {

  const [name , setName] = React.useState('');
  const [location , setLocation] = React.useState('');
  const [phone , setPhone] = React.useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');


//Handle change for name and location
  function handleChange(event) {
    // console.log(event.target.value)
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
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

 //Calendar dates

function handleChangeDates(date, name) {
  if (name==="startDate") 
  {
    setStartDate(date)
    console.log(`Startdate:" ${startDate}`)
  }
  if (name==="endDate") 
  {
    console.log(`EndDate:" ${endDate}`)
    setEndDate(date)
  }
}

// Submitting the form
function handleSubmit(event) {
  event.preventDefault();
  // console.log(
  // `A request has been logged: 
  // From ${name${location} with phone ${phone} unavailable from ${startDate} to ${endDate}
  // `)
  let sitterData = {name, location, phone, startDate, endDate}
  props.addSitter(sitterData)
  console.log('sitterData: ', sitterData);
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
            name={name}
            handleChange = {handleChange}
            location = {location}
            phone = {phone}
          />
          <CalendarSitter
            startDate={ startDate }
            endDate={ endDate }
            handleChangeDates={ handleChangeDates }
          />
          <button type="submit"> Look for plants to sit in my city</button>
       </form>
      </div>
    )
}

export default PlantSitterForm;