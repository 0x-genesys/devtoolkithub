import './jsonFormatter.css'; // Import a separate CSS file for this component

import React, { useState } from 'react';

function JSONFormatter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const formatJSON = () => {
    try {
      const json = JSON.parse(input);
      setOutput(JSON.stringify(json, null, 2));
    } catch (error) {
      setOutput('Invalid JSON');
    }
  };

  return (
    <div className="encoder-decoder" id="JSONFormatter">
      <h2>JSON Formatter</h2>
      <div className="input-container">
        <textarea
          className="input-textarea"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter JSON"
          rows="6"
          cols="50"
        />
        <button className="beautify-button" onClick={formatJSON}>Format JSON</button>
      </div>
      <pre className="output-text">{output}</pre>
    </div>
  );
}

export default JSONFormatter;
