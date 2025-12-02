import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import './Hero.css';

const Hero = () => {
    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
        fetch('/Web Development.json')
            .then(res => res.json())
            .then(data => setAnimationData(data))
            .catch(err => console.error("Failed to load animation:", err));
    }, []);

    return (
        <section id="hero" className="hero">
            <div className="container hero-container">
                <div className="hero-content">


                    <h1 className="hero-title animate-fade-up animate-delay-1">
                        Transform Your Business
                        <br />
                        With <span className="text-gradient">Smart Solutions</span>
                    </h1>

                    <p className="hero-description animate-fade-up animate-delay-2">
                        We craft cutting-edge digital experiences that drive growth, enhance efficiency,
                        and position your business at the forefront of innovation in the modern era.
                    </p>

                    <div className="hero-cta animate-fade-up animate-delay-3">
                        <button className="btn btn-primary btn-large">
                            Get Started
                            <span className="btn-arrow">→</span>
                        </button>
                        <button className="btn btn-outline btn-large">
                            Watch Demo
                            <span className="play-icon">▶</span>
                        </button>
                    </div>

                    <div className="hero-stats animate-fade-up animate-delay-4">
                        <div className="stat-item">
                            <h3 className="stat-number">10+</h3>
                            <p className="stat-label">Projects Completed</p>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <h3 className="stat-number">98%</h3>
                            <p className="stat-label">Client Satisfaction</p>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <h3 className="stat-number">3+</h3>
                            <p className="stat-label">Years Experience</p>
                        </div>
                    </div>
                </div>

                <div className="hero-visual animate-fade-up animate-delay-2">
                    <div className="visual-wrapper">


                        <div className="center-graphic">
                            {animationData ? (
                                <Lottie animationData={animationData} loop={true} className="hero-lottie" />
                            ) : (
                                <>

                                    <div className="graphic-icon"></div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
