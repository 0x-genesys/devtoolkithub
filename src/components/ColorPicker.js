// src/components/ColorPicker.js

import React, { useState } from 'react';
import './ColorPicker.css';


const ColorPicker = () => {
    const [color, setColor] = useState('#000000');

    const hexToRgb = (hex) => {
        let bigint = parseInt(hex.slice(1), 16);
        let r = (bigint >> 16) & 255;
        let g = (bigint >> 8) & 255;
        let b = bigint & 255;
        return `rgb(${r}, ${g}, ${b})`;
    };

    const rgbToHsl = (hex) => {
        let r = parseInt(hex.slice(1, 3), 16) / 255;
        let g = parseInt(hex.slice(3, 5), 16) / 255;
        let b = parseInt(hex.slice(5, 7), 16) / 255;
        let max = Math.max(r, g, b);
        let min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;
        if (max === min) {
            h = s = 0;
        } else {
            let d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            h = (max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4) * 60;
        }
        return `hsl(${Math.round(h)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
    };

    return (
        <div className="color-picker" id="ColorPicker">
            <h2>Color Code Converter</h2>
            <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
            <p>HEX: {color}</p>
            <p>RGB: {hexToRgb(color)}</p>
            <p>HSL: {rgbToHsl(color)}</p>
        </div>
    );
};

export default ColorPicker;
