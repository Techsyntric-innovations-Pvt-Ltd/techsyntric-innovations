import React from 'react';
import './Testimonials.css';

const testimonials = [
    {
        name: 'Sarah Johnson',
        role: 'CEO, TechFlow',
        content: 'TechSyntric Innovations transformed our digital presence. Their team is professional, skilled, and incredibly creative. Highly recommended!',
        avatar: 'S'
    },
    {
        name: 'Michael Chen',
        role: 'CTO, DataSystems',
        content: 'The AI solution they built for us increased our efficiency by 40%. The code quality is top-notch and the support is exceptional.',
        avatar: 'M'
    },
    {
        name: 'Emily Davis',
        role: 'Founder, EcoStart',
        content: 'Working with TechSyntric was a breeze. They understood our vision perfectly and delivered a website that exceeded our expectations.',
        avatar: 'E'
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="testimonials section">
            <div className="container">
                <div className="section-header animate-fade-up">
                    <h2 className="section-title">Client <span className="text-gradient">Stories</span></h2>
                    <p className="section-subtitle">Don't just take our word for it. Here's what our partners say.</p>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((item, index) => (
                        <div key={index} className="testimonial-card glass animate-fade-up" style={{ animationDelay: `${index * 0.2}s` }}>
                            <div className="quote-icon">❝</div>
                            <p className="testimonial-content">{item.content}</p>
                            <div className="testimonial-author">
                                <div className="avatar">{item.avatar}</div>
                                <div>
                                    <h4>{item.name}</h4>
                                    <p>{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
