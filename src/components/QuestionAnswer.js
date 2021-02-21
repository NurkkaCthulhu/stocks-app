import React, { useState } from 'react';
import StocksTable from "./StocksTable";
import AnswerA from "./AnswerA";
import AnswerB from "./AnswerB";
import AnswerC from "./AnswerC";

/**
 *  QuestionAnswer handles what's shown in the "body" of the app. Currently possible values are TABLE, A, B and C.
 *  Table is mostly for debugging. A, B and C are components that show different stock statistics.
 */
export default function QuestionAnswer({stocks, csvTitles, view, startDate, endDate}) {

  return (
    <div id="question-answers">
      {view === "TABLE" && <StocksTable stocks={stocks} csvTitles={csvTitles}/>}
      {view === "A" && <AnswerA startDate={startDate} endDate={endDate} stocks={stocks}/>}
      {view === "B" && <AnswerB startDate={startDate} endDate={endDate} stocks={stocks}/>}
      {view === "C" && <AnswerC startDate={startDate} endDate={endDate} stocks={stocks}/>}
    </div>
  )
}