import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

function DeveloperHero({ onExplore }) {

  const [showButtons, setShowButtons] = useState(false);

  // show buttons after animation
  useEffect(() => {

    const timer = setTimeout(() => {
      setShowButtons(true);
    }, 4000);

    return () => clearTimeout(timer);

  }, []);

  return (

    <section className="flex flex-col items-center justify-center h-screen text-center">

      {/* Developer animation */}

      <div className="text-8xl animate-float">
        👨‍💻
      </div>

      {/* Intro text */}

      <h1 className="text-4xl font-bold mt-6">
        Hello Recruiters 👋
      </h1>

      <h2 className="text-xl text-blue-400 mt-4">

        <Typewriter
          words={[
            "I'm Abhey",
            "React Developer",
            "Frontend Engineer"
          ]}
          loop
        />

      </h2>

      <p className="max-w-xl mt-4 text-gray-400">

        I build modern web applications using
        React, Redux and TailwindCSS.

      </p>

      {/* Buttons appear after animation */}

      {showButtons && (

        <div className="flex gap-4 mt-8">

          <button
            onClick={onExplore}
            className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Explore Portfolio
          </button>

          <a
            href="/abhey_kumar_jauhari_resume.pdf"
            download
            className="bg-green-600 px-6 py-3 rounded-lg hover:bg-green-700"
          >
            Download Resume
          </a>

        </div>

      )}

    </section>

  );

}

export default DeveloperHero;