// src/Components/WelcomeScreen.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomeScreen = () => {
    const [isVisible, setIsVisible] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            navigate('/home');
        }, 5000); // Adjust duration as needed

        return () => clearTimeout(timer);
    }, [navigate]);

    if (!isVisible) {
        return null;
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-base-200 z-50 animate-slow-fade-in">
            <h1 className="text-5xl font-bold text-gray-800 animate-shine">CVSculpt</h1>
        </div>
    );
};

export default WelcomeScreen;