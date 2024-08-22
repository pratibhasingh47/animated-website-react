import React, { useEffect, useState } from 'react';
import './LearnAbout.css';

function LearnAbout() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const section = document.getElementById('learn-about-section');
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
        <section id="learn-about-section" className={`learn-about ${isVisible ? 'animate' : ''}`}>
            <div className="learn-about-container">
                <h2 className="mini-heading">Our Services</h2>
                <h1 className="main-heading">Learn About Our Practice Areas</h1>
                <div className="columns">
                    <div className="column">
                        <div className="point">Business Operations</div>
                        <div className="point">Company Transformation</div>
                        <div className="point">Idea Sketching</div>
                        <div className="point">Digital Solutions</div>
                    </div>
                    <div className="column">
                        <div className="point">
                            Marketing</div>
                        <div className="point">
                            Value Matrix
                        </div>
                        <div className="point">Corporate Travel</div>
                        <div className="point">Consulting</div>
                    </div>
                    <div className="column">
                        <div className="point">
                            Product Bootcamp</div>
                        <div className="point">Concept Design</div>
                        <div className="point">Experience Maps</div>
                        <div className="point">
                            Technology Solutions</div>
                    </div>
                </div>
                <button className="learn-more-button">Learn More</button>
            </div>
        </section>
    );
}

export default LearnAbout;
