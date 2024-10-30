import React, { useState } from 'react';
import xmlFormatter from 'xml-formatter';
// import '../DataBeautifier.css'; // Import a separate CSS file for this component

function DataBeautifier() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [formatType, setFormatType] = useState('json'); // Default to JSON

  const beautifyData = () => {
    try {
      if (formatType === 'json') {
        const json = JSON.parse(input);
        setOutput(JSON.stringify(json, null, 2));
      } else if (formatType === 'xml') {
        const formattedXml = xmlFormatter(input, {
          indentation: '  ', // Two spaces for indentation
        });
        setOutput(formattedXml); // Use formatted XML directly
      }
    } catch (error) {
      setOutput('Invalid input');
    }
  };

  return (
    <div className="encoder-decoder" id="DataBeautifier">
      <h2>Data Beautifier (JSON/XML)</h2>
      <select onChange={(e) => setFormatType(e.target.value)} value={formatType}>
        <option value="json">JSON</option>
        <option value="xml">XML</option>
      </select>
      <textarea
        className="input-textarea"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter JSON or XML"
        rows="6"
      />
      <button className="beautify-button" onClick={beautifyData}>Beautify</button>
      <pre className="output-text">{output}</pre>
    </div>
  );
}

export default DataBeautifier;
