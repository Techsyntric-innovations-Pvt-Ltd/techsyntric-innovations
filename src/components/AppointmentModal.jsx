import React, { useState } from 'react';
import './AppointmentModal.css';

const AppointmentModal = ({ isOpen, onClose }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        service: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Appointment booked:', formData);
        // Here you would typically send the data to your backend
        setIsSubmitted(true);
    };

    const handleClose = () => {
        setIsSubmitted(false);
        setFormData({
            name: '',
            email: '',
            phone: '',
            date: '',
            time: '',
            service: '',
            message: ''
        });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={handleClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={handleClose}>&times;</button>

                {isSubmitted ? (
                    <div className="success-view">
                        <div className="success-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                        </div>
                        <h2>Booking Confirmed!</h2>
                        <p className="success-message">
                            Thank you, <strong>{formData.name}</strong>. Your appointment request has been received.
                            We will contact you shortly at <strong>{formData.email}</strong> to confirm the details.
                        </p>
                        <button className="btn btn-primary success-btn" onClick={handleClose}>
                            Done
                        </button>
                    </div>
                ) : (
                    <>
                        <h2>Book an Appointment</h2>
                        <p className="modal-subtitle">Fill out the form below and we'll get back to you shortly.</p>

                        <form onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Full Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Email *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Phone *</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        placeholder="+1 (555) 000-0000"
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Service *</label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select a service</option>
                                        <option value="web-development">Web Development</option>
                                        <option value="mobile-apps">Mobile Apps</option>
                                        <option value="cloud-solutions">Cloud Solutions</option>
                                        <option value="ai-ml">AI & Machine Learning</option>
                                        <option value="consulting">Consulting</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Preferred Date *</label>
                                    <input
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Preferred Time *</label>
                                    <input
                                        type="time"
                                        name="time"
                                        value={formData.time}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Additional Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    placeholder="Tell us more about your requirements..."
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary submit-btn">
                                Book Appointment
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default AppointmentModal;
