import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



const CalendarSitter = ({ startDate, endDate, handleChangeDates }) => (

  <div> <p> Unavailabilities </p>
    <label> Start
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
      autoComplete="off"
    />
    </label>
    <label> End
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
      autoComplete="off"
    />
    </label>
  </div>
);

export default CalendarSitter