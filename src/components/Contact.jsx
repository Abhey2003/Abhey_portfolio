import {FaGithub,FaLinkedin,FaPhone} from "react-icons/fa"

function Contact(){

return(

<section id="contact" className="p-10 text-center">

<h2 className="text-3xl mb-6">
Contact Me
</h2>

<div className="flex justify-center gap-10 text-3xl">

<a href="tel:+919877098312">
<FaPhone/>
</a>

<a href="https://github.com/Abhey2003" target="_blank" rel="noopener noreferrer">
<FaGithub/>
</a>

<a href="https://www.linkedin.com/in/abhey-johary-39a65b269/" target="_blank" rel="noopener noreferrer">
<FaLinkedin/>
</a>

</div>

</section>

)

}

export default Contact