import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="container">
                    <div className="hero-badge">About Us</div>
                    <h1>Building the Future of <span className="text-gradient">Digital Innovation</span></h1>
                    <p className="hero-description">
                        We are a team of passionate engineers, designers, and innovators committed to transforming businesses through cutting-edge technology solutions.
                    </p>
                </div>
            </section>



            {/* Company Story */}
            <section className="section company-story">
                <div className="container">
                    <div className="story-grid">
                        <div className="story-content">
                            <h2>Our Story</h2>
                            <p>
                                Founded in 2020, TechSyntric Innovations emerged from a simple vision: to bridge the gap between complex technology and business success. What started as a small team of five developers has grown into a dynamic organization serving clients across the globe.
                            </p>
                            <p>
                                Today, we pride ourselves on delivering scalable, innovative solutions that drive real business outcomes. Our expertise spans web development, mobile applications, cloud infrastructure, and artificial intelligence.
                            </p>
                            <p>
                                Through dedication, innovation, and an unwavering commitment to excellence, we've built lasting partnerships with businesses ranging from ambitious startups to Fortune 500 companies.
                            </p>
                        </div>
                        <div className="stats-grid">
                            <div className="stat-card glass">
                                <h3>10+</h3>
                                <p>Projects Delivered</p>
                            </div>
                            <div className="stat-card glass">
                                <h3>10+</h3>
                                <p>Happy Clients</p>
                            </div>
                            <div className="stat-card glass">
                                <h3>5+</h3>
                                <p>Team Members</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section why-choose-us">
                <div className="container">
                    <h2 className="section-title">Why Choose TechSyntric?</h2>
                    <p className="section-subtitle">What sets us apart in the digital landscape</p>

                    <div className="features-grid">
                        <div className="feature-box">
                            <div className="feature-icon"></div>
                            <h4>Rapid Development</h4>
                            <p>Agile methodologies and modern frameworks enable us to deliver quality solutions faster without compromising on excellence.</p>
                        </div>
                        <div className="feature-box">
                            <div className="feature-icon"></div>
                            <h4>Enterprise Security</h4>
                            <p>Your data security is paramount. We implement industry-leading security practices and compliance standards in every project.</p>
                        </div>
                        <div className="feature-box">
                            <div className="feature-icon"></div>
                            <h4>Scalable Architecture</h4>
                            <p>Build for growth. Our solutions are designed to scale seamlessly as your business expands and evolves.</p>
                        </div>
                        <div className="feature-box">
                            <div className="feature-icon"></div>
                            <h4>Dedicated Support</h4>
                            <p>24/7 technical support and maintenance ensure your systems run smoothly and issues are resolved promptly.</p>
                        </div>
                        <div className="feature-box">
                            <div className="feature-icon"></div>
                            <h4>Cost-Effective</h4>
                            <p>Maximize ROI with efficient development processes and strategic technology choices that fit your budget.</p>
                        </div>
                        <div className="feature-box">
                            <div className="feature-icon"></div>
                            <h4>Continuous Innovation</h4>
                            <p>We stay ahead of technology trends, constantly learning and adopting new tools to keep you competitive.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="section core-values">
                <div className="container">
                    <h2 className="section-title">Our Core Values</h2>
                    <p className="section-subtitle">Principles that guide everything we do</p>

                    <div className="values-grid">
                        <div className="value-card">
                            <div className="value-number">01</div>
                            <h4>Innovation First</h4>
                            <p>We constantly push boundaries and embrace emerging technologies to deliver cutting-edge solutions that give you a competitive edge.</p>
                        </div>
                        <div className="value-card">
                            <div className="value-number">02</div>
                            <h4>Client Success</h4>
                            <p>Your success is our success. We go above and beyond to ensure every project exceeds expectations and delivers measurable results.</p>
                        </div>
                        <div className="value-card">
                            <div className="value-number">03</div>
                            <h4>Quality Excellence</h4>
                            <p>We maintain the highest standards in code quality, design, and delivery through rigorous testing and comprehensive review processes.</p>
                        </div>
                        <div className="value-card">
                            <div className="value-number">04</div>
                            <h4>Transparent Communication</h4>
                            <p>Open, honest communication builds trust. We keep you informed at every step with regular updates and clear documentation.</p>
                        </div>
                        <div className="value-card">
                            <div className="value-number">05</div>
                            <h4>Continuous Learning</h4>
                            <p>Technology evolves rapidly. We invest in our team's growth and skill development to stay ahead of industry trends.</p>
                        </div>
                        <div className="value-card">
                            <div className="value-number">06</div>
                            <h4>Sustainable Solutions</h4>
                            <p>We build for the long term, creating scalable, maintainable solutions that grow with your business and adapt to changing needs.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Approach */}
            <section className="section our-approach">
                <div className="container">
                    <h2 className="section-title">Our Approach</h2>
                    <p className="section-subtitle">A proven methodology for success</p>

                    <div className="approach-timeline">
                        <div className="timeline-item">
                            <div className="timeline-number">1</div>
                            <div className="timeline-content">
                                <h4>Discovery & Planning</h4>
                                <p>We begin by understanding your business goals, challenges, and requirements. Through detailed consultations, we create a comprehensive project roadmap.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-number">2</div>
                            <div className="timeline-content">
                                <h4>Design & Prototyping</h4>
                                <p>Our designers create intuitive, user-centered interfaces. We develop interactive prototypes to visualize the solution before development begins.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-number">3</div>
                            <div className="timeline-content">
                                <h4>Development & Testing</h4>
                                <p>Using agile methodologies, we build your solution iteratively with continuous testing. Regular demos keep you involved throughout the process.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-number">4</div>
                            <div className="timeline-content">
                                <h4>Deployment & Support</h4>
                                <p>We ensure smooth deployment and provide comprehensive training. Our ongoing support ensures your solution continues to perform optimally.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section cta-section">
                <div className="container">
                    <div className="cta-box glass">
                        <h2>Ready to Transform Your Business?</h2>
                        <p>Let's discuss how we can help you achieve your digital goals. Our team is ready to bring your vision to life.</p>
                        <div className="cta-buttons">
                            <a href="/contact" className="btn btn-primary btn-large">Get Started Today</a>
                            <a href="/#services" className="btn btn-outline btn-large">Explore Services</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
