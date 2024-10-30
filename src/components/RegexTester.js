import './jsonFormatter.css'; // Import a separate CSS file for this component

import React, { useState } from 'react';

function RegexTester() {
  const [pattern, setPattern] = useState('');
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const testRegex = () => {
    try {
      const regex = new RegExp(pattern);
      setResult(text.match(regex) ? 'Match Found' : 'No Match');
    } catch (error) {
      setResult('Invalid Regex');
    }
  };

  return (
    <div className="encoder-decoder"  id="RegexTester">
      <h2>Regex Tester</h2>
      <input className = "output-text" type="text" placeholder="Enter Regex" value={pattern} onChange={(e) => setPattern(e.target.value)} />
      <input className = "output-text"  type="text" placeholder="Enter Text" value={text} onChange={(e) => setText(e.target.value)} />
      <button className="beautify-button" onClick={testRegex}>Test Regex</button>
      <p>{result}</p>
    </div>
  );
}

export default RegexTester;
