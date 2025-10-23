import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navigation = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Início' },
    { id: 'concurso', label: 'Sobre o Concurso' },
    { id: 'sistema', label: 'Sistema Prisional' },
    { id: 'dados', label: 'Dados e Estatísticas' },
    { id: 'galeria', label: 'Galeria' },
    { id: 'contato', label: 'Contato' },
  ];

  const handleNavigation = (pageId) => {
    setCurrentPage(pageId);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] backdrop-blur-md z-50 border-b border-[#303030]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <h1 className="text-2xl font-bold text-[#e8e8e8]">
              PPDF<span className="text-[#808080]">2022</span>
            </h1>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavigation(item.id)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  currentPage === item.id
                    ? 'bg-[#303030] text-[#e8e8e8] border border-[#505050]'
                    : 'text-[#a8a8a8] hover:text-[#e8e8e8] hover:bg-[#252525]'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#a8a8a8] hover:text-[#e8e8e8]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0f0f0f] border-t border-[#303030]"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-lg transition-all duration-300 ${
                    currentPage === item.id
                      ? 'bg-[#303030] text-[#e8e8e8]'
                      : 'text-[#a8a8a8] hover:bg-[#252525]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

