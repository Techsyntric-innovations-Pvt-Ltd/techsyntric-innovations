import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AppointmentModal from './AppointmentModal';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        setIsOpen(false);
        if (!isHome) return; // Let Link handle navigation if not home
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const openAppointmentModal = () => {
        setIsOpen(false);
        setIsModalOpen(true);
    };

    return (
        <>
            <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
                <div className="container navbar-container">
                    <Link to="/" className="logo">
                        <div className="logo-icon">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 2L2 10V22L16 30L30 22V10L16 2Z" stroke="url(#logo-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M16 10V22" stroke="url(#logo-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10 13L16 16L22 13" stroke="url(#logo-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10 19L16 16L22 19" stroke="url(#logo-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <defs>
                                    <linearGradient id="logo-gradient" x1="2" y1="2" x2="30" y2="30" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#3b82f6" />
                                        <stop offset="1" stopColor="#8b5cf6" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className="logo-text-container">
                            <span className="logo-main">Tech<span className="logo-highlight">Syntric</span></span>
                            <span className="logo-sub">INNOVATIONS</span>
                        </div>
                    </Link>

                    <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                        {isHome ? (
                            <>
                                <a href="#hero" onClick={() => scrollToSection('hero')}>Home</a>
                                <div className="dropdown">
                                    <a href="#services" onClick={() => scrollToSection('services')} className="dropdown-trigger">
                                        Services <span className="arrow">▼</span>
                                    </a>
                                    <div className="dropdown-menu">
                                        <a href="#services" onClick={() => scrollToSection('services')}>Services</a>
                                        <Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
                                    </div>
                                </div>
                                <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
                            </>
                        ) : (
                            <>
                                <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                                <div className="dropdown">
                                    <Link to="/#services" onClick={() => setIsOpen(false)} className="dropdown-trigger">
                                        Services <span className="arrow">▼</span>
                                    </Link>
                                    <div className="dropdown-menu">
                                        <Link to="/#services" onClick={() => setIsOpen(false)}>Services</Link>
                                        <Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
                                    </div>
                                </div>
                                <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
                            </>
                        )}
                        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                        <button className="btn btn-primary mobile-btn" onClick={openAppointmentModal}>Book Appointment</button>
                    </div>

                    <div className="nav-actions">
                        <button className="btn btn-primary desktop-btn" onClick={openAppointmentModal}>Book Appointment</button>
                        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </nav>

            <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

export default Navbar;
