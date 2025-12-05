import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './AppointmentModal.css';

function AppointmentModal({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        date: '',
        time: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                service: '',
                date: '',
                time: '',
                message: ''
            });

            // Auto close after 3 seconds
            setTimeout(() => {
                setSubmitStatus(null);
                onClose();
            }, 3000);
        }, 1500);
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="appointment-modal-overlay"
                    onClick={handleOverlayClick}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.div
                        className="appointment-modal"
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.3 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="appointment-modal-header">
                            <div className="appointment-modal-header-content">
                                <div className="appointment-modal-icon">📅</div>
                                <div>
                                    <h2 className="appointment-modal-title">Book an Appointment</h2>
                                    <p className="appointment-modal-subtitle">Schedule a consultation with our team</p>
                                </div>
                            </div>
                            <button className="appointment-modal-close" onClick={onClose} aria-label="Close">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>

                        <div className="appointment-modal-body">
                            {submitStatus === 'success' ? (
                                <div className="appointment-success">
                                    <div className="appointment-success-icon">✓</div>
                                    <h3 className="appointment-success-title">Appointment Requested!</h3>
                                    <p className="appointment-success-text">
                                        Thank you for booking an appointment. Our team will contact you shortly to confirm your schedule.
                                    </p>
                                </div>
                            ) : (
                                <form className="appointment-form" onSubmit={handleSubmit}>
                                    <div className="appointment-form-row">
                                        <div className="appointment-form-group">
                                            <label htmlFor="name" className="appointment-form-label">
                                                Full Name <span className="required">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="appointment-form-input"
                                                placeholder="Enter your full name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="appointment-form-group">
                                            <label htmlFor="email" className="appointment-form-label">
                                                Email Address <span className="required">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="appointment-form-input"
                                                placeholder="Enter your email address"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="appointment-form-row">
                                        <div className="appointment-form-group">
                                            <label htmlFor="phone" className="appointment-form-label">
                                                Phone Number <span className="required">*</span>
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                className="appointment-form-input"
                                                placeholder="+91 1234567890"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="appointment-form-group">
                                            <label htmlFor="company" className="appointment-form-label">
                                                Company Name
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                className="appointment-form-input"
                                                placeholder="Your Company Name"
                                                value={formData.company}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="appointment-form-group">
                                        <label htmlFor="service" className="appointment-form-label">
                                            Service Interested In <span className="required">*</span>
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            className="appointment-form-input"
                                            value={formData.service}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select a service</option>
                                            <option value="web-development">Web Development</option>
                                            <option value="mobile-app">Mobile App Development</option>
                                            <option value="cloud-solutions">Cloud Solutions</option>
                                            <option value="ai-ml">AI & ML</option>
                                            <option value="social-media">Social Media Posts</option>
                                            <option value="graphic-designer">Graphic Designer</option>
                                            <option value="consultation">General Consultation</option>
                                        </select>
                                    </div>

                                    <div className="appointment-form-row">
                                        <div className="appointment-form-group">
                                            <label htmlFor="date" className="appointment-form-label">
                                                Preferred Date <span className="required">*</span>
                                            </label>
                                            <input
                                                type="date"
                                                id="date"
                                                name="date"
                                                className="appointment-form-input"
                                                value={formData.date}
                                                onChange={handleChange}
                                                min={new Date().toISOString().split('T')[0]}
                                                required
                                            />
                                        </div>

                                        <div className="appointment-form-group">
                                            <label htmlFor="time" className="appointment-form-label">
                                                Preferred Time <span className="required">*</span>
                                            </label>
                                            <select
                                                id="time"
                                                name="time"
                                                className="appointment-form-input"
                                                value={formData.time}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">Select time</option>
                                                <option value="09:00">9:00 AM</option>
                                                <option value="10:00">10:00 AM</option>
                                                <option value="11:00">11:00 AM</option>
                                                <option value="12:00">12:00 PM</option>
                                                <option value="13:00">1:00 PM</option>
                                                <option value="14:00">2:00 PM</option>
                                                <option value="15:00">3:00 PM</option>
                                                <option value="16:00">4:00 PM</option>
                                                <option value="17:00">5:00 PM</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="appointment-form-group">
                                        <label htmlFor="message" className="appointment-form-label">
                                            Additional Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            className="appointment-form-input appointment-form-textarea"
                                            rows="4"
                                            placeholder="Tell us about your project or any specific requirements..."
                                            value={formData.message}
                                            onChange={handleChange}
                                        ></textarea>
                                    </div>

                                    <div className="appointment-form-actions">
                                        <button
                                            type="button"
                                            className="appointment-btn-secondary"
                                            onClick={onClose}
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className="appointment-btn-primary"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <span className="appointment-spinner"></span>
                                                    Booking...
                                                </>
                                            ) : (
                                                <>
                                                    Book Appointment
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default AppointmentModal;

