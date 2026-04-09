import { useEffect, useState } from "react";

function GithubProjects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/Abhey2003/repos")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data
          .filter((repo) => !repo.fork && repo.description)
          .slice(0, 6);

        setRepos(filtered);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className="py-12 sm:py-16">
      <div className="container-custom">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
          GitHub Projects
        </h2>

        {/* Loading */}
        {loading && (
          <p className="text-gray-400">Loading projects...</p>
        )}

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {repos.map((repo) => (
            <div
              key={repo.id}
              className="bg-gray-800/80 border border-white/10 
                         rounded-xl p-4 shadow hover:scale-[1.03] 
                         transition duration-300"
            >
              <h3 className="text-lg font-semibold mb-2">
                {repo.name}
              </h3>

              <p className="text-gray-400 text-sm mb-3 line-clamp-3">
                {repo.description}
              </p>

              {/* Extra Info */}
              <div className="flex justify-between text-xs text-gray-400 mb-3">
                <span>⭐ {repo.stargazers_count}</span>
                <span>{repo.language}</span>
              </div>

              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 text-sm hover:underline"
              >
                View Repo →
              </a>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default GithubProjects;