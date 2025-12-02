import React from 'react';
import Hero from './Hero';
import TrustedCompanies from './TrustedCompanies';
import Services from './Services';
import Testimonials from './Testimonials';
import TechStack from './TechStack';

const Home = () => {
    return (
        <>
            <Hero />
            <TrustedCompanies />
            <Services />
            <Testimonials />
            <TechStack />
        </>
    );
};

export default Home;
