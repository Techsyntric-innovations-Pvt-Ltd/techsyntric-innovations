import React, { useState, useEffect } from 'react';
import HeroBackground from './HeroBackground';
import './Hero.css';

const CountUp = ({ end, duration = 2000, suffix = '' }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime = null;
        let animationFrameId;

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = currentTime - startTime;
            const percentage = Math.min(progress / duration, 1);

            // Ease out function for smooth animation
            const easeOutQuad = (t) => t * (2 - t);
            const currentCount = Math.floor(easeOutQuad(percentage) * end);

            setCount(currentCount);

            if (progress < duration) {
                animationFrameId = requestAnimationFrame(animate);
            }
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameId);
    }, [end, duration]);

    return <span>{count}{suffix}</span>;
};

const Typewriter = ({ words, wait = 3000 }) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);

    useEffect(() => {
        if (index >= words.length) return;

        const currentWord = words[index];

        if (!reverse && subIndex === currentWord.length) {
            const timeout = setTimeout(() => {
                setReverse(true);
            }, wait);
            return () => clearTimeout(timeout);
        }

        if (reverse && subIndex === 0) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, reverse ? 75 : 150);

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, words, wait]);

    return (
        <span>
            {words[index].substring(0, subIndex)}
        </span>
    );
};

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <HeroBackground />
            <div className="container hero-container">
                <div className="hero-content">


                    <h1 className="hero-title animate-fade-up animate-delay-1">
                        Transform Your Business
                        <br />
                        With <span className="text-gradient">
                            <Typewriter words={["Smart Solutions", "Digital Innovation", "Creative Strategy", "Future Tech"]} />
                        </span>
                    </h1>

                    <p className="hero-description animate-fade-up animate-delay-2">
                        We craft cutting-edge digital experiences that drive growth, enhance efficiency,
                        and position your business at the forefront of innovation in the modern era.
                    </p>



                    <div className="hero-stats animate-fade-up animate-delay-4">
                        <div className="stat-item">
                            <h3 className="stat-number">
                                <CountUp end={10} suffix="+" duration={2000} />
                            </h3>
                            <p className="stat-label">Projects Completed</p>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <h3 className="stat-number">
                                <CountUp end={98} suffix="%" duration={2000} />
                            </h3>
                            <p className="stat-label">Client Satisfaction</p>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <h3 className="stat-number">
                                <CountUp end={3} suffix="+" duration={2000} />
                            </h3>
                            <p className="stat-label">Years Experience</p>
                        </div>
                    </div>
                </div>

                <div className="hero-visual animate-fade-up animate-delay-2">
                    {/* Visual content removed as per request */}
                </div>
            </div>
        </section>
    );
};

export default Hero;
