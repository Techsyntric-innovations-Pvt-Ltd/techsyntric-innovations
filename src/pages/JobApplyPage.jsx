import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './JobApplyPage.css';

const JobApplyPage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const jobTitle = queryParams.get('job') || 'Senior React Developer';

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        linkedin: '',
        portfolio: '',
        position: jobTitle,
        experience: '',
        resume: null,
        coverLetter: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setFormData(prev => ({ ...prev, resume: e.target.files[0] }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                linkedin: '',
                portfolio: '',
                position: 'Senior React Developer',
                experience: '',
                resume: null,
                coverLetter: ''
            });
            console.log('Form submitted:', formData);
        }, 2000);
    };

    return (
        <div className="job-apply-page">
            <div className="container">
                <div className="apply-header animate-fade-up">
                    <h1>Join Our <span className="text-gradient">Team</span></h1>
                    <p>Take the next step in your career with TechSyntric Innovations.</p>
                </div>

                <div className="apply-content animate-fade-up animate-delay-1">
                    <div className="job-summary glass">
                        <h2>Applying for: <span className="highlight">{formData.position}</span></h2>
                        <div className="job-tags">
                            <span>Full Time</span>
                            <span>Remote / Hybrid</span>
                            <span>Experience: 3+ Years</span>
                        </div>
                        <p className="job-description">
                            We are looking for a passionate Senior React Developer to join our dynamic team.
                            You will be responsible for building high-performance web applications and
                            collaborating with cross-functional teams to define, design, and ship new features.
                        </p>
                    </div>

                    <form className="apply-form glass" onSubmit={handleSubmit}>
                        <h3>Application Form</h3>

                        <div className="form-section">
                            <h4>Personal Information</h4>
                            <div className="form-grid">
                                <div className="form-group">
                                    <label>Full Name *</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        placeholder="Enter your full name"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email Address *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Phone Number *</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Enter your phone number"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Experience (Years) *</label>
                                    <input
                                        type="number"
                                        name="experience"
                                        value={formData.experience}
                                        onChange={handleChange}
                                        placeholder="Enter your experience in years"
                                        min="0"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="form-section">
                            <h4>Professional Links</h4>
                            <div className="form-grid">
                                <div className="form-group">
                                    <label>LinkedIn Profile</label>
                                    <input
                                        type="url"
                                        name="linkedin"
                                        value={formData.linkedin}
                                        onChange={handleChange}
                                        placeholder="https://linkedin.com/in/..."
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Portfolio / GitHub</label>
                                    <input
                                        type="url"
                                        name="portfolio"
                                        value={formData.portfolio}
                                        onChange={handleChange}
                                        placeholder="https://github.com/..."
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="form-section">
                            <h4>Documents</h4>
                            <div className="form-group file-upload">
                                <label>Resume / CV *</label>
                                <div className="file-input-wrapper">
                                    <input
                                        type="file"
                                        id="resume"
                                        accept=".pdf,.doc,.docx"
                                        onChange={handleFileChange}
                                        required
                                    />
                                    <label htmlFor="resume" className="file-label">
                                        <span className="icon">📄</span>
                                        <span>{formData.resume ? formData.resume.name : "Upload Resume (PDF, DOC)"}</span>
                                    </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Cover Letter</label>
                                <textarea
                                    name="coverLetter"
                                    value={formData.coverLetter}
                                    onChange={handleChange}
                                    placeholder="Tell us why you're a great fit..."
                                    rows="5"
                                ></textarea>
                            </div>
                        </div>

                        <div className="form-actions">
                            <button
                                type="submit"
                                className={`btn btn-primary submit-btn ${isSubmitting ? 'submitting' : ''}`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit Application'}
                            </button>
                        </div>
                    </form>

                    {isSubmitted && (
                        <div className="modal-overlay animate-fade-in">
                            <div className="modal-content glass animate-scale-up">
                                <div className="success-icon">
                                    <svg viewBox="0 0 24 24" className="checkmark">
                                        <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="2" />
                                        <path d="M6 13l4 4 10-10" fill="none" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                </div>
                                <h3>Application Submitted!</h3>
                                <p>Thank you for your interest. We will review your application and get back to you shortly.</p>
                                <button onClick={() => setIsSubmitted(false)} className="btn btn-primary">Close</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default JobApplyPage;
