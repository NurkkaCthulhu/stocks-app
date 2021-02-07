import './App.css';
import  React, { useState } from 'react';
import CSVloader from "./CSVloader";
import StocksTable from "./StocksTable";

export default function App() {

  const [stocks, setStocks] = useState([]);
  const [csvTitles, setCsvTitles] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <div className="App">
      <h1>Statistics about Stock Prices</h1>
      <p>This stocks app follows Nasdaq's CSV file specifications. This means that the data should be in <br/><i>Date, Close/Last, Volume, Open, High, Low</i><br/>format. Start exploring stock statistics by loading a CSV file.</p>
      <CSVloader importFileContents={setStocks} setCsvTitles={setCsvTitles} setLoading={setLoading}/>
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
