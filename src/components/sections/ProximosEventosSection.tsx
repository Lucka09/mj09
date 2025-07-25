// src/components/sections/UpcomingEventsSection.tsx
import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { XMarkIcon } from '@heroicons/react/24/outline';


  interface Event {
    id: number;
    image: string;
    alt: string;
    title: string;
    date: string;
    location: string;
    time: string;
    summary: string;
    moreInfoLink: string;
  }
 

const dummyEvents = [
  {
    id: 1,
    image: '/assets/images/evento-adoracion.jpg',
    alt: 'Noche de Adoración y Alabanza',
    title: 'Noche de Adoración y Alabanza',
    date: 'Viernes, 26 de Julio, 2024',
    location: 'Templo Central, San Martín',
    time: '20:00 hs',
    summary: 'Una noche especial para levantar nuestras voces y corazones al Señor. ¡No te lo pierdas!',
    moreInfoLink: '/eventos/noche-adoracion',
  },
  {
    id: 2,
    image: '/assets/images/evento-congreso.jpg',
    alt: 'Congreso de Familias 2024',
    title: 'Congreso de Familias 2024',
    date: '10 al 12 de Agosto, 2024',
    location: 'Auditorio MJA, Buenos Aires',
    time: 'Ver programa completo',
    summary: 'Tres días de enseñanzas y talleres para fortalecer los lazos familiares bajo la guía de Dios.',
    moreInfoLink: '/eventos/congreso-familias',
  },
  {
    id: 3,
    image: '/assets/images/evento-jovenes.jpg',
    alt: 'Encuentro de Jóvenes "Generación Radical"',
    title: 'Encuentro de Jóvenes "Generación Radical"',
    date: 'Sábado, 31 de Agosto, 2024',
    location: 'Sede Anexo Palermo',
    time: '18:00 hs',
    summary: 'Un tiempo explosivo para jóvenes, con música, palabra y compañerismo.',
    moreInfoLink: '/eventos/encuentro-jovenes',
  },
  {
    id: 4,
    image: '/assets/images/evento-misiones.jpg',
    alt: 'Jornada de Misiones Mundiales',
    title: 'Jornada de Misiones Mundiales',
    date: 'Domingo, 15 de Septiembre, 2024',
    location: 'Templo Central, San Martín',
    time: '10:00 hs (Servicio Central)',
    summary: 'Descubre cómo MJA está impactando naciones y cómo puedes ser parte del cumplimiento de la Gran Comisión.',
    moreInfoLink: '/eventos/jornada-misiones',
  },
];

const ProximosEventosSection = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
  };

  const closeInfo = () => {
    setSelectedEvent(null);
  };

  return (
    <section className="bg-mja-gray dark:bg-mja-background py-16 px-4 md:px-8 text-mja-white">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center text-mja-golden mb-12">
          Próximos Eventos
        </h2>

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
                slidesPerView: 4,
                spaceBetween: 30,
            }
          }}
          className="mySwiper mb-8"
        >
          {dummyEvents.map((event) => (
            <SwiperSlide key={event.id}>
              <div
                className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer transform hover:scale-105 transition-transform duration-300"
                onClick={() => handleEventClick(event)}
              >
                <img
                  src={event.image}
                  alt={event.alt}
                  className="w-full h-64 object-cover object-center group-hover:brightness-75 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mja-darkerRed/80 to-transparent flex items-end p-4">
                  <h3 className="text-2xl font-bold text-mja-white leading-tight">
                    {event.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Detalles del Evento Seleccionado */}
        {selectedEvent && (
          <div className="bg-mja-darkerRed/90 dark:bg-mja-primary/90 p-8 rounded-lg shadow-2xl mt-12 animate-fadeInUp relative border-t-4 border-mja-golden">
            <button
              onClick={closeInfo}
              className="absolute top-4 right-4 text-mja-golden hover:text-mja-white transition-colors focus:outline-none"
            >
              <XMarkIcon className="h-7 w-7" />
            </button>
            <h3 className="text-3xl font-heading font-bold text-mja-golden mb-4 animate-slideInRight">{selectedEvent.title}</h3>
            <p className="text-lg mb-2 animate-slideInRight delay-100">
              <strong className="text-mja-lightGolden">Fecha:</strong> {selectedEvent.date}
            </p>
            <p className="text-lg mb-2 animate-slideInRight delay-200">
              <strong className="text-mja-lightGolden">Lugar:</strong> {selectedEvent.location}
            </p>
            <p className="text-lg mb-4 animate-slideInRight delay-300">
              <strong className="text-mja-lightGolden">Horario:</strong> {selectedEvent.time}
            </p>
            <p className="text-mja-white mb-6 leading-relaxed animate-slideInRight delay-400">
              {selectedEvent.summary}
            </p>
            <Link
              to={selectedEvent.moreInfoLink}
              onClick={closeInfo} // Cerrar info al ir a la página del evento
              className="inline-block bg-mja-golden text-mja-background py-3 px-6 rounded-md text-lg font-bold hover:bg-mja-lightGolden transition-colors duration-300 animate-slideInRight delay-500 transform hover:scale-105"
            >
              Más Información
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProximosEventosSection;