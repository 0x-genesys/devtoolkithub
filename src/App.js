
import React from 'react';
import './App.css';
import JSONFormatter from './components/JSONFormatter';
import UUIDGenerator from './components/UUIDGenerator';
import TimestampConverter from './components/TimestampConverter';
import RegexTester from './components/RegexTester';
import DataBeautifier from './components/DataBeautifier';
import Base32Base64JAMEncoderDecoder from './components/Base32Base64JAMEncoderDecoder';
import { Helmet } from 'react-helmet';


function App() {
  return (

    <div>
      <header>
        <h1>Dev Toolkit Hub</h1>
        <p className="encoder-decoder">Your go-to site for developer tools!</p>
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
      </header>
      <main>
        <div className="App">
        <div className="left-ad">
          {/* Left Ad Placeholder */}
          <p>Left Ad Here</p>
        </div>
        <Base32Base64JAMEncoderDecoder />
        <JSONFormatter />
        <DataBeautifier />
        <UUIDGenerator />
        <TimestampConverter />
        <RegexTester />
        </div>
              <div className="ad right-ad">
        {/* Right Ad Placeholder */}
        <p>Right Ad Here</p>
      </div>

      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Dev Toolkit Hub. All rights reserved.</p>
      </footer>
    </div>
    
  );
}

export default App;
