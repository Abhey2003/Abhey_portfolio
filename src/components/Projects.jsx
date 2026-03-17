import { projects } from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="p-10 mt-20 relative z-0"
    >
      <h2 className="text-3xl font-bold mb-6 text-center">
        Projects
      </h2>

      <div
        className="relative z-0 grid md:grid-cols-2 lg:grid-cols-3 gap-6
        bg-white/10 backdrop-blur-lg border border-white/20
        p-6 rounded-xl shadow-lg"
      >
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-gray-800 p-6 rounded-lg hover:scale-105 transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">
              {project.title}
            </h3>

            <p className="text-gray-300 mb-4">
              {project.desc}
            </p>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              View Code
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;