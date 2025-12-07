import React, { useState } from 'react';
import './FAQ.css';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';

const faqData = [
    {
        question: "What services do you offer?",
        answer: "We offer a wide range of services including Web Development, App Development, AI Solutions, and UI/UX Design tailored to your business needs."
    },
    {
        question: "How much does a website cost?",
        answer: "The cost tailored to your specific requirements. We offer competitive pricing packages starting from basic landing pages to complex enterprise solutions. Contact us for a quote!"
    },
    {
        question: "Do you provide ongoing support?",
        answer: "Yes, we provide 24/7 support and maintenance services to ensure your digital products run smoothly and stay up-to-date."
    },
    {
        question: "How long does a project take?",
        answer: "Project timelines vary based on complexity. A standard website typically takes 2-4 weeks, while complex applications may take 8-12 weeks."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-container glass">
            <h3 className="faq-title">Frequently Asked Questions</h3>
            <div className="faq-list">
                {faqData.map((item, index) => (
                    <div
                        key={index}
                        className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className="faq-question">
                            <span>{item.question}</span>
                            {activeIndex === index ? <IoChevronUp /> : <IoChevronDown />}
                        </div>
                        <div className="faq-answer">
                            <p>{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
