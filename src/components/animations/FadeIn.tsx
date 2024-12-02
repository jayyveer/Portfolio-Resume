import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  fullWidth?: boolean;
}

export function FadeIn({ children, delay = 0, direction = 'up', fullWidth = false }: FadeInProps) {
  const getDirection = () => {
    switch (direction) {
      case 'up':
        return { y: 20 };
      case 'down':
        return { y: -20 };
      case 'left':
        return { x: 20 };
      case 'right':
        return { x: -20 };
      default:
        return { y: 0 };
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...getDirection() }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      style={{ width: fullWidth ? '100%' : 'auto' }}
    >
      {children}
    </motion.div>
  );
}