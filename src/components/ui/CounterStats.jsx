import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Counter = ({ end, duration = 2, label, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 100);
    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, duration * 10);

    return () => clearInterval(interval);
  }, [end, duration]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.5 }}
      className="text-center"
    >
      <div className="text-5xl md:text-6xl font-bold text-[#e8e8e8] mb-2">
        {count.toLocaleString('pt-BR')}{suffix}
      </div>
      <p className="text-lg text-[#909090]">{label}</p>
    </motion.div>
  );
};

const CounterStats = () => {
  return (
    <section className="py-20 px-4 bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center text-[#e8e8e8] mb-16"
        >
          Dados do Concurso <span className="text-[#a8a8a8]">Polícia Penal DF 2022</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <Counter end={1600} label="Aprovados" />
          <Counter end={450} label="Nomeações Realizadas" />
          <Counter end={25000} label="Candidatos Inscritos" />
        </div>
      </div>
    </section>
  );
};

export default CounterStats;

