import  React from 'react';
import './StocksTable.css';

export default function StocksTable({stocks, csvTitles}) {

  function renderData() {
    return stocks.map((stock, index) => {
      stock = stock.split(',')
      const [ date, close, volume, open, high, low ] = stock;
      return (
        <tr key={index}>
          <td>{date}</td>
          <td>{close}</td>
          <td>{volume}</td>
          <td>{open}</td>
          <td>{high}</td>
          <td>{low}</td>
        </tr>
      )
    })
  }

  function renderTitles() {
    return csvTitles.map((key, index) => {
      return (
        <th key={index}>{key.toUpperCase()}</th>
      )
    })
  }

  return (
    <div>
      <table id="stocks">
        <thead>
          <tr>{renderTitles()}</tr>
        </thead>
        <tbody>
          {renderData()}
        </tbody>
      </table>
    </div>
  )
}