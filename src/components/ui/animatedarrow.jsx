import { motion } from "framer-motion";
import { ChevronDown } from 'lucide-react';

export function AnimatedArrow() {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center md:left-1/3 lg:left-1/2 hidden lg:flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}>
      <div className="w-0.5 h-16 bg-gradient-to-b from-foreground/60 to-transparent dark:from-muted-foreground/40" />
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>
        <ChevronDown className="w-12 h-12 text-foreground/60 dark:text-muted-foreground/40" />
      </motion.div>
    </motion.div>
  );
}