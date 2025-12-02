import React from 'react';
import './ServicePage.css';

const AppDevelopmentPage = () => {
    return (
        <div className="service-page">
            <section className="service-hero">
                <div className="container">
                    <div className="service-badge">📱 Our Services</div>
                    <h1>App <span className="text-gradient">Development</span></h1>
                    <p className="service-lead">
                        Create powerful mobile applications for iOS and Android that engage users and drive business success.
                    </p>
                </div>
            </section>

            <section className="section service-overview">
                <div className="container">
                    <div className="overview-grid">
                        <div className="overview-content">
                            <h2>Mobile-First Solutions</h2>
                            <p>
                                With billions of smartphone users worldwide, mobile apps are essential for reaching and engaging your audience. We specialize in creating native and cross-platform applications that deliver exceptional user experiences on both iOS and Android.
                            </p>
                            <p>
                                Using React Native and Flutter, we build apps that combine the best of native performance with cost-effective cross-platform development. Our apps are intuitive, fast, and designed to keep users coming back.
                            </p>
                        </div>
                        <div className="features-list">
                            <div className="feature-item">
                                <div className="feature-icon">🚀</div>
                                <div>
                                    <h4>Native Performance</h4>
                                    <p>Smooth, fast app experience</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <div className="feature-icon">🎨</div>
                                <div>
                                    <h4>Beautiful UI</h4>
                                    <p>Stunning, user-friendly interfaces</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <div className="feature-icon">🔄</div>
                                <div>
                                    <h4>Cross-Platform</h4>
                                    <p>One codebase for iOS & Android</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <div className="feature-icon">📊</div>
                                <div>
                                    <h4>Analytics Integration</h4>
                                    <p>Track user behavior and performance</p>
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
                        <span className="tech-tag">React Native</span>
                        <span className="tech-tag">Flutter</span>
                        <span className="tech-tag">Swift</span>
                        <span className="tech-tag">Kotlin</span>
                        <span className="tech-tag">Firebase</span>
                        <span className="tech-tag">Redux</span>
                    </div>
                </div>
            </section>

            <section className="section cta-section">
                <div className="container">
                    <div className="cta-box glass">
                        <h2>Ready to Launch Your App?</h2>
                        <p>Let's build a mobile experience that your users will love.</p>
                        <a href="/contact" className="btn btn-primary btn-large">Start Your Project</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AppDevelopmentPage;
