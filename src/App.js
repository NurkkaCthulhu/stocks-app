import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import CSVloader from "./components/CSVloader.js";
import StocksTable from "./components/StocksTable.js";
import './css/App.css';
import "react-datepicker/dist/react-datepicker.css";

export default function App() {

  const [stocks, setStocks] = useState([]);
  const [csvTitles, setCsvTitles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [startDate, setStartDate] = useState(new Date(2000, 1, 1));
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="App">
      <h1>Statistics about Stock Prices</h1>
      <p>This stocks app follows Nasdaq's CSV file specifications. This means that the data should be in <br/><i>Date, Close/Last, Volume, Open, High, Low</i><br/>format. Start exploring stock statistics by loading a CSV file.</p>
      <CSVloader importFileContents={setStocks} setCsvTitles={setCsvTitles} setLoading={setLoading}/>
      <div className="date-picker">
        <span>Start date</span>
        <DatePicker selected={startDate} onChange={date => setStartDate(date)} maxDate={endDate}/>
      </div>
      <div className="date-picker">
        <span>End date</span>
        <DatePicker selected={endDate} onChange={date => setEndDate(date)} minDate={startDate}/>
      </div>
      {loading ?
        <div>
          <div className="loader"></div>
          <p>Loading...</p>
        </div>
        :
        <StocksTable stocks={stocks} csvTitles={csvTitles}/>
      }
    </div>
  );
}
