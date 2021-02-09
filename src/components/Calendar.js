import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



const Calendar = ({ startDate, endDate, handleChangeDates }) => (

  <div>
    <label> Beginning date
    <DatePicker 
      name = "startDate"
      selected={startDate}
      selectsStart
      startDate={startDate}
      endDate={endDate}
      onChange={(date)=>handleChangeDates(date, "startDate")}
      dateFormat="dd/MM/yyyy"
      minDate={new Date()}
      placeholderText="Select Start Date"
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
      dateFormat="dd/MM/yyyy" 
      placeholderText="Select End Date"
    />
    </label>
  </div>
);

export default Calendar

