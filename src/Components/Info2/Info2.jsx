import React, { useEffect, useState } from 'react';
import './Info2.css';

function Info2() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const section = document.getElementById('info2-section');
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
        <section id="info2-section" className={`info2 ${isVisible ? 'animate' : ''}`}>
            <div className="info2-content">
                <h1 className="info2-heading">Our goal is to create 360° Value</h1>
                <h2 className="info2-subheading">For all our stakeholders</h2>
                <button className="info2-button">Contact Us</button>
            </div>
        </section>
    );
}

export default Info2;
