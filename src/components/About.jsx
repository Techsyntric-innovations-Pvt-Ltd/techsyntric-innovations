import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about section">
            <div className="container">
                <div className="about-container">
                    <div className="about-image animate-fade-up">
                        <div className="image-wrapper">
                            <div className="placeholder-image">
                                <span>Innovation Hub</span>
                            </div>
                            <div className="experience-badge glass">
                                <span className="years">10+</span>
                                <span className="text">Years of<br />Excellence</span>
                            </div>
                        </div>
                    </div>
                    <div className="about-content animate-fade-up animate-delay-1">
                        <h2 className="section-title">About <span className="text-gradient">TechSyntric</span></h2>
                        <p className="about-text">
                            Founded with a vision to simplify technology for businesses, TechSyntric Innovations has grown into a leading software solutions provider. We believe in the power of code to transform operations and create new opportunities.
                        </p>
                        <p className="about-text">
                            Our team of passionate developers, designers, and strategists work collaboratively to deliver products that are not just functional, but exceptional. We stay ahead of the curve, adopting the latest technologies to ensure our clients always have a competitive edge.
                        </p>

                        <div className="values-grid">
                            <div className="value-card glass">
                                <h4> Mission</h4>
                                <p>To empower businesses with innovative digital solutions that drive growth.</p>
                            </div>
                            <div className="value-card glass">
                                <h4> Vision</h4>
                                <p>To be the global standard for excellence in software development.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
