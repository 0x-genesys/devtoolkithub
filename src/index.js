import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import App from './App';


/**
 * always add after build to head of index.html in build folder -
 * 
 * <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5068876544306549"
       crossorigin="anonymous"></script>

  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-2XJ35XW9TN"></script>
  <script>
 **/
const root = createRoot(document.getElementById('root')); // Create a root
root.render(<App />); // Render your App component
