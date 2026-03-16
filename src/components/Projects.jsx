import {projects} from "../data/projects"

function Projects(){

return(

<section id="projects" className="p-10">

<h2 className="text-3xl font-bold mb-6">
Projects
</h2>

<div className="bg-white/10 backdrop-blur-lg
border border-white/20
p-6 rounded-xl shadow-lg">

{projects.map((project,i)=>(

<div key={i}
className="bg-gray-800 p-6 rounded">

<h3 className="text-xl">

{project.title}

</h3>

<p>{project.desc}</p>

<a href={project.github}
className="text-blue-400">

View Code

</a>

</div>

))}

</div>

</section>

)

}

export default Projects