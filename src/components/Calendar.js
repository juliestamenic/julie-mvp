import React , {useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function Calendar () {

const [startDate, setStartDate] = useState(new Date());
const [endDate, setEndDate] = useState(new Date());

function handleClick(event) {
    event.preventDefault();
    console.log(`Request logged between ${startDate}, and ${endDate}`)
}


 return (
   <div>
    <form> Timeframe
    <label> Beginning date
     <DatePicker 
       selected={startDate}
       selectsStart
       startDate={startDate}
       endDate={endDate}
       onChange={date => setStartDate(date)}
     />
     </label>
     <label> End date
     <DatePicker
       selected={endDate}
       selectsEnd
       startDate={startDate}
       endDate={endDate}
       minDate={startDate}
       onChange={date => setEndDate(date)}
     />
     </label>
     <button onClick={handleClick}> Save </button>
     </form>
   </div>
 );

}

export default Calendar

