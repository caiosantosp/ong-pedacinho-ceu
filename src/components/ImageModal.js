// src/components/ImageModal.js
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa'; // Ícone de fechar

export default function ImageModal({ imageUrl, onClose }) {
  // Se não houver imageUrl, o modal não é renderizado
  if (!imageUrl) return null;

  return (
    // AnimatePresence permite animar componentes que são removidos do DOM
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[100] p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose} // Fecha o modal ao clicar fora da imagem
      >
        <motion.div
          className="relative max-w-4xl max-h-full flex justify-center items-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          onClick={(e) => e.stopPropagation()} // Impede que o clique na imagem feche o modal
        >
          <img 
            src={imageUrl} 
            alt="Imagem da Galeria" 
            className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-xl" 
          />
          
          {/* Botão de Fechar */}
          <button
            onClick={onClose}
            className="absolute -top-4 -right-4 bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition-colors duration-200"
            aria-label="Fechar"
          >
            <FaTimes size={20} />
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}