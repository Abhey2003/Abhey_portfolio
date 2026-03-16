import {FaGithub,FaLinkedin,FaPhone} from "react-icons/fa"

function Contact(){

return(

<section id="contact" className="p-10 text-center">

<h2 className="text-3xl mb-6">
Contact Me
</h2>

<div className="flex justify-center gap-10 text-3xl">

<a href="tel:+91XXXXXXXXXX">
<FaPhone/>
</a>

<a href="https://github.com/yourgithub">
<FaGithub/>
</a>

<a href="https://linkedin.com/in/abhey-johary-39a65b269">
<FaLinkedin/>
</a>

</div>

</section>

)

}

export default Contact