import React from 'react';
import './WhatWeDo.css';
import icon1 from '../Images/icon1.png';
import icon2 from '../Images/icon2.png';
import icon3 from '../Images/icon3.png';
import icon4 from '../Images/icon4.png';

function WhatWeDo() {
    return (
        <section className="what-we-do">
            <h2 className="what-we-do-heading">What We Do</h2>

            <div className="what-we-do-cards">
                <div className="card" style={{ '--animation-order': 1 }}>
                    <div className="card-icon">
                        <img src={icon1} alt="Icon 1" />
                    </div>
                    <h3 className="card-title">Research user needs</h3>
                    <p className="card-description">Discover pain points and understand user behaviour</p>
                </div>
                <div className="card" style={{ '--animation-order': 2 }}>
                    <div className="card-icon">
                        <img src={icon2} alt="Icon 2" />
                    </div>
                    <h3 className="card-title">Business Strategy</h3>
                    <p className="card-description">Validate ideas with an interactive prototype of your vision</p>
                </div>
                <div className="card" style={{ '--animation-order': 3 }}>
                    <div className="card-icon">
                        <img src={icon3} alt="Icon 3" />
                    </div>
                    <h3 className="card-title">Automation</h3>
                    <p className="card-description">Launch an MVP with a best in class user experience</p>
                </div>
                <div className="card" style={{ '--animation-order': 4 }}>
                    <div className="card-icon">
                        <img src={icon4} alt="Icon 4" />
                    </div>
                    <h3 className="card-title">Marketing</h3>
                    <p className="card-description">Become a category leader using designops and UX/UI design</p>
                </div>
            </div>
        </section>
    );
}

export default WhatWeDo;
