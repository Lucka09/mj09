// src/components/layouts/AppLayouts.tsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { motion } from 'framer-motion';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#0f172a] text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Header />
      </motion.div>
<div className="bg-red-500 text-white p-4">
  Tailwind está funcionando si ves este bloque rojo
</div>

      <main className="flex-grow flex flex-col gap-y-20 px-4 sm:px-6 lg:px-8">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default AppLayout;
