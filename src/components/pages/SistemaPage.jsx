import React from 'react';
import { motion } from 'framer-motion';
import ppdf08 from '../../assets/ppdf08.webp';
import ppdf09 from '../../assets/ppdf09.webp';

const SistemaPage = () => {
  return (
    <div className="pt-20 min-h-screen bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-[#e8e8e8] mb-12 text-center"
        >
          Sistema Prisional <span className="text-[#a8a8a8]">DF</span>
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img src={ppdf08} alt="Sistema Prisional" className="rounded-lg border border-[#303030]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl font-bold text-[#e8e8e8] mb-6">Estrutura e Funcionamento</h2>
            <p className="text-[#b0b0b0] mb-4 leading-relaxed">
              O sistema prisional do Distrito Federal é responsável pela custódia, segurança e ressocialização de pessoas privadas de liberdade. A Polícia Penal é fundamental para manter a ordem e a segurança dentro das unidades prisionais.
            </p>
            <p className="text-[#b0b0b0] leading-relaxed">
              Os profissionais trabalham em turnos, garantindo vigilância contínua e cumprimento das normas de segurança estabelecidas pela legislação penitenciária.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#1a1a1a] p-8 rounded-lg border border-[#303030]"
          >
            <h3 className="text-2xl font-bold text-[#e8e8e8] mb-4">Segurança</h3>
            <p className="text-[#b0b0b0]">
              Manutenção da ordem e segurança dentro das unidades prisionais, prevenção de fugas e controle de motins.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#1a1a1a] p-8 rounded-lg border border-[#303030]"
          >
            <h3 className="text-2xl font-bold text-[#e8e8e8] mb-4">Ressocialização</h3>
            <p className="text-[#b0b0b0]">
              Apoio a programas de educação, trabalho e tratamento que visam à reintegração social dos detentos.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-[#1a1a1a] p-8 rounded-lg border border-[#303030]"
          >
            <h3 className="text-2xl font-bold text-[#e8e8e8] mb-4">Profissionalismo</h3>
            <p className="text-[#b0b0b0]">
              Atuação conforme normas legais e éticas, respeitando direitos humanos e garantindo tratamento digno.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SistemaPage;

