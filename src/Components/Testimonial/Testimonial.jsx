import React, { useEffect, useState } from 'react';
import './Testimonial.css';
import t1 from '../Images/t1.jpg';
import t2 from '../Images/t2.jpg';

function Testimonial() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const section = document.getElementById('testimonial-section');
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

    const testimonials = [
        {
            description: "This service has exceeded my expectations. The team was professional and attentive to all my needs.",
            name: "Celia Almeda",
            image: t1
        },
        {
            description: "A truly transformative experience. I would highly recommend their services to anyone looking to improve their well-being.",
            name: "Frank Kinney",
            image: t2
        },
        {
            description: "Their dedication and commitment to clients are unmatched. I feel more confident and healthier than ever.",
            name: "Charlie Brown",
            image: t1
        }
    ];

    return (
        <section id="testimonial-section" className={`testimonial ${isVisible ? 'animate' : ''}`}>
            <h2 className="testimonial-heading">Testimonials</h2>
            <p className="testimonial-text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit .</p>
            <div className="testimonial-cards">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-card">
                        <div className="apostrophe-icon">“</div>
                        <div className="testimonial-content">
                            <p className="testimonial-description">
                                "{testimonial.description}"
                            </p>
                            <div className="testimonial-footer">
                                <div className="testimonial-name">{testimonial.name}</div>
                                <div className="dp-circle">
                                    <img src={testimonial.image} alt={testimonial.name} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Testimonial;

