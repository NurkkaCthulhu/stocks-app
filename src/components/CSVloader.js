import React, { useState } from 'react';
import '../css/CSVLoader.css';

export default function CSVloader({importFileContents, setCsvTitles, setLoading}) {

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

    if (fileContent) {
      const csv_titles = fileContent.splice(0,1)[0].split(',');
      const results = [];

      for (let line of fileContent) {
        results.push(line);
      }
      importFileContents(results);
      setCsvTitles(csv_titles);
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