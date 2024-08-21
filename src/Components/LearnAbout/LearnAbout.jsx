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
                        <div className="point">Service 1</div>
                        <div className="point">Service 2</div>
                        <div className="point">Service 3</div>
                        <div className="point">Service 4</div>
                    </div>
                    <div className="column">
                        <div className="point">Service 5</div>
                        <div className="point">Service 6</div>
                        <div className="point">Service 7</div>
                        <div className="point">Service 8</div>
                    </div>
                    <div className="column">
                        <div className="point">Service 9</div>
                        <div className="point">Service 10</div>
                        <div className="point">Service 11</div>
                        <div className="point">Service 12</div>
                    </div>
                </div>
                <button className="learn-more-button">Learn More</button>
            </div>
        </section>
    );
}

export default LearnAbout;
