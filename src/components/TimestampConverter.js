
import React, { useState } from 'react';

function TimestampConverter() {
  const [timestamp, setTimestamp] = useState('');
  const [date, setDate] = useState('');

  const convertToTimestamp = () => setTimestamp(Math.floor(new Date(date).getTime() / 1000));
  const convertToDate = () => setDate(new Date(timestamp * 1000).toLocaleString());

  return (
    <div className="encoder-decoder"  id="TimestampConverter">
      <h2>Timestamp Converter</h2>
      <input className="input-textarea" type="text" placeholder="Enter Unix Timestamp" onChange={(e) => setTimestamp(e.target.value)} />
      <button className="beautify-button"  onClick={convertToDate}>Convert to Date</button>
      <p>Date: {date}</p>
      <input className="input-textarea" type="text" placeholder="Enter Date (YYYY-MM-DD)" onChange={(e) => setDate(e.target.value)} />
      <button className="beautify-button"  onClick={convertToTimestamp}>Convert to Timestamp</button>
      <p>Timestamp: {timestamp}</p>
    </div>
  );
}

export default TimestampConverter;
