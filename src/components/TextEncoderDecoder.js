
import React, { useState } from 'react';

function TextEncoderDecoder() {
  const [input, setInput] = useState('');
  const [encoded, setEncoded] = useState('');
  const [decoded, setDecoded] = useState('');

  const encodeText = () => setEncoded(btoa(input));
  const decodeText = () => {
    try {
      setDecoded(atob(input));
    } catch (error) {
      setDecoded('Invalid Base64 string');
    }
  };

  return (
    <div className="encoder-decoder">
      <h2>Text BASE64 Encoder/Decoder</h2>
      <input className="input-textarea" type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter text" />
      <button className="beautify-button"  onClick={encodeText}>Encode</button>
      <button className="beautify-button"  onClick={decodeText}>Decode</button>
      <p>Encoded: {encoded}</p>
      <p>Decoded: {decoded}</p>
    </div>
  );
}

export default TextEncoderDecoder;
