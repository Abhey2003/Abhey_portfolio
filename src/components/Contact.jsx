import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

function Contact() {
  const contacts = [
    {
      icon: <FaPhone />,
      label: "Call",
      link: "tel:+919877098312",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      link: "https://github.com/Abhey2003",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/abhey-johary-39a65b269/",
    },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16">
      <div className="container-custom text-center">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10">
          Contact Me
        </h2>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

          {contacts.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center 
                         bg-white/5 hover:bg-white/10
                         rounded-xl p-6 shadow 
                         hover:scale-105 hover:bg-gray-700 
                         transition duration-300"
            >
              <div className="text-2xl sm:text-3xl mb-2">
                {item.icon}
              </div>

              <span className="text-sm sm:text-base text-gray-300">
                {item.label}
              </span>
            </a>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Contact;