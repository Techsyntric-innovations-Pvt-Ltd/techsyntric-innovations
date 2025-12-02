import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const servicesData = [
    {
        title: 'Web Development',
        description: 'Custom, responsive web apps engineered for performance, accessibility, and long-term growth.',
        link: '/services/web-development',
        side: 'left'
    },
    {
        title: 'Mobile App Development',
        description: 'Native and cross-platform applications that keep your customers connected on any device.',
        link: '/services/app-development',
        side: 'right'
    },
    {
        title: 'Cloud Solutions',
        description: 'Secure migrations, modern DevOps, and smart automation to keep your infrastructure agile.',
        link: '/services/cloud-services',
        side: 'left'
    },
    {
        title: 'AI & Machine Learning',
        description: 'Data-backed intelligence layers that streamline operations and unlock new revenue streams.',
        link: '/services/ai-solutions',
        side: 'right'
    },
    {
        title: 'Social Media Posts',
        description: 'Narratives, visuals, and publishing rhythms that keep your community active and inspired.',
        link: '/services/digital-marketing',
        side: 'left'
    },
    {
        title: 'Graphic Design',
        description: 'Brand systems, marketing collateral, and product assets crafted with consistent detail.',
        link: '/services/uiux-design',
        side: 'right'
    }
];

const processSteps = [
    { number: '01', title: 'Discovery', desc: 'We start by understanding your business goals and requirements.' },
    { number: '02', title: 'Strategy', desc: 'We develop a tailored roadmap and technical architecture.' },
    { number: '03', title: 'Design', desc: 'Our designers create intuitive and beautiful prototypes.' },
    { number: '04', title: 'Development', desc: 'We build your solution using clean, scalable code.' },
    { number: '05', title: 'Launch', desc: 'We deploy your project and ensure everything runs smoothly.' },
];

const Services = () => {
    return (
        <section id="services" className="services section">
            <div className="container">
                <div className="section-header animate-fade-up">
                    <h2 className="section-title">Our <span className="text-gradient">Services</span></h2>
                    <p className="section-subtitle">Comprehensive tech solutions to drive your business forward.</p>
                </div>

                <div className="services-timeline">
                    <div className="timeline-line"></div>
                    {servicesData.map((service, index) => (
                        <div key={index} className={`timeline-item timeline-item-${service.side} animate-fade-up`} style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="timeline-node"></div>
                            <Link to={service.link} className="service-card">
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">{service.description}</p>
                                <span className="service-learn-more">Learn more</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
