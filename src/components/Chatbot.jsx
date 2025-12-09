import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Hi there! 👋 How can I help you with your tech needs today?", sender: 'bot' },
        { id: 10, text: "We specialize in Web Development, App Development, and Digital Marketing. Let us know what you're looking for!", sender: 'bot' }
    ]);
    const [inputText, setInputText] = useState('');
    const messagesEndRef = useRef(null);

    const containerRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        const handleScroll = () => {
            if (isOpen) setIsOpen(false);
        };

        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            window.addEventListener('scroll', handleScroll);
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const getBotResponse = (input) => {
        const lowerInput = input.toLowerCase();

        if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
            return "Hello! Welcome to TechSyntric. How can I assist you today?";
        } else if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('quote')) {
            return "Our pricing depends on the project scope. Please provide more details or contact us for a custom quote.";
        } else if (lowerInput.includes('service') || lowerInput.includes('web') || lowerInput.includes('app')) {
            return "We offer Web Development, Mobile App Development, and Digital Marketing services. Which one are you interested in?";
        } else if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('phone')) {
            return "You can reach us at techsyntricinnovations@gmail.com or call us at +91 9263066822.";
        } else if (lowerInput.includes('about') || lowerInput.includes('who')) {
            return "TechSyntric is a leading tech innovation company dedicated to transforming businesses with smart digital solutions.";
        } else {
            const botResponses = [
                "Thanks for reaching out! Our team will get back to you shortly.",
                "We specialize in creating stunning web experiences. How can we help you today?",
                "Could you provide more details about your project requirements?",
                "Our experts are ready to bring your ideas to life. Let's discuss!",
                "We offer custom software solutions tailored to your business needs.",
                "Feel free to check out our portfolio while you wait for a representative.",
                "We're excited to hear from you! A team member will be with you soon.",
                "Did you know we also offer mobile app development services?",
                "Your inquiry is important to us. We'll respond as soon as possible.",
                "Let's build something amazing together! What's on your mind?"
            ];
            return botResponses[Math.floor(Math.random() * botResponses.length)];
        }
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!inputText.trim()) return;

        // Add user message
        const userMessage = { id: Date.now(), text: inputText, sender: 'user' };
        setMessages(prev => [...prev, userMessage]);
        const currentInput = inputText; // Capture input for the closure
        setInputText('');

        // Simulate bot response
        setTimeout(() => {
            const responseText = getBotResponse(currentInput);
            const botResponse = {
                id: Date.now() + 1,
                text: responseText,
                sender: 'bot'
            };
            setMessages(prev => [...prev, botResponse]);
        }, 1000);
    };

    return (
        <div className="chatbot-container" ref={containerRef}>
            {isOpen && (
                <div className="chatbot-window">
                    <div className="chatbot-header">
                        <div className="bot-avatar">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
                                <path d="M12 22v-4" />
                                <path d="M12 18c-4.42 0-8-3.58-8-8a8 8 0 0 1 16 0c0 4.42-3.58 8-8 8z" />
                                <path d="M8 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                                <path d="M16 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                            </svg>
                        </div>
                        <div className="bot-info">
                            <h3>TechSyntric Assistant</h3>
                            <div className="bot-status">
                                <span className="status-dot"></span>
                                Online
                            </div>
                        </div>
                    </div>

                    <div className="chatbot-messages">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`message ${msg.sender}`}>
                                {msg.text}
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    <form className="chatbot-input" onSubmit={handleSendMessage}>
                        <input
                            type="text"
                            placeholder="Type a message..."
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                        />
                        <button type="submit" className="send-btn" disabled={!inputText.trim()}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                        </button>
                    </form>
                </div>
            )}

            <button className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                )}
            </button>
        </div>
    );
};

export default Chatbot;
