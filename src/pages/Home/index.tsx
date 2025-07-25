// src/pages/Home/index.tsx
import React from 'react';
import { motion } from 'framer-motion';
import AppLayout from '@/components/layouts/AppLayouts';
import HeroSection from '@/components/sections/HeroSection';
import PrayerRequestForm from '@/components/sections/PrayerRequestForm';
import ProximosEventosSection from '@/components/sections/ProximosEventosSection';
import RadioEletSection from '@/components/sections/RadioEletSection';
import CallToAction from '@/components/sections/CallToAction';

const HomePage = () => {
  return (
    <AppLayout>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <HeroSection />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <PrayerRequestForm />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <ProximosEventosSection />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <RadioEletSection />
      </motion.section>

      <motion.section
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <CallToAction />
      </motion.section>
    </AppLayout>
  );
};

export default HomePage;
