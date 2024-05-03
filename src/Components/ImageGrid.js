import React from 'react';
import './ImageGrid.css'; // Make sure to create this CSS file
import pro2 from "../images/Linkedin-Logo-2011-2019.png"
import pro1 from "../images/Netflix-Emblem.jpg"
import HTML from "../images/OIP.png"
import CSS from "../images/CSS-Logo.png"
import JS from "../images/JavaScript-logo.png"
import REACT from "../images/react-icon-221711.png"

const images = [
    { imageUrl: HTML, text: '75%' },
    { imageUrl: CSS, text: '80%' },
    { imageUrl: JS, text: '60%' },
    { imageUrl: REACT, text: '90%' },
    { imageUrl: pro1, text: '10%' },
    { imageUrl: pro1, text: '25%' },
    { imageUrl: pro1, text: '25%' },
    { imageUrl: pro1, text: '25%' },
    { imageUrl: pro1, text: '25%' },
    // Add more images as needed
];

const ImageGrid = () => {
    return (
        <div className='heading'>
        <h1 className='project-heading' >Skills</h1>
        <div><p>Place your cursor on the below skills to know the percentage.</p></div>
        <div className="image-grid">
            
            {images.map((image, index) => (
                <div className="image-container" key={index}>
                    <div className="image">
                        <img src={image.imageUrl} alt={`Image ${index + 1}`} />
                        <div className="overlay">
                            <p>{image.text}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div></div>
    );
};

export default ImageGrid;
