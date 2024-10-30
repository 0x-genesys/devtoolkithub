import React, { useState } from 'react';
import * as base32 from 'base32.js';
import { Helmet } from 'react-helmet';
import './base32.css'


function Base32Base64JAMEncoderDecoder() {
  const [base32Input, setBase32Input] = useState('');
  const [base32Output, setBase32Output] = useState('');
  const [base64Input, setBase64Input] = useState('');
  const [base64Output, setBase64Output] = useState('');
  const [jamInput, setJamInput] = useState('');
  const [jamOutput, setJamOutput] = useState('');

  // Base32 Encoding/Decoding
  const encodeBase32 = () => {
    const encoder = new base32.Encoder();
    const encoded = encoder.write(base32Input).finalize();
    setBase32Output(encoded);
  };

  const decodeBase32 = () => {
    try {
      const decoder = new base32.Decoder();
      const decoded = decoder.write(base32Input).finalize();
      setBase32Output(decoded); // Directly set the decoded string
    } catch (error) {
      setBase32Output('Invalid Base32 input');
    }
  };

  // Base64 Encoding/Decoding
  const encodeBase64 = () => {
    const encoded = btoa(unescape(encodeURIComponent(base64Input)));
    setBase64Output(encoded);
  };

  const decodeBase64 = () => {
    try {
      const decoded = atob(base64Input);
      setBase64Output(decoded);
    } catch (error) {
      setBase64Output('Invalid Base64 input');
    }
  };

  // JAM Encoding/Decoding
  const encodeJAM = () => {
    const jamEncoded = jamInput
      .split('')
      .map((char) => char.charCodeAt(0).toString(36)) // Convert each character to base36
      .join('.'); // Join with a separator
    setJamOutput(jamEncoded);
  };

  const decodeJAM = () => {
    try {
      const decoded = jamInput
        .split('.')
        .map((code) => String.fromCharCode(parseInt(code, 36))) // Convert from base36 back to characters
        .join('');
      setJamOutput(decoded);
    } catch (error) {
      setJamOutput('Invalid JAM input');
    }
  };

  return (
    <div className="encoder-decoder" id="Base32Base64">
      <Helmet>
        <title>Dev Toolkit Hub - Base32, Base64 & JAM Encoder/Decoder</title>
        <meta name="description" content="Online tools for encoding and decoding Base32, Base64, and JAM formats. Easily transform your text data." />
        <meta name="keywords" content="Base32, Base64, JAM, Encoder, Decoder, Online Tools" />
      </Helmet>
      <h2>Base32, Base64 & JAM Encoder/Decoder</h2>

      <h3>Base32 Encoder/Decoder</h3>
      <textarea
        className="input-textarea"
        value={base32Input}
        onChange={(e) => setBase32Input(e.target.value)}
        placeholder="Enter text for Base32"
        rows="4"
      />
      <button className="beautify-button" onClick={encodeBase32}>Encode Base32</button>
      <button className="beautify-button" onClick={decodeBase32}>Decode Base32</button>
      <pre className="output-text">{base32Output}</pre>

      <h3>Base64 Encoder/Decoder</h3>
      <textarea
        className="input-textarea"
        value={base64Input}
        onChange={(e) => setBase64Input(e.target.value)}
        placeholder="Enter text for Base64"
        rows="4"
      />
      <button className="beautify-button" onClick={encodeBase64}>Encode Base64</button>
      <button className="beautify-button" onClick={decodeBase64}>Decode Base64</button>
      <pre className="output-text">{base64Output}</pre>

      <h3>JAM Encoder/Decoder</h3>
      <textarea
        className="input-textarea"
        value={jamInput}
        onChange={(e) => setJamInput(e.target.value)}
        placeholder="Enter text for JAM"
        rows="4"
      />
      <button className="beautify-button" onClick={encodeJAM}>Encode JAM</button>
      <button className="beautify-button" onClick={decodeJAM}>Decode JAM</button>
      <pre className="output-text">{jamOutput}</pre>
    </div>
  );
}

export default Base32Base64JAMEncoderDecoder;
