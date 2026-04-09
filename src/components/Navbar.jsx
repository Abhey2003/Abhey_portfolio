import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
    { name: "Certifications", href: "#certifications" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 
bg-white/5 backdrop-blur-xl border-b border-white/10 shadow-sm">

      <div className="container-custom flex justify-between items-center h-16">

        {/* Logo */}
        <h1 className="text-lg sm:text-xl font-bold">
          Abhey.dev
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-blue-400 transition">
                {link.name}
              </a>
            </li>
          ))}

          <li>
            <a
              href="/Abhey_React_resume.pdf"
              download
              className="bg-green-600 px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black/90 backdrop-blur-md"
          >
            <ul className="flex flex-col items-center gap-4 py-6">

              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg hover:text-blue-400 transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}

              <li>
                <a
                  href="/Abhey_React_resume.pdf"
                  download
                  className="bg-green-600 px-5 py-2 rounded-lg hover:bg-green-700 transition"
                >
                  Download Resume
                </a>
              </li>

            </ul>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}

export default Navbar;