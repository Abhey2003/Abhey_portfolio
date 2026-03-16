import { useState } from "react";

function RecruiterPanel() {

  const [message, setMessage] = useState("Hello Recruiter 👋");

  const scrollToSection = (id, text) => {
    const section = document.getElementById(id);

    if (section) {
      setMessage(text);
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed right-6 bottom-6 bg-gray-800 text-white p-5 rounded-xl shadow-xl w-64 z-50">

      <h3 className="text-lg font-semibold mb-3">
        Recruiter Panel
      </h3>

      <p className="text-sm mb-4 text-gray-300">
        {message}
      </p>

      <div className="flex flex-col gap-2">

        <button
          onClick={() => scrollToSection("home", "Opening Home Section...")}
          className="bg-gray-500 px-3 py-2 rounded hover:bg-gray-600"
        >
          Home
        </button>

        <button
          onClick={() => scrollToSection("skills", "Opening Skills Section...")}
          className="bg-blue-500 px-3 py-2 rounded hover:bg-blue-600"
        >
          View Skills
        </button>

        <button
          onClick={() => scrollToSection("projects", "Opening Projects Section...")}
          className="bg-green-500 px-3 py-2 rounded hover:bg-green-600"
        >
          View Projects
        </button>

        <button
          onClick={() => scrollToSection("contact", "Opening Contact Section...")}
          className="bg-purple-500 px-3 py-2 rounded hover:bg-purple-600"
        >
          Contact Me
        </button>

        <a
          href="/abhey_kumar_jauhari_resume.pdf"
          download
          className="bg-orange-500 px-3 py-2 rounded text-center hover:bg-orange-600"
        >
          Download Resume
        </a>

      </div>

    </div>
  );
}

export default RecruiterPanel;