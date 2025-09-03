// src/index.js
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Removed Navigate import
import { Toaster } from 'react-hot-toast';
import './index.css';
import Root from './Pages/Root';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import GenerateResume from './Pages/GenerateResume';
import WelcomeScreen from './Components/WelcomeScreen';
import GenerateCoverLetter from './Pages/GenerateCoverLetter';




createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Toaster />
            <Routes>
                <Route path="/" element={<WelcomeScreen />} /> {/* Welcome screen as initial route */}
                <Route path="/" element={<Root />}>
                    <Route path="home" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="services" element={<Services />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="generate-resume" element={<GenerateResume />} />
                    <Route path="generate-cover-letter" element={<GenerateCoverLetter />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
);