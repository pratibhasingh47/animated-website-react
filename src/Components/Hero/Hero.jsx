import React from 'react';
import './Hero.css';
import logo from '../Images/logo.png'; // Ensure you update the path to your logo

function Hero() {
    return (
        <section className="hero">
            <div className="hero-overlay">
                <img src={logo} alt="Logo" className="hero-logo" />
                <h1 className="hero-heading">Reinvent what your business could be</h1>
                <button className="hero-button">About Us</button>
            </div>
        </section>
    );
}

export default Hero;
