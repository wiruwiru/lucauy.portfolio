import { motion } from "framer-motion";

export function AnimatedSeparator() {
  return (
    <motion.div 
      className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-700"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />
  );
}