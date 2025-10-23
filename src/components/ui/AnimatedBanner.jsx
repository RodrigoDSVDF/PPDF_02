import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBanner = () => {
  const message = "JUNTOS SOMOS MAIS FORTES - LUTA PELA NOMEAÇÃO DE TODOS - POLICIA PENAL DF";
  
  return (
    <div className="w-full bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] py-4 overflow-hidden border-y border-[#404040]">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center px-8">
            <span className="text-lg font-bold text-[#b0b0b0] tracking-wider">
              {message}
            </span>
            <span className="mx-8 text-[#606060]">●</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AnimatedBanner;

