import React from 'react';
import './Testimonials.css';

const testimonials = [
    {
        name: 'Priya Sharma',
        role: 'CEO, TechFlow',
        content: 'TechSyntric Innovations transformed our digital presence. Their team is professional, skilled, and incredibly creative. Highly recommended!',
        avatar: 'P'
    },
    {
        name: 'Rahul Verma',
        role: 'CTO, DataSystems',
        content: 'The AI solution they built for us increased our efficiency by 40%. The code quality is top-notch and the support is exceptional.',
        avatar: 'R'
    },
    {
        name: 'Anjali Gupta',
        role: 'Founder, EcoStart',
        content: 'Working with TechSyntric was a breeze. They understood our vision perfectly and delivered a website that exceeded our expectations.',
        avatar: 'A'
    },
    {
        name: 'Vikram Singh',
        role: 'Director, UrbanSoft',
        content: 'Their strategic approach to software development helped us scale rapidly. A truly reliable partner for any growing tech company.',
        avatar: 'V'
    },
    {
        name: 'Neha Patel',
        role: 'Product Lead, FinServe',
        content: 'Outstanding user experience design! Our customer engagement metrics improved significantly after the platform redesign.',
        avatar: 'N'
    }
];

const Testimonials = () => {
    // Repeated list for "infinite" feel (3 sets is usually enough buffer)
    const sliderContent = [...testimonials, ...testimonials, ...testimonials];
    const sliderRef = React.useRef(null);

    React.useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        const scrollAmount = 400 + 48; // Card width (400) + Gap (3rem ~ 48px)

        const interval = setInterval(() => {
            if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - scrollAmount) {
                // Approximate reset to start to maintain flow if needed, 
                // but for simple "slide... stop", just scrolling smoothly is fine.
                // Or smooth rewind: slider.scrollTo({ left: 0, behavior: 'smooth' });
                // But instantaneous loop is better:
                slider.scrollTo({ left: 0, behavior: 'auto' });
            } else {
                slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }, 3000); // 3 seconds pause ("ruk ruk ke")

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="testimonials" className="testimonials section">
            <div className="container">
                <div className="section-header animate-fade-up">
                    <h2 className="section-title">Client <span className="text-gradient">Stories</span></h2>
                    <p className="section-subtitle">Don't just take our word for it. Here's what our partners say.</p>
                </div>

                <div className="testimonials-slider" ref={sliderRef}>
                    <div className="testimonials-track">
                        {sliderContent.map((item, index) => (
                            <div key={index} className="testimonial-card glass">
                                <div className="quote-icon">❝</div>
                                <div className="stars">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="star">★</span>
                                    ))}
                                </div>
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
            </div>
        </section>
    );
};

export default Testimonials;
