import React from 'react';
import './TechStack.css';
import { FaAws } from 'react-icons/fa';
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiNodedotjs,
    SiPython,
    SiMongodb,
    SiDocker,
    SiGraphql,
    SiVuedotjs,
    SiAngular,
    SiDjango
} from 'react-icons/si';

const TechStack = () => {
    const technologies = [
        {
            name: 'React',
            color: '#61DAFB',
            icon: <SiReact />
        },
        {
            name: 'Next.js',
            color: '#000000',
            icon: <SiNextdotjs />
        },
        {
            name: 'TypeScript',
            color: '#3178C6',
            icon: <SiTypescript />
        },
        {
            name: 'Node.js',
            color: '#339933',
            icon: <SiNodedotjs />
        },
        {
            name: 'Python',
            color: '#3776AB',
            icon: <SiPython />
        },
        {
            name: 'MongoDB',
            color: '#47A248',
            icon: <SiMongodb />
        },
        {
            name: 'AWS',
            color: '#FF9900',
            icon: <FaAws />
        },
        {
            name: 'Docker',
            color: '#2496ED',
            icon: <SiDocker />
        },
        {
            name: 'GraphQL',
            color: '#E10098',
            icon: <SiGraphql />
        },
        {
            name: 'Vue.js',
            color: '#4FC08D',
            icon: <SiVuedotjs />
        },
        {
            name: 'Angular',
            color: '#DD0031',
            icon: <SiAngular />
        },
        {
            name: 'Django',
            color: '#092E20',
            icon: <SiDjango />
        },
    ];

    // Split technologies into two groups
    const firstRow = technologies.slice(0, Math.ceil(technologies.length / 2));
    const secondRow = technologies.slice(Math.ceil(technologies.length / 2));

    // Duplicate multiple times for seamless infinite loop
    const duplicatedFirstRow = [...firstRow, ...firstRow, ...firstRow, ...firstRow];
    const duplicatedSecondRow = [...secondRow, ...secondRow, ...secondRow, ...secondRow];

    return (
        <section className="tech-stack-section">
            <div className="container">
                <h2 className="tech-title">
                    Technologies We <span className="text-gradient">Master</span>
                </h2>
                <p className="tech-subtitle">
                    We leverage cutting-edge technologies and frameworks to build robust, scalable, and innovative solutions.
                </p>

                <div className="tech-sliders-container">
                    {/* First row - Right to Left */}
                    <div className="tech-slider-wrapper">
                        <div className="tech-slider tech-slider-left">
                            {duplicatedFirstRow.map((tech, index) => (
                                <div key={`first-${index}`} className="tech-item">
                                    <div className="tech-badge">
                                        <div className="tech-icon-wrapper" style={{ color: tech.color }}>
                                            {tech.icon}
                                        </div>
                                        <p className="tech-name">{tech.name}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Second row - Left to Right */}
                    <div className="tech-slider-wrapper">
                        <div className="tech-slider tech-slider-right">
                            {duplicatedSecondRow.map((tech, index) => (
                                <div key={`second-${index}`} className="tech-item">
                                    <div className="tech-badge">
                                        <div className="tech-icon-wrapper" style={{ color: tech.color }}>
                                            {tech.icon}
                                        </div>
                                        <p className="tech-name">{tech.name}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
