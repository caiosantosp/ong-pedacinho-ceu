// 1. Importe 'useState' e os ícones, incluindo o novo 'FaUniversity'
import React, { useState } from 'react';
import { FaCopy, FaCheck, FaUniversity } from 'react-icons/fa';

// Importe suas imagens
import logoPix from '../assets/logo-pix.png';
import qrCode from '../assets/pix-qrcode.png';

// --- Constantes com os dados (para facilitar a manutenção) ---
const BANK_DATA = {
  pixKey: "63.211.640/0001-60",
  banco: "Banco Cora (403)",
  agencia: "0001",
  conta: "6383170-7",
  razaoSocial: "Associação Para Crianças e Adolescentes Pedacinho do Céu",
  cnpj: "63.211.640/0001-60"
};

// --- Componente Auxiliar para Linhas Copiáveis ---
// (Criado para não repetir o código do botão de copiar)
const CopyableRow = ({ label, value, itemName, copiedItem, onCopy }) => {
  const isCopied = copiedItem === itemName;
  
  return (
    <div className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
      <div>
        <span className="text-gray-600 font-semibold block text-sm">{label}</span>
        <span className="text-lg font-bold text-gray-800">{value}</span>
      </div>
      <button
        onClick={() => onCopy(value, itemName)}
        className={`
          px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center gap-2
          ${isCopied ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}
        `}
      >
        {isCopied ? <FaCheck /> : <FaCopy />}
        {isCopied ? 'Copiado' : 'Copiar'}
      </button>
    </div>
  );
};


// --- Componente Principal da Página ---
export default function DoarPage() {
    // 2. Estado atualizado: armazena QUAL item foi copiado (null, 'pix', 'agencia', etc.)
    const [copiedItem, setCopiedItem] = useState(null);

    // 3. Função de cópia atualizada: aceita o texto e o "nome" do item
    const handleCopy = (text, itemName) => {
        navigator.clipboard.writeText(text);
        setCopiedItem(itemName);
        // Reseta o botão depois de 2 segundos
        setTimeout(() => setCopiedItem(null), 2000);
    };

    return (
        <div className="pt-32 pb-16 px-6 min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto">
                
                <h1 className="text-4xl font-bold font-fredoka mb-4 text-center">
                    Ajude a Reescrever Futuros
                </h1>
                <p className="text-lg text-gray-700 mb-10 text-center max-w-2xl mx-auto">
                    Sua doação transforma vidas. Escolha uma das formas de apoiar
                    a Pedacinho do Céu.
                </p>

                {/* Seção PIX (Refatorada para usar o novo estado) */}
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
                            <p className="text-lg font-bold text-gray-800 mb-4">{BANK_DATA.pixKey}</p>

                            {/* 4. Botão PIX atualizado */}
                            <button
                                onClick={() => handleCopy(BANK_DATA.pixKey, 'pix')} // Chama a nova função
                                className={`
                                    w-full flex items-center justify-center gap-3 px-6 py-3 rounded-lg font-semibold transition-all duration-300
                                    ${copiedItem === 'pix' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}
                                `}
                            >
                                {copiedItem === 'pix' ? ( // Verifica se 'pix' está copiado
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
                        <strong>Razão Social:</strong> {BANK_DATA.razaoSocial}<br/>
                        <strong>CNPJ:</strong> {BANK_DATA.cnpj}
                    </p>
                </div>
                
                {/* 5. NOVA SEÇÃO DE DEPÓSITO BANCÁRIO */}
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg mx-auto mt-10">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-3xl font-bold font-fredoka">Depósito / TED</h2>
                        <FaUniversity className="text-4xl text-gray-500" />
                    </div>

                    <div className="space-y-2">
                        
                        {/* Favorecido (estático) */}
                        <div className="py-3 border-b border-gray-100">
                            <span className="text-gray-600 font-semibold block text-sm">Favorecido</span>
                            <span className="text-lg font-bold text-gray-800">{BANK_DATA.razaoSocial}</span>
                        </div>

                        {/* Banco (estático) */}
                        <div className="py-3 border-b border-gray-100">
                            <span className="text-gray-600 font-semibold block text-sm">Banco</span>
                            <span className="text-lg font-bold text-gray-800">{BANK_DATA.banco}</span>
                        </div>
                        
                        {/* Linhas copiáveis usando o componente auxiliar */}
                        <CopyableRow
                            label="Agência"
                            value={BANK_DATA.agencia}
                            itemName="agencia"
                            copiedItem={copiedItem}
                            onCopy={handleCopy}
                        />
                        <CopyableRow
                            label="Conta Corrente"
                            value={BANK_DATA.conta}
                            itemName="conta"
                            copiedItem={copiedItem}
                            onCopy={handleCopy}
                        />
                        <CopyableRow
                            label="CNPJ"
                            value={BANK_DATA.cnpj}
                            itemName="cnpj_bank" // Nome único para este item
                            copiedItem={copiedItem}
                            onCopy={handleCopy}
                        />
                    </div>
                </div>
                
            </div>
        </div>
    );
}