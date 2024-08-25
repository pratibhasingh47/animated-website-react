import React, { useEffect, useState } from 'react';
import './Consult.css';
import consult from '../Images/consult.jpg'

function Consult() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const section = document.getElementById('consult-section');
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="consult-section" className={`consult ${isVisible ? 'animate' : ''}`}>
            <div className="consult-container">
                <div className="consult-image">
                    <img src={consult} alt="" />
                </div>
                <div className="consult-info">
                    <h2 className="consult-heading">How to Get Consulting Clients</h2>
                    <p className="consult-description">
                    Nibh venenatis cras sed felis eget velit aliquet sagittis id. Tellus pellentesque eu tincidunt tortor aliquam nulla.
                    </p>
                    <button className="consult-button">Learn More</button>
                </div>
            </div>
        </section>
    );
}

export default Consult;
