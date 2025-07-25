import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';

type ImageLogoProps = {
  src: string;
  alt: string;
  className?: string;
};

const ImageLogo: React.FC<ImageLogoProps> = ({ src, alt, className = '' }) => (
  <img src={src} alt={alt} className={`h-12 w-auto ${className}`} />
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  const navLinks = [
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'MJA Cerca', path: '/mja-cerca' },
    { name: 'Siembra', path: '/siembra' },
    { name: 'Sermones', path: '/sermones' },
    { name: 'Eventos', path: '/eventos' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-mja-background/90 dark:bg-mja-gray/90 backdrop-blur-lg shadow-md py-3 transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="flex items-center" aria-label="Inicio">
          <ImageLogo src="/assets/images/logo-mja.png" alt="Logo MJA" />
          <span className="ml-3 text-mja-white text-2xl font-bold font-heading hidden md:block">
            MJA
          </span>
        </Link>

        {/* Mobile Menu & Dark Toggle */}
        <div className="flex items-center md:hidden space-x-2">
          <button onClick={toggleDarkMode} aria-label="Cambiar tema" className="p-2 rounded-full text-mja-golden hover:bg-mja-gray transition">
            {isDarkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menú"
            className="text-mja-golden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-mja-golden"
          >
            {isMenuOpen ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-mja-white hover:text-mja-golden text-lg font-body font-semibold transition-colors"
            >
              {link.name}
            </Link>
          ))}

          <div className="flex gap-3 items-center">
            <a href="https://streaminglocucionar.com/portal/?p=13705" target="_blank" rel="noopener noreferrer" aria-label="Radio Elet">
              <ImageLogo src="/assets/images/logo-radio-elet.png" alt="Logo Radio" className="h-8" />
            </a>
            <a
              href="https://institutoelelevangeliocambiadevidas.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instituto El Buen Pastor"
            >
              <ImageLogo src="/assets/images/logo-instituto.png" alt="Logo Instituto" className="h-8" />
            </a>
          </div>

          <button onClick={toggleDarkMode} className="p-2 rounded-full text-mja-golden hover:bg-mja-gray transition">
            {isDarkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            key="mobile-menu"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full bg-mja-gray/95 dark:bg-mja-background/95 shadow-xl py-4"
          >
            <div className="flex flex-col items-center space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-mja-white hover:text-mja-golden transition-colors text-lg font-body font-semibold"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex space-x-5 mt-3">
                <a href="https://streaminglocucionar.com/portal/?p=13705" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>
                  <ImageLogo src="/assets/images/logo-radio-elet.png" alt="Logo Radio Elet" className="h-8" />
                </a>
                <a href="https://institutoelelevangeliocambiadevidas.com/" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>
                  <ImageLogo src="/assets/images/logo-instituto.png" alt="Logo Instituto" className="h-8" />
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
