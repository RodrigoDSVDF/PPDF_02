import React from 'react';
import { motion } from 'framer-motion';

const ConcursoPage = () => {
  return (
    <div className="pt-20 min-h-screen bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-[#e8e8e8] mb-12 text-center"
        >
          Sobre o Concurso <span className="text-[#a8a8a8]">Polícia Penal DF 2022</span>
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#1a1a1a] p-8 rounded-lg border border-[#303030]"
          >
            <h2 className="text-2xl font-bold text-[#e8e8e8] mb-4">Objetivo</h2>
            <p className="text-[#b0b0b0] leading-relaxed">
              O concurso público para Policial Penal do Distrito Federal em 2022 foi realizado com o objetivo de selecionar profissionais qualificados para atuar no sistema prisional do DF, garantindo segurança, profissionalismo e respeito aos direitos humanos.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#1a1a1a] p-8 rounded-lg border border-[#303030]"
          >
            <h2 className="text-2xl font-bold text-[#e8e8e8] mb-4">Vagas Oferecidas</h2>
            <p className="text-[#b0b0b0] leading-relaxed">
              Foram oferecidas múltiplas vagas para a carreira de Policial Penal, com oportunidades de crescimento profissional e benefícios compatíveis com a importância da função no sistema de segurança pública.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#1a1a1a] p-8 rounded-lg border border-[#303030]"
          >
            <h2 className="text-2xl font-bold text-[#e8e8e8] mb-4">Etapas do Concurso</h2>
            <ul className="text-[#b0b0b0] space-y-2">
              <li>✓ Prova Objetiva</li>
              <li>✓ Prova Discursiva</li>
              <li>✓ Avaliação Psicológica</li>
              <li>✓ Avaliação Médica</li>
              <li>✓ Investigação Social</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#1a1a1a] p-8 rounded-lg border border-[#303030]"
          >
            <h2 className="text-2xl font-bold text-[#e8e8e8] mb-4">Requisitos</h2>
            <ul className="text-[#b0b0b0] space-y-2">
              <li>✓ Ser cidadão brasileiro</li>
              <li>✓ Ter 18 anos completos</li>
              <li>✓ Estar em dia com obrigações militares</li>
              <li>✓ Ter aptidão física comprovada</li>
              <li>✓ Ter idoneidade moral</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ConcursoPage;

