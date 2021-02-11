import React from 'react';
import DatePicker from "react-datepicker";
import '../css/DateRangePicker.css';

export default function DateRangePicker({startDate, setStartDate, endDate, setEndDate}) {
  return (
    <div id="date-selection">
      <div className="date-picker">
        <span>Start date </span>
        <DatePicker selected={startDate} onChange={date => setStartDate(date)} maxDate={endDate}/>
      </div>
      <div className="date-picker">
        <span>End date </span>
        <DatePicker selected={endDate} onChange={date => setEndDate(date)} minDate={startDate}/>
      </div>
    </div>
  )
}