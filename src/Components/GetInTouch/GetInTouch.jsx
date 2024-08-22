import React, { useEffect, useState } from 'react';
import './GetInTouch.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

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
                    <p className="heading1">Get In Touch</p>
                    <p className="heading2">Hey! We are looking forward to start a project with you!</p>
                    <p className="description">Etiam sit amet convallis erat – class aptent taciti sociosqu ad litora torquent per conubia! Maecenas gravida lacus. Lorem etiam sit amet convallis erat.</p>
                    <div className="social-icons">
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faYoutube} />
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
