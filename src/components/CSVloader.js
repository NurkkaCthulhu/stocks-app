import React, { useState } from 'react';
import '../css/CSVLoader.css';

/**
 *  CSV loader is a reusable component that can be used to load CSV files.
 *  @param {function(Array[])} exportFileContents - Returns the found CSV file contents to the parent component as an array of data lines.
 *  @param {function(Array[])} exportCsvTitles    - Returns the found CSV file titles to the parent component as an array of found CSV titles.
 *  @param {function(boolean)} setLoading         - Sets the page status to loading in the parent component. Accepts boolean values.
 *  @param {string} [fileHeader=""]               - Defines whether the loaded CSV file should have some predefined header. Default value is "".
 */
export default function CSVloader({exportFileContents, exportCsvTitles, setLoading, fileHeader= ""}) {
  /**
   * @param csvFile - CSV file that the loader uses.
   */
  const [csvFile, setCsvFile] = useState(null);

  function selectCSV(e) {
    setCsvFile(e.target.files[0] ? e.target.files[0] : null);
  }

  function loadFile() {
    if (csvFile) {
      setLoading(true);
      const reader = new FileReader();

      reader.onerror = function(event) {
        alert('An error occurred. Please try again.')
        setLoading(false);
      };

      reader.onload = readFile;

      reader.readAsText(csvFile);
    }
  }

  function readFile(e) {
    let fileContent = e.target?.result?.split(/\r\n|\r|\n/g);
    let csv_titles = [];
    const results = [];

    if (fileContent) {
      if (fileHeader !== "") {
        if (fileContent[0] !== fileHeader) {
          alert("CSV file should have the defined header of " + fileHeader +". This was illegal.")
          return;
        }
        csv_titles = fileContent.splice(0,1)[0].split(',');
      }

      for (let line of fileContent) {
        results.push(line);
      }
      exportFileContents(results);
      exportCsvTitles(csv_titles);
      setLoading(false);
    } else {
      alert('Something went wrong, please try again.')
      setLoading(false);
    }
  }

  return (
    <div id="csv-loader">
      <input id="csv-input" type="file" accept=".csv" onInput={selectCSV}/>
      <button onClick={loadFile} disabled={csvFile === null}>Load data from selected CSV file</button>
    </div>
  )
}