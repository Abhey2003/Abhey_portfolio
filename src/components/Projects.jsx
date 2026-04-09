import { projects } from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20">

      <div className="container-custom">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-center">
          Projects
        </h2>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white/5 border border-white/10 
              rounded-xl p-5 shadow-md 
              hover:scale-[1.02] hover:shadow-lg 
              transition duration-300"
            >

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {project.title}
              </h3>

              {/* Description (FIXED HERE) */}
              <p className="text-gray-400 text-sm sm:text-base mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Buttons */}
              <div className="flex gap-3">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-white/10 border border-white/20 
                  py-2 rounded-md text-sm hover:bg-white/20 transition"
                >
                  Code
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-blue-500 
                  py-2 rounded-md text-sm hover:bg-blue-600 transition"
                >
                  Live
                </a>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;