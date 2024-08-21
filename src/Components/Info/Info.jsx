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
                <h2 className="info-heading">Our Vision</h2>
                <p className="info-description">
                    Discover our mission and the journey we are on to make a difference. Learn about our values and goals.
                </p>
                <button className="info-button">Learn More</button>
                <div className="circle1"></div>
                <div className="circle2"></div>
            </div>
        </section>
    );
}

export default Info;
