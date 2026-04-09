import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      
      <div className="container-custom flex flex-col items-center">

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="gpu"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
  Hello Recruiters 👋
</h1>
          <h2 className="text-base sm:text-lg md:text-xl mt-3 text-blue-400">
            I'm Abhey — React Developer
          </h2>

          <p className="mt-4 max-w-md sm:max-w-lg text-sm sm:text-base text-gray-400">
            I build modern web applications using React, Redux, Tailwind and modern design patterns.
          </p>
        </motion.div>

        {/* Emoji Animation */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="text-5xl sm:text-6xl md:text-7xl mt-8 gpu"
        >
          👨‍💻
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;