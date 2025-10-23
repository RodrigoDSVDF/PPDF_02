import React from 'react';
import { motion } from 'framer-motion';
import ppdf02 from '../../assets/ppdf02.png';

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${ppdf02})`,
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f0f] via-[#1a1a1a]/70 to-[#0f0f0f]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0f0f0f]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-[#e8e8e8] mb-6 leading-tight"
        >
          Concurso <span className="text-[#a8a8a8]">Polícia Penal DF</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-[#b0b0b0] mb-8 max-w-2xl mx-auto"
        >
          2022 - Pela Profissionalização e Valorização da Polícia Penal
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="px-8 py-3 bg-[#303030] text-[#e8e8e8] rounded-lg hover:bg-[#404040] transition-all duration-300 border border-[#505050]">
            Saiba Mais
          </button>
          <button className="px-8 py-3 bg-transparent text-[#a8a8a8] rounded-lg hover:bg-[#252525] transition-all duration-300 border border-[#505050]">
            Dados do Concurso
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-[#606060] rounded-full flex justify-center">
          <motion.div className="w-1 h-3 bg-[#606060] rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

