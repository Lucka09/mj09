import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { motion } from 'framer-motion';

type PrayerFormInputs = {
  name: string;
  request: string;
};

const PrayerRequestForm = () => {
  const { register, handleSubmit, reset } = useForm<PrayerFormInputs>();

  const onSubmit: SubmitHandler<PrayerFormInputs> = (data) => {
    console.log('Pedido de oración enviado:', data);
    reset();
  };

  return (
    <section
      id="oracion"
      className="relative bg-mja-bg dark:bg-mja-dark-bg py-16 px-4 sm:px-8 lg:px-16 flex items-center justify-center overflow-hidden"
    >
      {/* Fondo decorativo opcional */}
      <div className="absolute inset-0 bg-gradient-to-b from-mja-primary/10 to-transparent pointer-events-none z-0" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl w-full bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-mja-primary mb-6 dark:text-yellow-400">
          Dejanos tu pedido de oración
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
          Creemos en el poder de la oración. Tu necesidad es importante y queremos orar por vos.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Tu nombre
            </label>
            <input
              type="text"
              id="name"
              {...register('name', { required: true })}
              placeholder="Ej: Juan Pérez"
              className="mt-1 block w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-mja-primary transition"
              required
            />
          </div>

          <div>
            <label
              htmlFor="request"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Pedido de oración
            </label>
            <textarea
              id="request"
              {...register('request', { required: true })}
              placeholder="Contanos por qué querés que oremos..."
              rows={5}
              className="mt-1 block w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-mja-primary transition resize-none"
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="inline-block px-8 py-3 bg-mja-primary text-white font-semibold rounded-xl shadow-lg hover:bg-yellow-600 dark:hover:bg-yellow-500 transition"
            >
              Enviar oración
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default PrayerRequestForm;
