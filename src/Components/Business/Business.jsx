import React, { useEffect, useState } from 'react';
import './Business.css';
import Bimg from '../Images/business.jpg';

function Business() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const section = document.getElementById('business-section');
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
        <section id="business-section" className={`business ${isVisible ? 'animate' : ''}`}>
            <div className="business-container">
                <div className="business-left">
                    <h2 className="business-heading">We build adjacent businesses to optimize our areas of expertise</h2>
                    <p className="business-description">
                        Elit sed vulputate mi sit amet mauris. Arcu odio ut sem nulla pharetra. Nisi scelerisque eu ultrices vitae. Dapibus ultrices in iaculis nunc sed augue lacus. Laoreet non curabitur gravida arcu ac. Eget velit aliquet sagittis id consectetur purus ut. Sit amet luctus venenatis lectus magna fringilla urna. Dolor morbi non arcu risus quis varius quam. Aenean sed adipiscing diam donec adipiscing tristique risus.
                    </p>
                    <button className="business-button">Learn More</button>
                </div>
                <div className="business-right">
                    <div className="business-image">
                        <img src={Bimg} alt="Business Image" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Business;
