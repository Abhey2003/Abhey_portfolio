import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function RecruiterPanel() {
  const [message, setMessage] = useState("Hello Recruiter 👋");
  const [open, setOpen] = useState(false);

  const scrollToSection = (id, text) => {
    const section = document.getElementById(id);

    if (section) {
      setMessage(text);
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // close on mobile after click
    }
  };

  return (
    <>
      {/* Floating Toggle Button (Mobile Friendly) */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed right-4 bottom-4 sm:right-6 sm:bottom-6 z-50 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
      >
        ☰
      </button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed right-4 bottom-20 sm:right-6 sm:bottom-24 
                       w-[90%] max-w-xs bg-gray-800 text-white p-4 rounded-xl shadow-xl z-50"
          >
            <h3 className="text-base sm:text-lg font-semibold mb-2">
              Recruiter Panel
            </h3>

            <p className="text-xs sm:text-sm mb-3 text-gray-300">
              {message}
            </p>

            <div className="flex flex-col gap-2">

              <button
                onClick={() => scrollToSection("home", "Opening Home Section...")}
                className="bg-gray-500 py-2 rounded text-sm hover:bg-gray-600 transition"
              >
                Home
              </button>

              <button
                onClick={() => scrollToSection("skills", "Opening Skills Section...")}
                className="bg-blue-500 py-2 rounded text-sm hover:bg-blue-600 transition"
              >
                View Skills
              </button>

              <button
                onClick={() => scrollToSection("projects", "Opening Projects Section...")}
                className="bg-green-500 py-2 rounded text-sm hover:bg-green-600 transition"
              >
                View Projects
              </button>

              <button
                onClick={() => scrollToSection("contact", "Opening Contact Section...")}
                className="bg-purple-500 py-2 rounded text-sm hover:bg-purple-600 transition"
              >
                Contact Me
              </button>

              <a
                href="/abhey_kumar_jauhari_resume.pdf"
                download
                className="bg-orange-500 py-2 rounded text-center text-sm hover:bg-orange-600 transition"
              >
                Download Resume
              </a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default RecruiterPanel;