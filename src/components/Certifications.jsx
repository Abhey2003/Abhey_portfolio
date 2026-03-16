import { certifications } from "../data/certifications";

function Certifications(){

return(

<section id="certifications" className="p-10">

<h2 className="text-3xl font-bold mb-6">
Certifications
</h2>

<div className="grid md:grid-cols-3 gap-6">

{certifications.map((cert,index)=>(

<div
key={index}
className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl"
>

<h3 className="text-xl font-semibold">

{cert.title}

</h3>

<p className="text-gray-300">

{cert.platform}

</p>

<p className="text-gray-400">

{cert.year}

</p>

</div>

))}

</div>

</section>

)

}

export default Certifications