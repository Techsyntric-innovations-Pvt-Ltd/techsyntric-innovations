import React from 'react';
import './ServicePage.css';

const CloudServicesPage = () => {
    return (
        <div className="service-page">
            <section className="service-hero">
                <div className="container">
                    <div className="service-badge">☁️ Our Services</div>
                    <h1>Cloud <span className="text-gradient">Services</span></h1>
                    <p className="service-lead">
                        Build scalable, secure cloud infrastructure that grows with your business demands.
                    </p>
                </div>
            </section>

            <section className="section service-overview">
                <div className="container">
                    <div className="overview-grid">
                        <div className="overview-content">
                            <h2>Scalable Infrastructure</h2>
                            <p>
                                The cloud has revolutionized how businesses operate, offering unparalleled scalability, reliability, and cost efficiency. We design and implement cloud solutions using AWS, Azure, and Google Cloud to ensure your applications are always available and performing at their best.
                            </p>
                            <p>
                                From migration strategies to ongoing management, we provide end-to-end cloud services that reduce costs while improving performance and security.
                            </p>
                        </div>
                        <div className="features-list">
                            <div className="feature-item">
                                <div className="feature-icon">📈</div>
                                <div>
                                    <h4>Auto-Scaling</h4>
                                    <p>Handle traffic spikes effortlessly</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <div className="feature-icon">🔐</div>
                                <div>
                                    <h4>Enterprise Security</h4>
                                    <p>Bank-level security protocols</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <div className="feature-icon">💰</div>
                                <div>
                                    <h4>Cost Optimization</h4>
                                    <p>Reduce infrastructure costs by 40%</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <div className="feature-icon">⚡</div>
                                <div>
                                    <h4>High Availability</h4>
                                    <p>99.99% uptime guarantee</p>
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
                        <span className="tech-tag">AWS</span>
                        <span className="tech-tag">Google Cloud</span>
                        <span className="tech-tag">Azure</span>
                        <span className="tech-tag">Docker</span>
                        <span className="tech-tag">Kubernetes</span>
                        <span className="tech-tag">Terraform</span>
                    </div>
                </div>
            </section>

            <section className="section cta-section">
                <div className="container">
                    <div className="cta-box glass">
                        <h2>Ready to Move to the Cloud?</h2>
                        <p>Let's build a cloud infrastructure that scales with your ambitions.</p>
                        <a href="/contact" className="btn btn-primary btn-large">Start Your Project</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CloudServicesPage;
