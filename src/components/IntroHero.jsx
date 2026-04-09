import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

function IntroHero({ onExplore }) {
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButtons(true);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      
      <div className="container-custom flex flex-col items-center">

        {/* Emoji */}
        <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl animate-float gpu">
          👨‍💻
        </div>

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-6">
          Hello Recruiters 👋
        </h1>

        {/* Typewriter */}
        <h2 className="text-lg sm:text-xl md:text-2xl text-blue-400 mt-3">
          <Typewriter
            words={[
              "I'm Abhey",
              "React Developer",
              "Frontend Engineer",
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={40}
          />
        </h2>

        {/* Description */}
        <p className="max-w-md sm:max-w-lg mt-4 text-gray-400 text-sm sm:text-base">
          I build modern web applications using React, Redux and TailwindCSS.
        </p>

        {/* Buttons */}
        {showButtons && (
          <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">

            <button
              onClick={onExplore}
              className="bg-blue-600 px-6 py-3 rounded-lg text-sm sm:text-base hover:bg-blue-700 transition w-full sm:w-auto"
            >
              Explore Portfolio
            </button>

            <a
              href="/Abhey_React_resume.pdf"
              download
              className="bg-green-600 px-6 py-3 rounded-lg text-sm sm:text-base hover:bg-green-700 transition w-full sm:w-auto text-center"
            >
              Download Resume
            </a>

          </div>
        )}

      </div>
    </section>
  );
}

export default IntroHero;