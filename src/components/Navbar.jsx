function Navbar() {

  return (

    <nav className="fixed top-0 w-full flex justify-between p-5
bg-white/10 backdrop-blur-lg border-b border-white/20">

      <h1 className="text-xl font-bold">
        Abhey.dev
      </h1>

      <ul className="flex gap-6">

        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#certifications">View Certifications</a></li>
        <li><a
          href="/Abhey_React_resume.pdf"
          download
          className="bg-green-600 px-4 py-2 rounded-lg"
        >
          Download Resume
        </a></li>

      </ul>

    </nav>

  )

}

export default Navbar