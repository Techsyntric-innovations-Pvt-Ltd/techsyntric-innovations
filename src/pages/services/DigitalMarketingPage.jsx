import React from 'react';
import './ServicePage.css';

const DigitalMarketingPage = () => {
    return (
        <div className="service-page">
            <section className="service-hero">
                <div className="container">
                    <div className="service-badge">📈 Our Services</div>
                    <h1>Digital <span className="text-gradient">Marketing</span></h1>
                    <p className="service-lead">
                        Grow your online presence and reach your target audience with data-driven marketing strategies.
                    </p>
                </div>
            </section>

            <section className="section service-overview">
                <div className="container">
                    <div className="overview-grid">
                        <div className="overview-content">
                            <h2>Strategic Growth</h2>
                            <p>
                                In the digital age, visibility is everything. We help businesses grow their online presence through strategic digital marketing campaigns that combine SEO, SEM, content marketing, and social media to reach and engage your target audience.
                            </p>
                            <p>
                                Our data-driven approach ensures every marketing dollar delivers measurable results, from increased traffic to higher conversion rates and improved ROI.
                            </p>
                        </div>
                        <div className="features-list">
                            <div className="feature-item">
                                <div className="feature-icon">🔍</div>
                                <div>
                                    <h4>SEO Optimization</h4>
                                    <p>Rank higher in search results</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <div className="feature-icon">💰</div>
                                <div>
                                    <h4>PPC Campaigns</h4>
                                    <p>Targeted paid advertising</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <div className="feature-icon">📱</div>
                                <div>
                                    <h4>Social Media</h4>
                                    <p>Engage your audience effectively</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <div className="feature-icon">📊</div>
                                <div>
                                    <h4>Analytics & Reporting</h4>
                                    <p>Track performance and ROI</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section technologies-section">
                <div className="container">
                    <h2 className="section-title">Platforms We Master</h2>
                    <div className="tech-tags-list">
                        <span className="tech-tag">Google Ads</span>
                        <span className="tech-tag">Facebook Ads</span>
                        <span className="tech-tag">Google Analytics</span>
                        <span className="tech-tag">SEMrush</span>
                        <span className="tech-tag">Hubspot</span>
                        <span className="tech-tag">Mailchimp</span>
                    </div>
                </div>
            </section>

            <section className="section cta-section">
                <div className="container">
                    <div className="cta-box glass">
                        <h2>Ready to Boost Your Reach?</h2>
                        <p>Let's create marketing campaigns that deliver real, measurable growth.</p>
                        <a href="/contact" className="btn btn-primary btn-large">Start Your Project</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DigitalMarketingPage;
