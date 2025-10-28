// src/components/Header.js
import React, { useState, useEffect } from 'react';
// 1. IMPORTE O useLocation
import { Link, useLocation } from 'react-router-dom';
import logoPadrao from '../assets/logo.png';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  // 2. DESCUBRA EM QUAL PÁGINA ESTAMOS
  const location = useLocation();
  const isHomePage = location.pathname === '/'; // true se for a Homepage

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 3. CRIE A LÓGICA DE TRANSPARÊNCIA CORRETA
  // O header só será transparente se:
  // (for a Homepage) E (o scroll for zero)
  const isTransparent = isHomePage && !isScrolled;

  return (
    // 4. APLIQUE A NOVA LÓGICA 'isTransparent'
    <header 
      className={`
        fixed w-full z-50 transition-colors duration-500
        ${isTransparent ? 'bg-transparent' : 'bg-white shadow-md'} 
      `}
      id="navbar"
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between p-3">
        
        <Link to="/">
          <img src={logoPadrao} alt="Logo Pedacinho do Céu" className="h-14 w-auto" />
        </Link>
        
        {/* 5. APLIQUE A LÓGICA 'isTransparent' AQUI TAMBÉM */}
        <ul className={`
          flex gap-6 
          ${isTransparent ? 'text-white' : 'text-gray-800'}
        `}>
          <li><Link to="/" className="hover:text-yellow-400 transition">Ínicio</Link></li>
          <li><Link to="/sobre" className="hover:text-yellow-400 transition">Sobre</Link></li>
          <li><Link to="/" className="hover:text-yellow-400 transition">Projetos</Link></li>
          <li><Link to="/" className="hover:text-yellow-400 transition">Parceiros</Link></li>
          <li><Link to="/doar" className="hover:text-yellow-400 transition">Doar</Link></li>
          <li><Link to="/" className="hover:text-yellow-400 transition">Contato</Link></li>
          <li><Link to="/" className="hover:text-yellow-400 transition">Brechó</Link></li>
          <li><Link to="/galeria" className="hover:text-yellow-400 transition">Galeria</Link></li>
        </ul>
      </nav>
    </header>
  );
}