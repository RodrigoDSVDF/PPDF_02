import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const DadosPage = () => {
  const dataAprovados = [
    { name: 'Aprovados', value: 1600, fill: '#606060' },
    { name: 'Nomeados', value: 450, fill: '#808080' },
    { name: 'Aguardando', value: 1150, fill: '#404040' },
  ];

  const dataCandidatos = [
    { name: 'Inscritos', 'Candidatos': 25000 },
    { name: 'Comparecimento', 'Candidatos': 22000 },
    { name: 'Aprovados', 'Candidatos': 1600 },
    { name: 'Nomeados', 'Candidatos': 450 },
  ];

  return (
    <div className="pt-20 min-h-screen bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-[#e8e8e8] mb-12 text-center"
        >
          Dados e <span className="text-[#a8a8a8]">Estatísticas</span>
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#1a1a1a] p-8 rounded-lg border border-[#303030]"
          >
            <h2 className="text-2xl font-bold text-[#e8e8e8] mb-6">Distribuição de Aprovados</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={dataAprovados}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {dataAprovados.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #303030', color: '#b0b0b0' }} />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#1a1a1a] p-8 rounded-lg border border-[#303030]"
          >
            <h2 className="text-2xl font-bold text-[#e8e8e8] mb-6">Progressão do Concurso</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dataCandidatos}>
                <CartesianGrid strokeDasharray="3 3" stroke="#303030" />
                <XAxis dataKey="name" stroke="#808080" />
                <YAxis stroke="#808080" />
                <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #303030', color: '#b0b0b0' }} />
                <Legend wrapperStyle={{ color: '#b0b0b0' }} />
                <Bar dataKey="Candidatos" fill="#606060" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Total de Inscritos', value: '25.000', icon: '👥' },
            { label: 'Taxa de Aprovação', value: '6,4%', icon: '✓' },
            { label: 'Nomeações Realizadas', value: '450', icon: '📋' },
            { label: 'Aguardando Nomeação', value: '1.150', icon: '⏳' },
          ].map((stat, index) => (
            <div key={index} className="bg-[#1a1a1a] p-6 rounded-lg border border-[#303030] text-center">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <p className="text-[#a8a8a8] text-sm mb-2">{stat.label}</p>
              <p className="text-3xl font-bold text-[#e8e8e8]">{stat.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default DadosPage;

