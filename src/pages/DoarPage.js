// src/pages/DoarPage.js
import React, { useState } from 'react'; // <-- 1. Importe useState
import { FaCopy, FaCheck } from 'react-icons/fa'; // <-- 2. Importe ícones

// 3. Importe suas imagens
import logoPix from '../assets/logo-pix.png';
import qrCode from '../assets/pix-qrcode.png';

export default function DoarPage() {
    // 4. Crie o estado para o botão de copiar
    const [copied, setCopied] = useState(false);
    const pixKey = "63.211.640/0001-60"; // Defina a chave PIX aqui

    // 5. Função para copiar o texto
    const handleCopy = () => {
        navigator.clipboard.writeText(pixKey);
        setCopied(true);
        // Reseta o botão depois de 2 segundos
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="pt-32 pb-16 px-6 min-h-screen bg-gray-50"> {/* Aumentei o padding-top */}
            <div className="max-w-4xl mx-auto">
                
                <h1 className="text-4xl font-bold font-fredoka mb-4 text-center">
                    Ajude a Reescrever Futuros
                </h1>
                <p className="text-lg text-gray-700 mb-10 text-center max-w-2xl mx-auto">
                    Sua doação transforma vidas. Escolha uma das formas de apoiar
                    a Pedacinho do Céu.
                </p>

                {/* Seção PIX Melhorada */}
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg mx-auto">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-3xl font-bold font-fredoka">Doação via PIX</h2>
                        <img src={logoPix} alt="Logo PIX" className="h-10" />
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-8">
                        
                        {/* QR Code */}
                        <div className="w-full md:w-1/2 flex justify-center">
                            <img src={qrCode} alt="QR Code PIX" className="w-52 h-52 border-4 border-gray-200 rounded-lg" />
                        </div>

                        {/* Informações e Botão */}
                        <div className="w-full md:w-1/2 text-center md:text-left">
                            <p className="text-gray-700 mb-4 text-lg">
                                Aponte a câmera do seu celular para o QR Code ou use o "Copia e Cola".
                            </p>
                            
                            <p className="text-gray-600 font-semibold">Chave PIX (CNPJ):</p>
                            <p className="text-lg font-bold text-gray-800 mb-4">63.211.640/0001-60</p>

                            {/* Botão Copia e Cola */}
                            <button
                                onClick={handleCopy}
                                className={`
                                    w-full flex items-center justify-center gap-3 px-6 py-3 rounded-lg font-semibold transition-all duration-300
                                    ${copied ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}
                                `}
                            >
                                {copied ? (
                                    <>
                                        <FaCheck />
                                        Chave Copiada!
                                    </>
                                ) : (
                                    <>
                                        <FaCopy />
                                        Copiar Chave PIX
                                    </>
                                )}
                            </button>
                        </div>
                    </div>

                    <p className="text-center text-gray-600 mt-8 pt-6 border-t border-gray-200">
                        <strong>Razão Social:</strong> Associação Para Crianças e Adolescentes Pedacinho do Céu<br/>
                        <strong>CNPJ:</strong> 63.211.640/0001-60
                    </p>
                </div>
                
                {/* Você pode adicionar outras formas de doação aqui */}
                
            </div>
        </div>
    );
}