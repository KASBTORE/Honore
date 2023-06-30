import React, { useState } from 'react';

const PictureColorChanger = ({ image }) => {
    const [selectedColor, setSelectedColor] = useState('#000000');

    const handleColorChange = (event) => {
        setSelectedColor(event.target.value);
    };

    return (
        <div>
            <input type="color" value={selectedColor} onChange={handleColorChange} />
            <img src="http://res.cloudinary.com/dok0zmz2e/image/upload/v1686635683/Kabstore/rkitnuuxvohufaxzo4z1.jpg" style={{ filter: `sepia(100%) hue-rotate(180deg) saturate(200%) brightness(50%) contrast(200%) grayscale(10%) invert(10%) opacity(80%) drop-shadow(16px 16px 20px rgba(0, 0, 0, 0.5))`, mixBlendMode: 'screen', backgroundColor: selectedColor }} alt="Colorful Image" />
        </div>
    );
};

export default PictureColorChanger;
