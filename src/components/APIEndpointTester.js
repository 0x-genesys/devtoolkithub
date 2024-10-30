// src/components/APIEndpointTester.js

import React, { useState } from 'react';
import '../APIEndpointTester.css'; // Use existing CSS

const APIEndpointTester = () => {
    const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/posts');
    const [method, setMethod] = useState('GET');
    const [headers, setHeaders] = useState('');
    const [body, setBody] = useState('');
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const handleRequest = async () => {
        setError(null);
        setResponse(null);

        try {
            // Parse headers if available; otherwise use empty object
            const parsedHeaders = headers ? JSON.parse(headers) : {};

            const options = {
                method,
                headers: parsedHeaders,
                body: method !== 'GET' ? body : null,
            };

            const res = await fetch(url, options);
            const text = await res.text();

            // Try to parse JSON; if it fails, display plain text
            try {
                const data = JSON.parse(text);
                setResponse(JSON.stringify(data, null, 2));
            } catch {
                setResponse(text);
            }
        } catch (err) {
            setError(`Error: ${err.message}`);
        }
    };

    const handleDownload = () => {
        if (!response) return; // Ensure there's a response to download

        const blob = new Blob([response], {
            type: response.startsWith('{') || response.startsWith('[')
                ? 'application/json'
                : 'text/html',
        });

        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `response.${blob.type === 'application/json' ? 'json' : 'html'}`;
        link.click();

        // Clean up the URL object after download
        URL.revokeObjectURL(link.href);
    };

    return (
        <div className="api-tester" id="APIEndpointTester">
            <h2>API Endpoint Tester</h2>
            <input
                type="text"
                placeholder="Enter API URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="api-input"
            />
            <select value={method} onChange={(e) => setMethod(e.target.value)} className="api-input">
                <option value="GET">GET</option>
                <option value="POST">POST</option>
                <option value="PUT">PUT</option>
                <option value="DELETE">DELETE</option>
            </select>
            <textarea
                placeholder='Headers (JSON format, e.g., {"Content-Type": "application/json"})'
                value={headers}
                onChange={(e) => setHeaders(e.target.value)}
                className="api-input"
            />
            {method !== 'GET' && (
                <textarea
                    placeholder="Request Body (for POST/PUT requests)"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    className="api-input"
                />
            )}
            <button onClick={handleRequest} className="api-button">Send Request</button>
            {response && (
                <button onClick={handleDownload} className="api-button download-button">
                    Download Response
                </button>
            )}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <pre className="api-response">{response}</pre>
        </div>
    );
};

export default APIEndpointTester;
