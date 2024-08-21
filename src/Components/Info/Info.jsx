import React, { useEffect, useState } from 'react';
import './Info.css';
import info from '../Images/info.jpg';

function Info() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const section = document.getElementById('info-section');
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
        <section id="info-section" className={`info ${isVisible ? 'animate' : ''}`}>
            <div className="info-left">
                <img src={info} alt="Info" />
            </div>
            <div className="info-right">
                <h2 className="info-heading">Diversity, Equity, and Inclusion</h2>
                <p className="info-description">
                Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.  
                </p>
                <button className="info-button">Learn More</button>
            </div>
        </section>
    );
}

export default Info;
