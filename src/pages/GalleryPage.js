// src/pages/GalleryPage.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ImageModal from '../components/ImageModal'; // Importe o modal

// --- 1. REMOVA TODAS AS IMPORTAÇÕES MANUAIS DE IMAGEM DAQUI ---
// import galleryImg1 from '../assets/gallery/foto1.jpg'; (REMOVIDO)
// import galleryImg2 from '../assets/gallery/foto2.jpg'; (REMOVIDO)
// etc...

// --- 2. ADICIONE ESTE BLOCO DE CÓDIGO "MÁGICO" ---

// Esta função usa o 'require.context' do Webpack para importar
// todos os arquivos de uma pasta que batem com a regex (filtros).
function importAll(r) {
  // r.keys() retorna um array com os nomes dos arquivos:
  // ex: ["./foto1.jpg", "./foto2.jpg"]
  // r(key) importa o arquivo e retorna o URL final dele
  return r.keys().map(r);
}

// Chame a função:
// '../assets/gallery' -> O caminho para a pasta, relativo a este arquivo
// false -> Não procurar em sub-pastas
// /\.(png|jpe?g|svg|gif)$/ -> O filtro (regex) para os tipos de arquivo
const galleryImages = importAll(
  require.context('../assets/galeria', false, /\.(png|jpe?g|svg|gif)$/)
);

// A variável 'galleryImages' agora é um array com os URLs de todas 
// as suas imagens, preenchido automaticamente!
// ex: ["/static/media/foto1.a8f56.jpg", "/static/media/foto2.b9g71.jpg"]

// --- 3. O RESTO DO SEU COMPONENTE FICA IDÊNTICO ---

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100, damping: 10 } }
  };

  return (
    <div className="pt-32 pb-16 px-6 min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto">
        
        <h1 className="text-4xl font-bold font-fredoka mb-10 text-center text-emerald-600">
          Nossa Galeria
        </h1>
        <p className="text-lg text-gray-700 mb-12 text-center max-w-2xl mx-auto">
          Momentos especiais que celebram o amor, o aprendizado e a esperança em nosso lar.
        </p>

        {/* Grade de Imagens (Não precisa mudar nada aqui) */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } } 
          }}
        >
          {/* O .map() agora usa o array preenchido automaticamente */}
          {galleryImages.map((imageUrl, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)" }}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer bg-white"
              onClick={() => setSelectedImage(imageUrl)}
            >
              <img 
                src={imageUrl} 
                alt={`Galeria ${index + 1}`} 
                className="w-full h-64 object-cover" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-opacity flex items-center justify-center">
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* O Modal de Imagem */}
        <ImageModal imageUrl={selectedImage} onClose={() => setSelectedImage(null)} />

      </div>
    </div>
  );
}