// src/components/ImageConverter.js
import './ImageConverter.css';

import React, { useState } from 'react';

const ImageConverter = () => {
    const [imageFile, setImageFile] = useState(null);
    const [outputFormat, setOutputFormat] = useState('base64');
    const [convertedImage, setConvertedImage] = useState('');
    const [downloadLink, setDownloadLink] = useState('');

    // Handle image file upload
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            setConvertedImage(''); // Reset previous conversions
        }
    };

    // Handle format change
    const handleFormatChange = (e) => {
        setOutputFormat(e.target.value);
    };

    // Convert the image based on the selected format
    const handleConvert = () => {
        if (!imageFile) return;

        const reader = new FileReader();

        reader.onload = (event) => {
            if (outputFormat === 'base64') {
                // Display as Base64
                setConvertedImage(event.target.result);
                setDownloadLink(event.target.result);
            } else {
                // Convert to desired image format and generate download link
                const img = new Image();
                img.src = event.target.result;
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    canvas.width = img.width;
                    canvas.height = img.height;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0);

                    const mimeType = `image/${outputFormat}`;
                    const dataUrl = canvas.toDataURL(mimeType);

                    setConvertedImage(dataUrl);
                    setDownloadLink(dataUrl);
                };
            }
        };

        // Read file as data URL for display and conversion
        reader.readAsDataURL(imageFile);
    };

    // Download the converted image
    const handleDownload = () => {
        if (!downloadLink) return;

        const link = document.createElement('a');
        link.href = downloadLink;
        link.download = `converted-image.${outputFormat === 'base64' ? 'txt' : outputFormat}`;
        link.click();
    };

    return (
        <div className="image-converter" id="ImageConverter">
            <h2>Image Converter</h2>
            <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="file-input"
            />
            <select value={outputFormat} onChange={handleFormatChange} className="format-select">
                <option value="base64">Base64</option>
                <option value="png">PNG</option>
                <option value="jpg">JPG</option>
                <option value="jpeg">JPEG</option>
            </select>
            <button onClick={handleConvert} className="convert-button">Convert</button>

            {convertedImage && (
                <div className="output-container">
                    {outputFormat === 'base64' ? (
                        <textarea
                            readOnly
                            value={convertedImage}
                            rows="6"
                            className="output-textarea"
                        />
                    ) : (
                        <img src={convertedImage} alt="Converted" className="output-image" />
                    )}
                    <button onClick={handleDownload} className="download-button">Download</button>
                </div>
            )}
        </div>
    );
};

export default ImageConverter;
