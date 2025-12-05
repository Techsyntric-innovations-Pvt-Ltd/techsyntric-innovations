import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import FAQ from './FAQ';
import NoticeBoard from './NoticeBoard';

const SERVICE_ID = "service_87qfzmm";
const TEMPLATE_ID = "template_vt0cl9v";
const PUBLIC_KEY = "7VyedEseXgLJy527f";

const Contact = () => {
    const formRef = useRef(null);
    const [isSending, setIsSending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then(() => {
                setIsSending(false);
                alert("Message sent successfully!");
                formRef.current.reset();
            })
            .catch((error) => {
                console.error("EmailJS Error:", error);
                setIsSending(false);
                alert("Something went wrong!");
            });
    };

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

                    {/* CONTACT FORM */}
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="contact-form glass animate-fade-up animate-delay-1"
                    >
                        <h3>Send us a message</h3>

                        {/* Your Name */}
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                required
                            />
                        </div>

                        {/* Your Email */}
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                required
                            />
                        </div>

                        {/* Your Message */}
                        <div className="form-group">
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows="5"
                                required
                            ></textarea>
                        </div>

                        {/* Hidden input for title because your template needs it */}
                        <input type="hidden" name="title" value="New Contact Message" />

                        {/* Hidden time field (emailJS template requires it) */}
                        <input type="hidden" name="time" value={new Date().toLocaleString()} />

                        <button type="submit" className="btn btn-primary">
                            {isSending ? "Sending..." : "Send Message"}
                        </button>
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