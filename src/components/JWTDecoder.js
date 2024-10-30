// src/components/JWTDecoder.js

import React, { useState } from 'react';
import './jsonFormatter.css'; // Import a separate CSS file for this component



const JWTDecoder = () => {
    const [token, setToken] = useState('');
    const [decoded, setDecoded] = useState(null);

    const decodeJWT = (jwt) => {
        try {
            const base64Url = jwt.split('.')[1];
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            const jsonPayload = decodeURIComponent(
                atob(base64)
                    .split('')
                    .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
                    .join('')
            );
            return JSON.parse(jsonPayload);
        } catch (error) {
            return 'Invalid JWT';
        }
    };

    const handleDecode = () => {
        setDecoded(decodeJWT(token));
    };

    return (
        <div className="encoder-decoder" id="JWTDecoder">
            <h2>JWT Decoder</h2>
            <input className ="output-text" type="text" placeholder="Enter JWT" value={token} onChange={(e) => setToken(e.target.value)} />
            <button className ="beautify-button" onClick={handleDecode}>Decode</button>
            <pre>{decoded && JSON.stringify(decoded, null, 2)}</pre>
        </div>
    );
};

export default JWTDecoder;
