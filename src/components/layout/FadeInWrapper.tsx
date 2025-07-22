// FadeInWrapper.tsx
'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export default function FadeInWrapper({ children, className = '' }: { children: ReactNode, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
} 