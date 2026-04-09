import { motion } from "framer-motion";

function PageWrapper({ children }) {
  return (
    <motion.div
      className="w-full gpu"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}

export default PageWrapper;