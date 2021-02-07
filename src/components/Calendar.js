import React , {useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function Calendar (props) {

const [startDate, setStartDate] = useState(new Date());
const [endDate, setEndDate] = useState(new Date());

// function handleClick(event) {
//     event.preventDefault();
//     console.log(`Request logged between ${startDate}, and ${endDate}`)
// }

function handleChangeDates(date, name) {
  if (name==="startDate") 
  {
    console.log(`Startdate:" ${startDate}`)
    setStartDate(date)
  }
  if (name==="endDate") 
  {
    console.log(`EndDate:" ${endDate}`)
    setEndDate(date)
  }
}

 return (
   <div>
    <form> 
      Timeframe
    <label> Beginning date
     <DatePicker 
       name = "startDate"
       selected={startDate}
       selectsStart
       startDate={startDate}
       endDate={endDate}
       onChange={(date)=>handleChangeDates(date, "startDate")}
      //  {date => setStartDate(date)}
     />
     </label>
     <label> End date
     <DatePicker
       name = "endDate"
       selected={endDate}
       selectsEnd
       startDate={startDate}
       endDate={endDate}
       minDate={startDate}
       onChange={(date)=>handleChangeDates(date, "endDate")}
       //{date => setEndDate(date)}
     />
     </label>
     {/* <button onClick={handleClick}> Save </button> */}
     </form>
   </div>
 );

}

export default Calendar

