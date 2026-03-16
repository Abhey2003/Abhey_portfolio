import { useEffect, useState } from "react";

function GithubProjects() {

  const [repos,setRepos] = useState([]);

  useEffect(()=>{

    fetch("https://api.github.com/users/YOUR_GITHUB_USERNAME/repos")
    .then(res => res.json())
    .then(data => setRepos(data));

  },[])

  return (

    <section className="p-10">

      <h2 className="text-3xl font-bold mb-6">
        GitHub Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {repos.slice(0,6).map(repo => (

          <div key={repo.id}
          className="bg-gray-800 p-6 rounded">

            <h3 className="text-xl">
              {repo.name}
            </h3>

            <p>
              {repo.description}
            </p>

            <a
            href={repo.html_url}
            className="text-blue-400">

              View Repo

            </a>

          </div>

        ))}

      </div>

    </section>

  );

}

export default GithubProjects;