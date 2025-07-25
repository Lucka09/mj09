// src/components/layouts/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram,
  FaYoutube, FaWhatsapp,
} from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Eventos', path: '/eventos' },
    { name: 'Galería', path: '/galeria' },
    { name: 'Donaciones', path: '/donaciones' },
    { name: 'Contacto', path: '/contacto' },
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      icon: FaFacebookF,
      url: 'https://www.facebook.com/MinisterioJesucristoesAmor',
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: 'https://www.instagram.com/ministerio_mja/',
    },
    {
      name: 'YouTube',
      icon: FaYoutube,
      url: 'https://www.youtube.com/user/CanalOficialMJA',
    },
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      url: 'https://wa.me/541122223333', // Reemplazá con el número real
    },
  ];

  return (
    <footer className="bg-mja-gray dark:bg-mja-background text-white py-12 px-4 md:px-8 shadow-inner border-t-4 border-mja-golden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo y Descripción */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src="/assets/images/logo-mja.png"
            alt="Logo MJA"
            className="h-20 w-auto mb-4"
          />
          <p className="text-sm leading-relaxed mb-4">
            Ministerio Jesucristo es Amor — Casa de Generaciones.
            <br />
            Comprometidos con el Evangelio en Argentina y el mundo.
          </p>
          <div className="flex space-x-4 mt-2">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-mja-golden hover:text-white transition-colors text-xl"
                aria-label={link.name}
              >
                <link.icon />
              </a>
            ))}
          </div>
        </div>

        {/* Enlaces Rápidos */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-mja-golden mb-6">
            Enlaces Rápidos
          </h3>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="hover:text-mja-golden transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Información de Contacto */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-mja-golden mb-6">Contacto</h3>
          <p className="mb-2">
            <strong>Dirección:</strong> Av. América 761, Sáenz Peña, Buenos Aires.
          </p>
          <p className="mb-2">
            <strong>Teléfono:</strong> +54 11 1234 5678
          </p>
          <p>
            <strong>Email:</strong>{' '}
            <a
              href="mailto:contacto@mja.org.ar"
              className="hover:text-mja-golden"
            >
              contacto@mja.org.ar
            </a>
          </p>
        </div>

        {/* Misión */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-mja-golden mb-6">Nuestra Misión</h3>
          <p className="text-sm italic border-l-4 border-mja-primary pl-4 py-2">
            “Proclamar el Evangelio de Jesucristo a toda criatura, discipulando
            naciones y preparando un pueblo para Su venida.”
          </p>
        </div>
      </div>

      {/* Derechos */}
      <div className="mt-10 border-t pt-6 border-mja-golden text-center text-sm">
        <p>© {currentYear} Ministerio Jesucristo es Amor. Todos los derechos reservados.</p>
        <p className="mt-1">Desarrollado con ❤️ y propósito.</p>
      </div>
    </footer>
  );
};

export default Footer;
