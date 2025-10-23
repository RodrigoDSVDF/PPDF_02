
import React from 'react';
import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import ppdf01 from '../../assets/ppdf01.png';
import ppdf02 from '../../assets/ppdf02.png';
import ppdf04 from '../../assets/ppdf04.jpg';
import ppdf05 from '../../assets/ppdf05.jpeg';
import ppdf07 from '../../assets/ppdf07.jpeg';
import ppdf08 from '../../assets/ppdf08.webp';
import ppdf09 from '../../assets/ppdf09.webp';

const images = [
  { src: ppdf01, alt: "Distintivo Polícia Penal DF 2022" },
  { src: ppdf02, alt: "Policial Penal DF" },
  { src: ppdf04, alt: "Entrada da Unidade Prisional" },
  { src: ppdf05, alt: "Equipe Polícia Penal DF" },
  { src: ppdf07, alt: "Auditório de Policiais Penais" },
  { src: ppdf08, alt: "Celas Prisionais" },
  { src: ppdf09, alt: "Unidade Prisional" },
];

const ImageGallery = () => {
  return (
    <section className="py-20 px-4 bg-[#0B1016]">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-white mb-12"
        >
          Galeria do <span className="bg-gradient-to-r from-[#4FD1C5] to-[#38B2AC] bg-clip-text text-transparent">Concurso Polícia Penal DF 2022</span>
        </motion.h2>

        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="flex aspect-video items-center justify-center p-6 bg-[#14222E] rounded-lg shadow-lg"
                  >
                    <img src={image.src} alt={image.alt} className="w-full h-full object-contain rounded-md" />
                  </motion.div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default ImageGallery;

