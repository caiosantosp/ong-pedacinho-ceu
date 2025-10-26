import React from 'react';
import { Link } from 'react-router-dom'; // Importe o Link!
import logoPadrao from '../assets/logo.png'; // Ajuste o caminho se necessário

// Importe os ícones que vamos usar
import { FaInstagram, FaFacebook, FaChurch  } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="max-w-6xl mx-auto px-6">
                
                {/* Grade principal do rodapé */}
                <div className="grid md:grid-cols-3 gap-10">

                    {/* Coluna 1: Logo e Endereço */}
                    <div>
                        {/* Logo */}
                        <Link to="/" className="mb-4 inline-block">
                            <img src={logoPadrao} alt="Logo Pedacinho do Céu" className="h-12 w-auto" />
                        </Link>
                        
                        {/* Endereço correto */}
                        <p className="text-sm leading-relaxed mt-2">
                            Rua Celestial, 234 - Jardim Celeste<br />
                            Santana de Parnaíba - SP<br />
                            CEP: 06528-160
                        </p>
                    </div>

                    {/* Coluna 2: Navegação */}
                    <div>
                        <h5 className="text-white font-semibold mb-4 uppercase tracking-wider">Navegação</h5>
                        {/* Links corretos usando <Link> */}
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/#sobre" className="hover:text-yellow-400 transition">Sobre Nós</Link></li>
                            <li><Link to="/#impacto" className="hover:text-yellow-400 transition">Impacto Social</Link></li>
                            <li><Link to="/#projetos" className="hover:text-yellow-400 transition">Projetos</Link></li>
                            <li><Link to="/#contato" className="hover:text-yellow-400 transition">Contato</Link></li>
                            
                            {/* Link de Destaque */}
                            <li>
                                <Link to="/doar" className="text-yellow-400 font-bold hover:text-yellow-300 transition">
                                    Quero Ajudar (Doar)
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Coluna 3: Redes Sociais */}
                    <div>
                        <h5 className="text-white font-semibold mb-4 uppercase tracking-wider">Redes Sociais</h5>
                        <p className="text-sm mb-4">Siga-nos para acompanhar novidades e eventos.</p>
                        
                        {/* Ícones de redes sociais */}
                        <div className="flex space-x-5">
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram" className="text-gray-300 hover:text-yellow-400 transition">
                                <FaInstagram size={28} />
                            </a>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook" className="text-gray-300 hover:text-yellow-400 transition">
                                <FaFacebook size={28} />
                            </a>
                             <a href="https://www.adcajamar.com" target="_blank" rel="noopener noreferrer" title="AdCajamar" className="text-gray-300 hover:text-yellow-400 transition">
                                <FaChurch size={28} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Barra inferior: Direitos Autorais e Informações Legais */}
                <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400 space-y-2">
                    <p>
                        <strong>Associação Para Crianças e Adolescentes Pedacinho do Céu</strong>
                    </p>
                    <p>
                        CNPJ: 63.211.640/0001-60 | Associação Privada
                    </p>
                    <p className="pt-2">
                        {/* Pega o ano atual automaticamente */}
                        © {new Date().getFullYear()} Pedacinho do Céu. Todos os direitos reservados. Desenvolvido por Caio Rodrigues Software.
                    </p>
                </div>

            </div>
        </footer>
    );
}