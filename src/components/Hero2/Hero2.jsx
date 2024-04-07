import React from 'react';
import { motion, spring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Button from '../Button/Button';
import '../Hero2/hero2.css';

 export const Hero2 = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1, // Cambia el valor según tus necesidades
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
      initial={{ opacity: 0, scale: 0}}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
      
      transition={{ duration: 4, delay: 3,type:"spring", stiffness: 160, damping: 20}}
    >
      <img
        src='https://firebasestorage.googleapis.com/v0/b/termomelga.appspot.com/o/heros%2Fcombos.jpg?alt=media&token=45a636ef-aacb-47d5-af51-453e0d17176a'
        alt='Combos'
        className='combosImg'
      />
      <div className="info">
        <h2>Combos Materos</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ratione sunt itaque adipisci ipsam. Praesentium quia culpa officia ea nemo commodi earum!
        </p>
        <Button label='Ver Combos' to='/categoria/combos' />
      </div>
    </motion.div>
  );
};




