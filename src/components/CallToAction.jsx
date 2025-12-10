import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CallToAction.css';

const CallToAction = () => {
    const navigate = useNavigate();

    return (
        <div className="cta-section" id="call-to-action-isolation">
            <div className="cta-container">
                <div className="cta-text">
                    <h2>Which part of your organization would you like to improve today?</h2>
                </div>
                <button className="cta-button" onClick={() => navigate('/contact')}>
                    Get in touch
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default CallToAction;
