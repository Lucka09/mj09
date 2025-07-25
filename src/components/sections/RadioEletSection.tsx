// src/components/sections/RadioEletSection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircleIcon } from '@heroicons/react/24/solid';

const RadioEletSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-mja-background dark:bg-[#0f172a] py-16 px-4 md:px-8 text-center text-mja-white"
    >
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-mja-golden mb-6 drop-shadow-md">
          Escuchá <span className="text-mja-primary">Radio Elet</span> en Vivo
        </h2>

        <p className="text-lg md:text-xl text-mja-lightGray mb-10 max-w-2xl mx-auto">
          Sintonizá la voz del Espíritu y la palabra que transforma vidas, directamente desde nuestra emisora.
        </p>

        {/* Player */}
        <div className="relative w-full aspect-video md:aspect-[16/6] rounded-xl overflow-hidden shadow-2xl border-4 border-mja-primary backdrop-blur-lg bg-mja-gray/30 transition-all duration-300 hover:scale-[1.01]">
          <audio controls className="w-full h-full bg-transparent text-white">
            <source src="https://streaminglocucionar.com/portal/?p=13705" type="audio/mpeg" />
            Tu navegador no soporta el reproductor de audio. Escuchá desde el sitio de Radio Elet.
          </audio>
        </div>

        {/* Botón de acción */}
        <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-4">
          <a
            href="https://streaminglocucionar.com/portal/?p=13705"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-mja-primary text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-mja-darkerRed transition duration-300 shadow-md hover:scale-105"
            aria-label="Ir al sitio oficial de Radio Elet"
          >
            <PlayCircleIcon className="h-6 w-6 mr-2" />
            Visitar el Sitio de Radio Elet
          </a>

          {/* Ejemplo de segundo botón futuro */}
          {/* <a
            href="#contacto-radio"
            className="flex items-center justify-center bg-mja-lightGray text-mja-background py-3 px-8 rounded-full text-lg font-semibold hover:bg-white transition duration-300 shadow"
          >
            Dejar un mensaje a la radio
          </a> */}
        </div>
      </div>
    </motion.section>
  );
};

export default RadioEletSection;
