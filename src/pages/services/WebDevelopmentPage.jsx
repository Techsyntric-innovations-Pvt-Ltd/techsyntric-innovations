import React from 'react';
import './ServicePage.css';
import './WebDevelopmentHero.css';

const WebDevelopmentPage = () => {
    return (
        <div className="service-page" style={{ paddingTop: 0 }}>
            <section className="service-hero web-dev-hero-section">
                {/* Background Video Layer */}
                <video
                    className="hero-bg-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/hero-bg-pattern.png" /* This points to the clean image */
                >
                    {/* Placeholder for the user's video file */}
                    <source src="/web-dev-bg.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Overlay Layer */}
                <div className="hero-overlay"></div>

                {/* Content Layer */}
                <div className="service-hero-container">
                    <div className="service-badge">Our Services</div>
                    <h1>Web <span className="text-gradient">Development</span></h1>
                    <p className="service-lead">
                        Build powerful, scalable web applications that drive business growth and deliver exceptional user experiences.
                    </p>
                </div>
            </section>

            <section className="section service-overview">
                <div className="container">
                    <div className="overview-grid">
                        <div className="overview-content">
                            <h2>Crafting Digital Experiences</h2>
                            <p>
                                In today's digital-first world, your website is often the first point of contact with customers. We build custom web solutions using cutting-edge technologies like React, Next.js, and Node.js to ensure your online presence is fast, responsive, and SEO-optimized.
                            </p>
                            <p>
                                From simple landing pages to complex enterprise applications, our team delivers solutions that not only look great but also perform exceptionally. We focus on clean code, scalability, and maintainability to ensure your web application grows with your business.
                            </p>
                        </div>
                        <div className="features-list">
                            <div className="feature-item">
                                <div className="feature-icon">⚡</div>
                                <div>
                                    <h4>Lightning Fast</h4>
                                    <p>Optimized performance for instant loading</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <div className="feature-icon">📱</div>
                                <div>
                                    <h4>Fully Responsive</h4>
                                    <p>Perfect experience on all devices</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <div className="feature-icon">🔒</div>
                                <div>
                                    <h4>Secure & Reliable</h4>
                                    <p>Enterprise-grade security standards</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <div className="feature-icon">🎯</div>
                                <div>
                                    <h4>SEO Optimized</h4>
                                    <p>Built to rank high in search results</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section technologies-section">
                <div className="container">
                    <h2 className="section-title">Technologies We Use</h2>
                    <div className="tech-tags-list">
                        <span className="tech-tag">React</span>
                        <span className="tech-tag">Next.js</span>
                        <span className="tech-tag">Vue.js</span>
                        <span className="tech-tag">Node.js</span>
                        <span className="tech-tag">TypeScript</span>
                        <span className="tech-tag">GraphQL</span>
                        <span className="tech-tag">MongoDB</span>
                        <span className="tech-tag">PostgreSQL</span>
                    </div>
                </div>
            </section>

            <section className="section cta-section">
                <div className="container">
                    <div className="cta-box glass">
                        <h2>Ready to Build Your Website?</h2>
                        <p>Let's create a web presence that drives real results for your business.</p>
                        <a href="/contact" className="btn btn-primary btn-large">Start Your Project</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WebDevelopmentPage;
