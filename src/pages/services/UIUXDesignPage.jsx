import React from 'react';
import './ServicePage.css';

const UIUXDesignPage = () => {
    return (
        <div className="service-page">
            <section className="service-hero">
                <div className="container">
                    <div className="service-badge">🎨 Our Services</div>
                    <h1>UI/UX <span className="text-gradient">Design</span></h1>
                    <p className="service-lead">
                        Create intuitive, beautiful user experiences that delight customers and drive conversions.
                    </p>
                </div>
            </section>

            <section className="section service-overview">
                <div className="container">
                    <div className="overview-grid">
                        <div className="overview-content">
                            <h2>User-Centered Design</h2>
                            <p>
                                Great design is invisible. It guides users naturally, making complex interactions feel simple. Our design team crafts experiences that are not only visually stunning but also intuitive and accessible, converting visitors into loyal customers.
                            </p>
                            <p>
                                From wireframes to high-fidelity prototypes, we follow a user-centered design process that ensures every pixel serves a purpose and enhances the user experience.
                            </p>
                        </div>
                        <div className="features-list">
                            <div className="feature-item">
                                <div className="feature-icon">🎯</div>
                                <div>
                                    <h4>User Research</h4>
                                    <p>Data-driven design decisions</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <div className="feature-icon">✨</div>
                                <div>
                                    <h4>Modern Aesthetics</h4>
                                    <p>Beautiful, on-trend interfaces</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <div className="feature-icon">📱</div>
                                <div>
                                    <h4>Responsive Design</h4>
                                    <p>Perfect on every device</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <div className="feature-icon">♿</div>
                                <div>
                                    <h4>Accessibility First</h4>
                                    <p>Inclusive design for all users</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section technologies-section">
                <div className="container">
                    <h2 className="section-title">Tools We Use</h2>
                    <div className="tech-tags-list">
                        <span className="tech-tag">Figma</span>
                        <span className="tech-tag">Adobe XD</span>
                        <span className="tech-tag">Sketch</span>
                        <span className="tech-tag">InVision</span>
                        <span className="tech-tag">Framer</span>
                        <span className="tech-tag">Principle</span>
                    </div>
                </div>
            </section>

            <section className="section cta-section">
                <div className="container">
                    <div className="cta-box glass">
                        <h2>Ready to Transform Your UX?</h2>
                        <p>Let's create experiences that users love and remember.</p>
                        <a href="/contact" className="btn btn-primary btn-large">Start Your Project</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default UIUXDesignPage;
