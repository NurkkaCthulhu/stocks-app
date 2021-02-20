import React from 'react';
import '../css/Nav.css';

/**
 *  Nav has buttons that change what's shown in the "body" of the app. Currently possible values are TABLE, A, B and C.
 *  Table is mostly for debugging. A, B and C are components that show different stock statistics.
 */
export default function Nav({changeViewTo, currentView}) {
  return (
    <div id="navigation">
      <button className={"nav-button " + (currentView === "TABLE" && "active")} onClick={() => changeViewTo("TABLE")}>Table</button>
      <button className={"nav-button " + (currentView === "A" && "active")} onClick={() => changeViewTo("A")}>Question A</button>
      <button className={"nav-button " + (currentView === "B" && "active")} onClick={() => changeViewTo("B")}>Question B</button>
      <button className={"nav-button " + (currentView === "C" && "active")} onClick={() => changeViewTo("C")}>Question C</button>
    </div>
  )
}