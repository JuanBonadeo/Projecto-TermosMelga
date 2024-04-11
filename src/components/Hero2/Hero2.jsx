import React from 'react';
import { motion, spring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Button from '../Button/Button';
import '../Hero2/hero2.css';

export const Hero2 = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5, // Cambia el valor según tus necesidades
  });

  // Detecta cuándo el componente está visible en la pantalla
  React.useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <motion.div
      className="CombosContainer"
      ref={ref}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}

      transition={{ duration: 4, delay: 1, type: "spring", stiffness: 160, damping: 20 }}
    >
      <img
        src='https://firebasestorage.googleapis.com/v0/b/termomelga.appspot.com/o/heros%2Fbanner2.jpeg?alt=media&token=ad7d9f4a-57ff-4b60-99ee-703055094226'
        alt='Combos'
        className='combosImg'
      />
      <div className="info">
        <h2>Yerbas Importadas🌿</h2>
        <p>Vendemos las mejores yerbas importadas. ¡No te las pierdas y disfruta de un buen mate!
        </p>
        <Button label='Ver Combos' to='/categoria/combos' />
      </div>
    </motion.div>
  );
};




