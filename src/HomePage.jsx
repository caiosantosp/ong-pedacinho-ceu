import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importe seu Layout
import Header from './components/Header';
import Footer from './components/Footer';

// Importe suas Páginas
import Home from './pages/Home';       // Seu 'LarClone.js' renomeado
import DoarPage from './pages/DoarPage'; // Sua nova página
import GalleryPage from './pages/GalleryPage';
import SobrePage from './pages/SobrePage';

export default function LarClone() {
    return (

        <BrowserRouter>
            <Header />

            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/doar" element={<DoarPage />} />
                    <Route path="/galeria" element={<GalleryPage />} /> 
                    <Route path="/sobre" element={<SobrePage />} /> 
                </Routes>
            </main>

            <Footer />
        </BrowserRouter>
    );
}