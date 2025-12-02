import React from 'react';
import './FAQ.css';

const FAQ = () => {
    return (
        <section className="faq-section">
            <div className="container">
                <div className="faq-content">
                    <h3>Frequently Asked Questions</h3>
                    <div className="faq-grid">
                        <details className="glass">
                            <summary>How long does a project take?</summary>
                            <p>Timelines vary by project scope, but typically 4-8 weeks for websites.</p>
                        </details>
                        <details className="glass">
                            <summary>Do you offer support?</summary>
                            <p>Yes, we offer ongoing maintenance and support packages.</p>
                        </details>
                        <details className="glass">
                            <summary>What technologies do you use?</summary>
                            <p>We use modern tech stacks including React, Node.js, Python, and cloud services.</p>
                        </details>
                        <details className="glass">
                            <summary>Can you help with digital marketing?</summary>
                            <p>Absolutely! We have a dedicated team for SEO, social media, and content marketing.</p>
                        </details>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
