import React, { useState } from 'react';

/**
 *  Answer A answers the question "How many days was the longest bullish (upward) trend within a given date range?"
 *  ● Definition of an upward trend shall be: “Closing price of day N is higher than closing price of day N-1”
 *  ● Read start date and end date of the date range from user input (or pass them as input parameters via the API if your MVP does not have an user interface).
 *  ● Both start and end date shall be included to the date range.
 *  ● Expected output: The max amount of days the stock price was increasing in a row
 */
export default function AnswerA({startDate, endDate, stocks}) {
  return (
    <div id="answer-a">
      <p>Answer A</p>
    </div>
  )
}