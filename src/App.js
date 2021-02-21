import React, { useState } from 'react';
import CSVloader from "./components/CSVloader.js";
import DateRangePicker from "./components/DateRangePicker";
import Nav from "./components/Nav";
import QuestionAnswer from "./components/QuestionAnswer";
import './css/App.css';
import "react-datepicker/dist/react-datepicker.css";



export default function App() {

  const [stocks, setStocks] = useState([]);
  const [csvTitles, setCsvTitles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [startDate, setStartDate] = useState(new Date(2000, 1, 1));
  const [endDate, setEndDate] = useState(new Date());
  const [activeView, setActiveView] = useState("TABLE");
  const stockTitles = "Date, Close/Last, Volume, Open, High, Low";

  return (
    <div className="App">
      <h1>Statistics about Stock Prices</h1>
      <p>This stocks app follows Nasdaq's CSV file specifications. This means that the data should be in <br/>
      <i>Date, Close/Last, Volume, Open, High, Low</i><br/>format. Start exploring stock statistics by loading a CSV file.</p>
      <CSVloader exportFileContents={setStocks} exportCsvTitles={setCsvTitles} setLoading={setLoading} fileHeader={stockTitles} />
      <DateRangePicker startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate}/>
      <Nav changeViewTo={setActiveView} currentView={activeView} />
      {loading ?
        <div>
          <div className="loader"></div>
          <p>Loading...</p>
        </div>
        :
        <QuestionAnswer stocks={stocks} csvTitles={csvTitles} view={activeView} startDate={startDate} endDate={endDate}/>
      }
    </div>
  );
}
