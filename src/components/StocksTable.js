import React from 'react';
import '../css/StocksTable.css';

export default function StocksTable({stocks, csvTitles}) {

  function renderData() {
    return stocks.map((stock, index) => {
      if (stock !== "") {
        stock = stock.split(',');
        const [ date, close, volume, open, high, low ] = stock;
        return (
          <tr key={index + ("data")}>
            <td>{date}</td>
            <td>{close}</td>
            <td>{volume}</td>
            <td>{open}</td>
            <td>{high}</td>
            <td>{low}</td>
          </tr>
        )
      } else {
        stock ? console.log(stock) :
        <tr><td colSpan={6}>No stocks data in the file</td></tr>
      }
    })
  }

  function renderTitles() {
    return csvTitles.map((key, index) => {
      return (
        <th key={index}>{key.toUpperCase()}</th>
      )
    })
  }

  function renderTable() {
    return (
      <table id="stocks">
        <thead>
        <tr>{renderTitles()}</tr>
        </thead>
        <tbody>
        {renderData()}
        </tbody>
      </table>
    )
  }

  if(stocks.length === 0) {
    return (
      <div>
        <p>No stocks loaded</p>
      </div>
    )
  }

  return (
    <div id="stocks-table">
      <p>Table showing all the stocks found in the given CSV file.</p>
      {csvTitles[0]?.length > 0 ? renderTable()
      :
        <p>CSV file was empty</p>
      }
    </div>
  )
}