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
      format={"dd MMMM"}
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
      format={"dd MMMM"}
    />
    </label>
  </div>
);

export default Calendar

