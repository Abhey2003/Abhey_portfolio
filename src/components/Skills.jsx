import { motion } from "framer-motion"

const skills=[
{name:"React",level:95},
{name:"JavaScript",level:90},
{name:"Redux",level:85},
{name:"Tailwind",level:90},
]

function Skills(){

return(

<section id="skills" className="p-10">

<h2 className="text-3xl font-bold mb-6">Skills</h2>

{skills.map((skill,i)=>(

<div key={i} className="mb-4">

<div className="flex justify-between">

<span>{skill.name}</span>
<span>{skill.level}%</span>

</div>

<div className="bg-gray-700 h-2">

<motion.div
className="bg-blue-500 h-2"
initial={{width:0}}
whileInView={{width:skill.level+"%"}}
/>

</div>

</div>

))}

</section>

)

}

export default Skills