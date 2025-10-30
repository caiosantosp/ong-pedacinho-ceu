// src/pages/DoarPage.js

import React, { useState, useEffect } from 'react'; // Importa useState e useEffect
import { motion, AnimatePresence } from 'framer-motion'; // Importa AnimatePresence

// IMPORTS DE ASSETS EXISTENTES
import logoPadrao from '../assets/logo.png';
import projeto1 from '../assets/projeto1.jpeg';
import projeto2 from '../assets/projeto2.jpeg';
import projeto3 from '../assets/projeto3.jpeg';

// --- ATENÇÃO: NOVOS IMPORTS ---
// 1. Crie e importe sua FOTO da campanha de natal aqui
// (Exemplo: 'foto-natal.jpg' ou 'foto-natal.png')
import fotoNatal from '../assets/foto-natal.jpeg'; 

// 2. Importe seu VÍDEO da campanha de natal aqui
// (Exemplo: 'video-natal.mp4')
import videoNatal from '../assets/video-natal.mp4'; 
// ------------------------------

import {
     FaUserFriends,
    FaGraduationCap,
    FaHome,
    FaUtensils,
    FaComments,
    FaBrain,
    FaEnvelope,
    FaWhatsapp,
    FaTimes // Ícone para fechar o modal
} from 'react-icons/fa';


// --- NOVO COMPONENTE MODAL ---
// (Colocado fora do componente principal para melhor organização)
const ModalNatal = ({ onClose }) => {
    return (
        // O Backdrop (fundo escuro)
        <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose} // Fecha ao clicar no fundo
        >
            {/* O Conteúdo do Modal */}
            <motion.div
                className="bg-white rounded-lg shadow-2xl max-w-2xl w-full p-6 md:p-8 relative max-h-[90vh] overflow-y-auto" // Adicionado max-h e overflow
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()} // Impede de fechar ao clicar no conteúdo
            >
                {/* Botão de Fechar */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-2xl transition-colors z-10"
                    aria-label="Fechar modal"
                >
                    <FaTimes />
                </button>

                {/* Título */}
                <h2 className="text-3xl font-bold text-center mb-4 text-red-600 font-fredoka">
                    🎄 Nosso Natal Solidário! 🎄
                </h2>
                <p className="text-center text-gray-700 mb-6 text-lg">
                    Ajude a fazer a magia do Natal acontecer para nossas crianças. Sua doação se transforma em sorrisos!
                </p>

                {/* Container do Conteúdo (Foto e Vídeo) */}
                <div className="space-y-6 mb-8">
                    
                    {/* 1. Foto */}
                    <img
                        src={fotoNatal} // Sua foto importada
                        alt="Campanha de Natal Pedacinho do Céu"
                        className="w-full h-auto max-h-[300px] object-cover rounded-md shadow-lg"
                    />

                    {/* 2. VÍDEO (Tag <video> do HTML5) */}
                    <div className="w-full">
                        <video
                            className="w-full h-auto rounded-md shadow-lg"
                            src={videoNatal} // Seu vídeo importado
                            autoPlay  // Tenta iniciar o vídeo automaticamente
                            muted     // Necessário para o autoPlay funcionar na maioria dos navegadores
                            loop      // Faz o vídeo repetir
                            controls  // Mostra os controles (play, pause, volume)
                        >
                            Seu navegador não suporta a tag de vídeo.
                        </video>
                    </div>
                </div>

                {/* Botão de Ação (CTA) */}
                <motion.a
                    href="/doar" // Leva para a seção de doação
                    onClick={onClose}     // Também fecha o modal
                    whileHover={{ scale: 1.05 }}
                    className="w-full block text-center bg-green-600 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-green-700 transition-colors"
                >
                    Quero Ajudar Agora!
                </motion.a>
            </motion.div>
        </motion.div>
    );
};
// --- FIM DO COMPONENTE MODAL ---


