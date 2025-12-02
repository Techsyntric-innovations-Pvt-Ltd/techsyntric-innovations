import React from 'react';
import './Contact.css';
import FAQ from './FAQ';
import NoticeBoard from './NoticeBoard';

const Contact = () => {
    return (
        <section id="contact" className="contact section">
            <div className="container">
                <div className="section-header animate-fade-up">
                    <h2 className="section-title">Get in <span className="text-gradient">Touch</span></h2>
                    <p className="section-subtitle">Ready to start your next project? Contact us today.</p>
                </div>

                <div className="contact-container">
                    <div className="contact-info animate-fade-up">
                        <div className="info-item glass">
                            <h3>📍 Location</h3>
                            <p>123 Innovation Drive, Tech City, TC 90210</p>
                        </div>
                        <div className="info-item glass">
                            <h3>📧 Email</h3>
                            <p>hello@infoquick.com</p>
                        </div>
                        <div className="info-item glass">
                            <h3>📞 Phone</h3>
                            <p>+1 (555) 123-4567</p>
                        </div>


                    </div>

                    <form className="contact-form glass animate-fade-up animate-delay-1">
                        <h3>Send us a message</h3>
                        <div className="form-group">
                            <input type="text" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Your Message" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>

                <div className="info-hub animate-fade-up animate-delay-2">
                    <div className="info-hub-grid">
                        <div className="faq-wrapper">
                            <FAQ />
                        </div>
                        <div className="notice-wrapper">
                            <NoticeBoard />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
