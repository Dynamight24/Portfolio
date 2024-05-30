import React from 'react';
import './ImageGrid.css'; // Make sure to create this CSS file
import pro2 from "../images/Linkedin-Logo-2011-2019.png"
import pro1 from "../images/Netflix-Emblem.jpg"
import HTML from "../images/OIP.png"
import CSS from "../images/CSS-Logo.png"
import JS from "../images/JavaScript-logo.png"
import REACT from "../images/react-icon-221711.png"
import node from "../images/nodejs-45adbe594d.png"
import flutter from "../images/flutter.png"
import mongo from "../images/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png"
import firebase from "../images/firebase.png"
import web from "../images/web.png"

const images = [
    { imageUrl: HTML, text: '' },
    { imageUrl: CSS, text: '' },
    { imageUrl: JS, text: '' },
    { imageUrl: REACT, text: '' },
    { imageUrl: node, text: '' },
    { imageUrl: flutter, text: '' },
    { imageUrl: mongo, text: '' },
    { imageUrl: firebase, text: '' },
    { imageUrl: web, text: '' },
    // Add more images as needed
];

const ImageGrid = () => {
    return (
        <div className='heading'>
        <h1 className='project-heading' >Skills</h1>
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
