import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const servicesData = [
    {
        title: 'Web Development',
        description: 'Custom, responsive web apps engineered for performance, accessibility, and long-term growth.',
        link: '/services/web-development',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="service-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
        )
    },
    {
        title: 'Mobile App Development',
        description: 'Native and cross-platform applications that keep your customers connected on any device.',
        link: '/services/app-development',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="service-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12.01" y2="18"></line>
            </svg>
        )
    },
    {
        title: 'Cloud Solutions',
        description: 'Secure migrations, modern DevOps, and smart automation to keep your infrastructure agile.',
        link: '/services/cloud-services',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="service-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
            </svg>
        )
    },
    {
        title: 'AI & Machine Learning',
        description: 'Data-backed intelligence layers that streamline operations and unlock new revenue streams.',
        link: '/services/ai-solutions',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="service-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 14a4 4 0 1 1 4-4 4 4 0 0 1-4 4z"></path>
                <line x1="12" y1="2" x2="12" y2="6"></line>
                <line x1="12" y1="18" x2="12" y2="22"></line>
                <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
                <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
                <line x1="2" y1="12" x2="6" y2="12"></line>
                <line x1="18" y1="12" x2="22" y2="12"></line>
                <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
                <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
            </svg>
        )
    },
    {
        title: 'Digital Marketing',
        description: 'Narratives, visuals, and publishing rhythms that keep your community active and inspired.',
        link: '/services/digital-marketing',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="service-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 6l-9.5 9.5-5-5L1 18"></path>
                <path d="M17 6h6v6"></path>
            </svg>
        )
    },
    {
        title: 'Graphic Design',
        description: 'Brand systems, marketing collateral, and product assets crafted with consistent detail.',
        link: '/services/uiux-design',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="service-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                <path d="M2 2l7.586 7.586"></path>
                <circle cx="11" cy="11" r="2"></circle>
            </svg>
        )
    }
];

const Services = () => {
    return (
        <section id="services" className="services section">
            <div className="container">
                <div className="section-header animate-fade-up">
                    <h2 className="section-title">Our <span className="text-gradient">Services</span></h2>
                    <p className="section-subtitle">Comprehensive tech solutions to drive your business forward.</p>
                </div>

                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <Link
                            to={service.link}
                            key={index}
                            className="service-card animate-fade-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="service-icon-wrapper">
                                {service.icon}
                            </div>
                            <div className="service-content">
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">{service.description}</p>
                                <span className="service-learn-more">
                                    Learn more
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
