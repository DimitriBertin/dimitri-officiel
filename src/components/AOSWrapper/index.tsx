
'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSWrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({
      duration: 600, // Durée des animations
      easing: 'ease-in-out', // Type d'animation
      once: true, // Animation seulement à la première apparition
      mirror: true,
    });
  }, []);

  return <>{children}</>;
};

export default AOSWrapper;