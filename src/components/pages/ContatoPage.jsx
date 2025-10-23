import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContatoPage = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
    alert('Mensagem enviada com sucesso!');
    setFormData({ nome: '', email: '', assunto: '', mensagem: '' });
  };

  return (
    <div className="pt-20 min-h-screen bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-[#e8e8e8] mb-12 text-center"
        >
          Entre em <span className="text-[#a8a8a8]">Contato</span>
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-[#e8e8e8] mb-8">Informações de Contato</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="text-[#606060] mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-bold text-[#e8e8e8]">Email</h3>
                  <p className="text-[#b0b0b0]">contato@ppdf2022.gov.br</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="text-[#606060] mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-bold text-[#e8e8e8]">Telefone</h3>
                  <p className="text-[#b0b0b0]">(61) 3103-8000</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="text-[#606060] mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-bold text-[#e8e8e8]">Endereço</h3>
                  <p className="text-[#b0b0b0]">Secretaria de Segurança Pública do DF<br />Brasília - DF</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-[#1a1a1a] p-8 rounded-lg border border-[#303030]"
          >
            <div className="mb-6">
              <label className="block text-[#e8e8e8] font-bold mb-2">Nome</label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-[#0f0f0f] border border-[#303030] rounded-lg text-[#e8e8e8] focus:outline-none focus:border-[#606060]"
              />
            </div>

            <div className="mb-6">
              <label className="block text-[#e8e8e8] font-bold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-[#0f0f0f] border border-[#303030] rounded-lg text-[#e8e8e8] focus:outline-none focus:border-[#606060]"
              />
            </div>

            <div className="mb-6">
              <label className="block text-[#e8e8e8] font-bold mb-2">Assunto</label>
              <input
                type="text"
                name="assunto"
                value={formData.assunto}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-[#0f0f0f] border border-[#303030] rounded-lg text-[#e8e8e8] focus:outline-none focus:border-[#606060]"
              />
            </div>

            <div className="mb-6">
              <label className="block text-[#e8e8e8] font-bold mb-2">Mensagem</label>
              <textarea
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-2 bg-[#0f0f0f] border border-[#303030] rounded-lg text-[#e8e8e8] focus:outline-none focus:border-[#606060]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-[#303030] text-[#e8e8e8] rounded-lg hover:bg-[#404040] transition-all duration-300 border border-[#505050] font-bold"
            >
              Enviar Mensagem
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default ContatoPage;

