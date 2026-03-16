import { motion } from "framer-motion";
import GithubProjects from "../components/GithubProjects";

function Hero(){

return(

<section className="h-screen flex flex-col justify-center items-center text-center">

<motion.div
initial={{opacity:0,y:-50}}
animate={{opacity:1,y:0}}
transition={{duration:1}}
>

<h1 className="text-5xl font-bold">

Hello Recruiters 👋

</h1>

<h2 className="text-xl mt-4">

I'm Abhey — React Developer

</h2>

<p className="mt-4 max-w-xl">

I build modern web applications using
React, Redux, Tailwind and modern design patterns.

</p>

</motion.div>

<motion.div
animate={{y:[0,-10,0]}}
transition={{repeat:Infinity,duration:3}}
className="text-6xl mt-8"
>

👨‍💻

</motion.div>

</section>

)

}

export default Hero