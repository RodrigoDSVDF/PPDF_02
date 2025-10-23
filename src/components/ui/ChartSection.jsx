
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

const data = [
  { name: 'Aprovados', 'Polícia Penal DF': 1600, amt: 2400 },
  { name: 'Vagas', 'Polícia Penal DF': 400, amt: 2210 },
  { name: 'Candidatos', 'Polícia Penal DF': 25000, amt: 2290 },
  { name: 'Concorrência', 'Polícia Penal DF': 15.6, amt: 2000 },
];

const ChartSection = () => {
  return (
    <section className="py-20 px-4 bg-[#14222E]">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-white mb-12"
        >
          Estatísticas do <span className="bg-gradient-to-r from-[#4FD1C5] to-[#38B2AC] bg-clip-text text-transparent">Concurso Polícia Penal DF 2022</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
          className="bg-[#0B1016] p-8 rounded-lg shadow-xl"
        >
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={data}
              margin={{
                top: 20, right: 30, left: 20, bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#2A3B4D" />
              <XAxis dataKey="name" stroke="#8AB4B8" />
              <YAxis stroke="#8AB4B8" />
              <Tooltip cursor={{ fill: 'rgba(255,255,255,0.1)' }} contentStyle={{ backgroundColor: '#1C2A35', border: 'none', borderRadius: '8px' }} itemStyle={{ color: '#8AB4B8' }} labelStyle={{ color: '#4FD1C5' }} />
              <Legend wrapperStyle={{ color: '#8AB4B8', paddingTop: '10px' }} />
              <Bar dataKey="Polícia Penal DF" fill="#4FD1C5" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </section>
  );
};

export default ChartSection;

