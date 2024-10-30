
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function UUIDGenerator() {
  const [uuid, setUUID] = React.useState('');

  const generateUUID = () => {
    setUUID(uuidv4());
  };

  return (
    <div className="encoder-decoder" id="UUIDGenerator">
      <h2>UUID Generator</h2>
      <button className ="beautify-button" onClick={generateUUID}>Generate UUID</button>
      <p>{uuid}</p>
    </div>
  );
}

export default UUIDGenerator;
