import  React, { useState, useEffect } from 'react';

export default function StocksTable({stocks}) {

  const [loading, setLoading] = useState(false)

  if (loading) {
    return (
      <div>
        <h1>Loading stocks...</h1>
      </div>
    )
  }

  return (
    <div id="stocks-table">
      <p>Stocks Table</p>
      <p>{stocks[0]}</p>
    </div>
  )
}