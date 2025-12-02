import React from 'react';
import './ServicePage.css';

const AISolutionsPage = () => {
    return (
        <div className="service-page">
            <section className="service-hero">
                <div className="container">
                    <div className="service-badge">🤖 Our Services</div>
                    <h1>AI <span className="text-gradient">Solutions</span></h1>
                    <p className="service-lead">
                        Transform your business with intelligent AI-powered solutions that automate processes and drive insights.
                    </p>
                </div>
            </section>

            <section className="section service-overview">
                <div className="container">
                    <div className="overview-grid">
                        <div className="overview-content">
                            <h2>Intelligent Automation</h2>
                            <p>
                                Artificial Intelligence is reshaping how businesses operate. From intelligent chatbots to predictive analytics, we help you leverage AI to make smarter decisions, automate repetitive tasks, and unlock valuable insights from your data.
                            </p>
                            <p>
                                Our AI solutions are tailored to your specific needs, using cutting-edge machine learning frameworks and natural language processing to deliver measurable business value.
                            </p>
                        </div>
                        <div className="features-list">
                            <div className="feature-item">
                                <div className="feature-icon">💬</div>
                                <div>
                                    <h4>Chatbots & Virtual Assistants</h4>
                                    <p>24/7 customer support automation</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <div className="feature-icon">📈</div>
                                <div>
                                    <h4>Pred ictive Analytics</h4>
                                    <p>Data-driven forecasting and insights</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <div className="feature-icon">🎯</div>
                                <div>
                                    <h4>Machine Learning Models</h4>
                                    <p>Custom ML solutions for your needs</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <div className="feature-icon">🔍</div>
                                <div>
                                    <h4>Computer Vision</h4>
                                    <p>Image recognition and processing</p>
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
                        <span className="tech-tag">TensorFlow</span>
                        <span className="tech-tag">PyTorch</span>
                        <span className="tech-tag">OpenAI</span>
                        <span className="tech-tag">Python</span>
                        <span className="tech-tag">scikit-learn</span>
                        <span className="tech-tag">Keras</span>
                    </div>
                </div>
            </section>

            <section className="section cta-section">
                <div className="container">
                    <div className="cta-box glass">
                        <h2>Ready to Embrace AI?</h2>
                        <p>Let's implement intelligent solutions that transform your business operations.</p>
                        <a href="/contact" className="btn btn-primary btn-large">Start Your Project</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AISolutionsPage;
