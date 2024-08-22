import React, { useEffect, useState } from 'react';
import './GetInTouch.css';

function GetInTouch() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const section = document.getElementById('get-in-touch-section');
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
        <section id="get-in-touch-section" className={`get-in-touch ${isVisible ? 'animate' : ''}`}>
            <div className="get-in-touch-container">
                <div className="get-in-touch-left">
                    <h1 className="main-heading">Get In Touch</h1>
                    <h3 className="mini-heading">We'd love to hear from you</h3>
                    <p className="description">Feel free to reach out via our social channels or drop us a message directly.</p>
                    <div className="social-icons">
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-youtube"></i>
                    </div>
                </div>
                <div className="get-in-touch-right">
                    <input type="text" placeholder="Enter your name" />
                    <input type="email" placeholder="Enter valid email address" />
                    <textarea placeholder="Enter your message"></textarea>
                    <button type="submit">Submit</button>
                </div>
            </div>
        </section>
    );
}

export default GetInTouch;