export default function DoarPage() {
    
    // NOVO: Estado para controlar a visibilidade do modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    // --- MUDANÇA AQUI ---
    // NOVO: Lógica para mostrar o modal a CADA carregamento da página
    useEffect(() => {
        // Removemos a verificação do sessionStorage
        // Agora o modal vai aparecer sempre
        
        // Atraso de 1 segundo para não "pular" na cara do usuário
        const timer = setTimeout(() => {
            setIsModalOpen(true);
        }, 1000); // 1000ms = 1 segundo

        return () => clearTimeout(timer); // Limpa o timer se o componente desmontar
        
    }, []); // O array vazio [] faz isso rodar apenas uma vez, quando o componente é montado
    // --- FIM DA MUDANÇA ---


    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };
    const impactStats = [
        { icon: FaUserFriends, color: "text-red-500", stat: "0", label: "Crianças atendidas" },
        { icon: FaGraduationCap, color: "text-yellow-500", stat: "0", label: "Certificados Emitidos" },
        { icon: FaHome, color: "text-teal-600", stat: "0", label: "Comunidades Beneficiadas" },
        { icon: FaUtensils, color: "text-purple-600", stat: "0", label: "Refeições Servidas" },
        { icon: FaComments, color: "text-red-500", stat: "0", label: "Atendimentos Psicossocial" },
        { icon: FaBrain, color: "text-teal-600", stat: "0", label: "Atendimentos Psicológicos" }
    ];

    return (
        <div className="font-sans antialiased">
            
            {/* ======== NOVO: MODAL DE NATAL ======== */}
            <AnimatePresence>
                {isModalOpen && (
                    <ModalNatal onClose={() => setIsModalOpen(false)} />
                )}
            </AnimatePresence>
            {/* ======================================= */}


            {/* HERO SECTION */}
            <section className="relative h-[80vh] bg-hero-pattern bg-cover bg-center flex items-center justify-center">
                <div className="absolute inset-0 bg-black opacity-30" />
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 1 }} transition={{ duration: 1 }} className="text-center px-6">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Reescrevendo futuros</h1>
                    <p className="text-lg md:text-xl text-white mb-6 max-w-2xl mx-auto">Com fé e amor, acolhemos e educamos crianças em vulnerabilidade.</p>
                    <motion.div whileHover={{ scale: 1.05 }} className="flex justify-center gap-4">
                        <a href="#como-ajudar" className="bg-yellow-400 text-black px-6 py-3 rounded-md font-semibold">Como Ajudar</a>
                        <a href="#projetos" className="border border-white text-white px-6 py-3 rounded-md font-semibold">Conheça os projetos</a>
                    </motion.div>
                </motion.div>
            </section>

            {/* SOBRE / MISSÃO */}
            <section id="sobre" className="py-20 bg-gray-50">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                    <h3 className="text-3xl font-bold text-center mb-12 font-fredoka text-emerald-600">NOSSA HISTÓRIA</h3>
                    <div className="max-w-4xl mx-auto text-gray-700 space-y-6">
                        <p>A Pedacinho do Céu nasceu do sonho de um grupo de amigos que acreditava que cada criança merece amor, cuidado e oportunidade para crescer. Inspirados pela fé e pelo desejo de transformar vidas, começaram acolhendo crianças em situação de vulnerabilidade em sua comunidade.</p>
                        <p>Com o tempo, o projeto cresceu, incorporando educação, atividades culturais e apoio social, sempre guiados pelos valores de Deus.</p>
                        <p>Hoje, a Pedacinho do Céu é um espaço de esperança, aprendizado e alegria, onde crianças e adolescentes têm a chance de viver plenamente e construir um futuro cheio de possibilidades.</p>
                    </div>
                </motion.div>
            </section>

            {/* ======== IMPACTO SOCIAL ======== */}
            <motion.section
                id="impacto"
                className="py-20 bg-white"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="max-w-6xl mx-auto px-6">
                    <motion.h3
                        variants={itemVariants}
                        className="text-3xl font-bold text-center mb-12 font-fredoka text-teal-600"
                    >
                        IMPACTO SOCIAL
                    </motion.h3>

                    {/* Grid responsivo: 2 colunas no cel, 3 no tablet, 6 no PC */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

                        {/* Loop para criar os 6 itens */}
                        {impactStats.map((item, index) => {
                            const IconComponent = item.icon; // Pega o componente do ícone
                            return (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="text-center flex flex-col items-center"
                                >
                                    <IconComponent className={`text-5xl ${item.color}`} />
                                    <p className={`text-4xl font-bold mt-4 mb-2 ${item.color}`}>
                                        {item.stat}
                                    </p>
                                    <p className="text-gray-600 text-sm font-fredoka">{item.label}</p>
                                </motion.div>
                            );
                        })}

                    </div>
                </div>
            </motion.section>


            {/* PROJETOS */}
            <section id="projetos" className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    <h3 className="text-3xl font-bold text-center mb-12 text-emerald-600">
                        PROJETOS
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Projeto 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition"
                        >
                            <img
                                src={projeto1}
                                alt="Projeto 1"
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-4">
                                <h4 className="font-semibold text-lg mb-2">Reunião com a prefeitura</h4>
                                <p className="text-gray-600 text-sm">
                                    Em reunião com a prefeitura, apresentamos nosso primeiro projeto voltado a engajar a comunidade e incentivar o apoio à causa da Pedacinho do Céu, fortalecendo nossa missão de transformar vidas por meio do amor, fé e educação.
                                </p>
                            </div>
                        </motion.div>

                        {/* Projeto 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition"
                        >
                            <img
                                src={projeto2}
                                alt="Projeto 2"
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-4">
                                <h4 className="font-semibold text-lg mb-2">Primeira Reunião de equipe</h4>
                                <p className="text-gray-600 text-sm">
                                    Realizamos nossa primeira reunião de equipe, alinhando sonhos, propósitos e ações para fortalecer a missão da Pedacinho do Céu e impactar ainda mais vidas com fé, amor e dedicação.
                                </p>
                            </div>
                        </motion.div>

                        {/* Projeto 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition"
                        >
                            <img
                                src={projeto3}
                                alt="Projeto 3"
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-4">
                                <h4 className="font-semibold text-lg mb-2">Palestra sobre o Autismo</h4>
                                <p className="text-gray-600 text-sm">
                                    No dia 19/07, aconteceu a palestra “Entendendo o Autismo na Infância”, com a palestrante Giovanna Batista. Foi um momento enriquecedor de aprendizado e conscientização sobre o Transtorno do Espectro Autista (TEA), promovendo inclusão e compreensão na nossa comunidade.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA / DOAR */}
            <section id="como-ajudar" className="py-20 bg-white text-center">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 text-emerald-600">DOE E REESCREVA FUTUROS</h3>
                    <p className="text-gray-700 mb-6 max-w-xl mx-auto">Sua contribuição transforma vidas. Descubra as formas de ajudar e faça parte das ações da Pedacinho do Céu.</p>
                    <motion.a href="/doar" whileHover={{ scale: 1.05 }} className="bg-green-600 text-white px-8 py-4 rounded-md font-semibold">Quero ajudar</motion.a>
                </motion.div>
            </section>

            {/* PARCEIROS */}
            <section id="parceiros" className="py-20 bg-gray-50 text-center"> {/* Fundo levemente cinza para alternar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-6xl mx-auto px-4"
                >
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 text-emerald-600">QUEM CAMINHA CONOSCO</h3>
                    <p className="text-gray-700 mb-16 max-w-2xl mx-auto">Empresas que acreditam em nosso impacto e investem na transformação social da nossa comunidade.</p>

                    {/* CTA para novos parceiros */}
                    <p className="text-gray-600 mt-12">Quer ver a sua marca aqui e se tornar um parceiro da Pedacinho do Céu?</p>
                    <motion.a
                        href="#contato" // Sugestão: linkar para a seção de contato
                        whileHover={{ scale: 1.05 }}
                        className="mt-4 inline-block text-green-600 font-semibold border-b-2 border-green-600 hover:border-green-700"
                    >
                        Entre em contato conosco
                    </motion.a>
                </motion.div>
            </section>

            {/* CONTATO */}
            <section id="contato" className="py-20 bg-white-50">
                {/* Adicionamos a animação */}
                <motion.div
                    className="max-w-4xl mx-auto px-6 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >

                    {/* Adicionei 'font-fredoka' para consistência */}
                    <h3 className="text-3xl font-bold mb-6 text-emerald-600 font-fredoka">
                        CONTATO
                    </h3>

                    {/* Melhorei o texto de apoio */}
                    <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
                        Entre em contato e faça parte dessa missão de amor e transformação.
                    </p>

                    {/* Botões de Ação */}
                    <div className="flex flex-col md:flex-row justify-center items-center gap-6">

                        {/* 1. Botão de WhatsApp (LINK ADICIONADO) */}
                        <a
                            href="https://wa.me/5511956803697" // <-- O LINK!
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 px-8 py-4 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition-colors duration-300 w-full md:w-auto"
                        >
                            <FaWhatsapp className="text-2xl" />
                            <span className="text-lg">Chamar no WhatsApp</span>
                        </a>

                        {/* 2. Botão de Email (Agora clicável) */}
                        <a
                            href="mailto:ongpedacinhodoceu2025@gmail.com"
                            className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300 w-full md:w-auto"
                        >
                            <FaEnvelope className="text-xl" />
                            <span className="text-lg">Enviar E-mail</span>
                        </a>
                    </div>

                    {/* Textos de apoio (opcional, mas bom para SEO) */}
                    <div className="mt-8 text-gray-600 space-y-1">
                        <p>WhatsApp: (11) 95680-3697</p>
                        <p>E-mail: ongpedacinhodoceu2025@gmail.com</p>
                    </div>

                </motion.div>
            </section>
        </div>
    );
}