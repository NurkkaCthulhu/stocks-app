import './App.css';
import  React, { useState, useEffect } from 'react';
import CSVloader from "./CSVloader";
import StocksTable from "./StocksTable";

export default function App() {

  const [stocks, setStocks] = useState([])
  const [csvTitles, setCsvTitles] = useState([])

  return (
    <div className="App">
      <h1>Statistics about Stock Prices</h1>
      <p>This stocks app follows Nasdaq's CSV file specifications. This means that the data should be in the “Date, Close/Last, Volume, Open, High, Low" format. Start exploring stock statistics by loading a CSV file.</p>
      <CSVloader importFileContents={setStocks} getCSVTitles/>
      <StocksTable stocks={stocks}/>
    </div>
  );
}
