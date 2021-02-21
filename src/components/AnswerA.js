import React from 'react';
import Stock from "./Stock";

/**
 *  Answer A answers the question "How many days was the longest bullish (upward) trend within a given date range?"
 *  ● Definition of an upward trend shall be: “Closing price of day N is higher than closing price of day N-1”
 *  ● Read start date and end date of the date range from user input (or pass them as input parameters via the API if your MVP does not have an user interface).
 *  ● Both start and end date shall be included to the date range.
 *  ● Expected output: The max amount of days the stock price was increasing in a row
 */

export default function AnswerA({startDate, endDate, stocks}) {

  function calculateBullishTrend() {

    let sortedStocks = [];
    for (let i = 0; i < stocks.length-1; i++) {
      let splitStock = stocks[i].split(',');
      let oneStock = new Stock(new Date(splitStock[0]), parseFloat(splitStock[1].substring(2)), parseInt(splitStock[2].substring(1)),
        parseFloat(splitStock[3].substring(2)), parseFloat(splitStock[4].substring(2)), parseFloat(splitStock[5].substring(2)));
      sortedStocks.push(oneStock);
    }
    sortedStocks.sort((a, b) => (a.date > b.date) ? 1 : -1);

    let longestTrend = 0;
    let currentTrendLength = 0;
    let lastPrice = sortedStocks[0].close;
    for (let stock of sortedStocks) {
      if (stock.date >= startDate && stock.date <= endDate) {
        if (stock.close > lastPrice) {
          lastPrice = stock.close;
          currentTrendLength++;
        } else {
          lastPrice = stock.close;
          if (currentTrendLength > longestTrend) {
            longestTrend = currentTrendLength;
          }
          currentTrendLength = 0;
        }
      }
    }
    if (currentTrendLength > longestTrend) {
      longestTrend = currentTrendLength;
    }

    return (
      <div id="bullish">
        <p>LONGEST BULLISH TREND WAS {longestTrend}</p>
      </div>
    )
  }

  return (
    <div id="answer-a">
      {stocks && calculateBullishTrend()}
    </div>
  )
}