import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CallToAction: React.FC = () => {
  return (
    <section className="bg-mja-primary dark:bg-yellow-500 text-white dark:text-gray-900 py-16 px-6 sm:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          ¡Sumate a nuestra comunidad!
        </h2>
        <p className="text-lg sm:text-xl mb-8">
          Estamos creciendo como iglesia en diferentes ciudades y países. Sé parte de lo que Dios está haciendo.
        </p>

        <Link
          to="/contacto"
          className="inline-block px-8 py-3 bg-white text-mja-primary font-semibold rounded-full shadow-lg hover:bg-gray-100 dark:bg-gray-900 dark:text-yellow-400 dark:hover:bg-gray-800 transition-all"
        >
          Contactanos
        </Link>
      </motion.div>
    </section>
  );
};

export default CallToAction;
