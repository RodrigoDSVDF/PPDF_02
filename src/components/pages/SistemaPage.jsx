import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import ppdf08 from '../../assets/ppdf08.webp';
import ppdf09 from '../../assets/ppdf09.webp';

const SistemaPage = () => {
  // Dados de evolução da população carcerária
  const evolucaoPopulacao = [
    { ano: '2022', presos: 15181 },
    { ano: '2023', presos: 15800 },
    { ano: '2024', presos: 16168 },
    { ano: '2025', presos: 16384 },
  ];

  // Dados de crimes mais comuns
  const crimesComuns = [
    { crime: 'Roubo', '2022': 8457, '2023': 10155, '2024': 11806 },
    { crime: 'Tráfico', '2022': 5183, '2023': 6346, '2024': 6972 },
    { crime: 'Homicídio', '2022': 3316, '2023': 4198, '2024': 5097 },
  ];

  // Dados de reincidência
  const reincidenciaData = [
    { name: 'Primários', value: 11361, fill: '#606060' },
    { name: 'Reincidentes', value: 5023, fill: '#404040' },
  ];

  // Dados de capacidade vs população
  const capacidadeData = [
    { categoria: 'Vagas Disponíveis', quantidade: 6605 },
    { categoria: 'População Atual', quantidade: 16384 },
    { categoria: 'Déficit de Vagas', quantidade: 9779 },
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
          Sistema Prisional <span className="text-[#a8a8a8]">DF</span>
        </motion.h1>

        {/* Seção de Imagens */}
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

        {/* Estatísticas Principais */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { label: 'População Carcerária', value: '16.384', icon: '👥' },
            { label: 'Unidades Prisionais', value: '6', icon: '🏢' },
            { label: 'Taxa de Ocupação', value: '248%', icon: '📊' },
            { label: 'Reincidentes', value: '31,1%', icon: '🔄' },
          ].map((stat, index) => (
            <div key={index} className="bg-[#1a1a1a] p-6 rounded-lg border border-[#303030] text-center">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <p className="text-[#a8a8a8] text-sm mb-2">{stat.label}</p>
              <p className="text-3xl font-bold text-[#e8e8e8]">{stat.value}</p>
            </div>
          ))}
        </motion.div>

        {/* Gráfico 1: Evolução da População Carcerária */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-[#1a1a1a] p-8 rounded-lg border border-[#303030] mb-12"
        >
          <h2 className="text-2xl font-bold text-[#e8e8e8] mb-6">Evolução da População Carcerária (2022-2025)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={evolucaoPopulacao}>
              <CartesianGrid strokeDasharray="3 3" stroke="#303030" />
              <XAxis dataKey="ano" stroke="#808080" />
              <YAxis stroke="#808080" />
              <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #303030', color: '#b0b0b0' }} />
              <Legend wrapperStyle={{ color: '#b0b0b0' }} />
              <Line type="monotone" dataKey="presos" stroke="#606060" strokeWidth={3} name="Número de Presos" />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Gráficos 2 e 3: Crimes Comuns e Reincidência */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-[#1a1a1a] p-8 rounded-lg border border-[#303030]"
          >
            <h2 className="text-2xl font-bold text-[#e8e8e8] mb-6">Principais Crimes (2022-2024)</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={crimesComuns}>
                <CartesianGrid strokeDasharray="3 3" stroke="#303030" />
                <XAxis dataKey="crime" stroke="#808080" />
                <YAxis stroke="#808080" />
                <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #303030', color: '#b0b0b0' }} />
                <Legend wrapperStyle={{ color: '#b0b0b0' }} />
                <Bar dataKey="2022" fill="#404040" name="2022" />
                <Bar dataKey="2023" fill="#606060" name="2023" />
                <Bar dataKey="2024" fill="#808080" name="2024" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-[#1a1a1a] p-8 rounded-lg border border-[#303030]"
          >
            <h2 className="text-2xl font-bold text-[#e8e8e8] mb-6">Distribuição: Primários vs Reincidentes (2024)</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={reincidenciaData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value, percent }) => `${name}: ${value} (${(percent * 100).toFixed(1)}%)`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {reincidenciaData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #303030', color: '#b0b0b0' }} />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Gráfico 4: Capacidade vs População */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-[#1a1a1a] p-8 rounded-lg border border-[#303030] mb-12"
        >
          <h2 className="text-2xl font-bold text-[#e8e8e8] mb-6">Capacidade vs População Atual</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={capacidadeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#303030" />
              <XAxis dataKey="categoria" stroke="#808080" />
              <YAxis stroke="#808080" />
              <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #303030', color: '#b0b0b0' }} />
              <Legend wrapperStyle={{ color: '#b0b0b0' }} />
              <Bar dataKey="quantidade" fill="#606060" name="Quantidade" />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-[#b0b0b0] mt-4 text-center">
            O sistema prisional do DF opera com <span className="text-[#e8e8e8] font-bold">248% de ocupação</span>, evidenciando a superlotação crítica.
          </p>
        </motion.div>

        {/* Seção de Informações Adicionais */}
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
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
            transition={{ duration: 0.6, delay: 0.8 }}
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
            transition={{ duration: 0.6, delay: 0.9 }}
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
