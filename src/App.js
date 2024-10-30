import React, { useEffect }  from 'react';
import './App.css';
import JSONFormatter from './components/JSONFormatter';
import UUIDGenerator from './components/UUIDGenerator';
import TimestampConverter from './components/TimestampConverter';
import RegexTester from './components/RegexTester';
import DataBeautifier from './components/DataBeautifier';
import Base32Base64JAMEncoderDecoder from './components/Base32Base64JAMEncoderDecoder';
import APIEndpointTester from './components/APIEndpointTester';
import ImageConverter from './components/ImageConverter';
import ColorPicker from './components/ColorPicker';
import RegexCheatSheet from './components/RegexCheatSheet';
import JWTDecoder from './components/JWTDecoder';
import { Helmet } from 'react-helmet';




function App() {


  // Function to handle smooth scrolling
  const handleScroll = (id) => {
    console.log(id)
    const element = document.getElementById(id);
    console.log(element)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="App">
      <header>

        <h1>Dev Toolkit Hub</h1>
        <p className="encoder-decoder" >Dev Toolkit Hub: Fast Access to Essential Developer Tools | Base32, Base64, JSON Formatter, API Tester & More – Navigate and Click to Start!</p>
        <Helmet>
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Dev Toolkit Hub",
                "url": "https://yourwebsite.com",
                "description": "Your go-to site for developer tools."
              }
            `}
          </script>
        </Helmet>
        <nav>
          <ul>
            <li><a href="#Base32Base64" onClick={() => handleScroll('Base32Base64')}>Base32/Base64/JAM</a></li>
            <li><a href="#JSONFormatter" onClick={() => handleScroll('JSONFormatter')}>JSON Formatter</a></li>
            <li><a href="#DataBeautifier" onClick={() => handleScroll('DataBeautifier')}>Data Beautifier</a></li>
            <li><a href="#APIEndpointTester" onClick={() => handleScroll('APIEndpointTester')}>API Endpoint Tester</a></li>
            <li><a href="#RegexCheatSheet" onClick={() => handleScroll('RegexCheatSheet')}>Regex Cheat Sheet</a></li>
            <li><a href="#ImageConverter" onClick={() => handleScroll('ImageConverter')}>Image Converter</a></li>
            <li><a href="#ColorPicker" onClick={() => handleScroll('ColorPicker')}>Color Picker</a></li>
            <li><a href="#JWTDecoder" onClick={() => handleScroll('JWTDecoder')}>JWT Decoder</a></li>
            <li><a href="#UUIDGenerator" onClick={() => handleScroll('UUIDGenerator')}>UUID Generator</a></li>
            <li><a href="#TimestampConverter" onClick={() => handleScroll('TimestampConverter')}>Timestamp Converter</a></li>
            <li><a href="#RegexTester" onClick={() => handleScroll('RegexTester')}>Regex Tester</a></li>
          </ul>
        </nav>
      </header>

      <main id="main">
        <div id="main-div">
          <JSONFormatter  />
          <DataBeautifier  />
          <JWTDecoder  />
          <UUIDGenerator  />
          <TimestampConverter />
          <Base32Base64JAMEncoderDecoder  />
          <RegexTester />
          <APIEndpointTester  />
          <ImageConverter  />
          <ColorPicker  />
          <RegexCheatSheet  />
        </div>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Dev Toolkit Hub. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
