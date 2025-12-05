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

                        <div className="logo-text-container">
                            <span className="logo-main">Tech<span className="logo-highlight">Syntric</span></span>
                            <span className="logo-sub">INNOVATIONS</span>
                        </div>
                    </Link>

                    <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                        {isHome ? (
                            <>
                                <a href="#hero" onClick={() => scrollToSection('hero')}>Home</a>
                                <a href="#services" onClick={() => scrollToSection('services')}>Services</a>

                                <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
                            </>
                        ) : (
                            <>
                                <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                                <Link to="/#services" onClick={() => setIsOpen(false)}>Services</Link>

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
