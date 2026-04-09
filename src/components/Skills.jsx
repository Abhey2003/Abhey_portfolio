import { motion } from "framer-motion";

const skills = [
  { id: 1, name: "React", level: 95 },
  { id: 2, name: "JavaScript", level: 90 },
  { id: 3, name: "Redux", level: 85 },
  { id: 4, name: "Tailwind", level: 90 },
];

function Skills() {
  return (
    <section id="skills" className="py-10 sm:py-14 md:py-16">
      <div className="container-custom">
        
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
          Skills
        </h2>

        {/* Skills List */}
        <div className="space-y-6">
          {skills.map((skill) => (
            <div key={skill.id}>
              
              {/* Top Row */}
              <div className="flex justify-between text-sm sm:text-base mb-1">
                <span className="font-medium">{skill.name}</span>
                <span>{skill.level}%</span>
              </div>

              {/* Progress Bar */}
              <div className="bg-white/10 h-2 rounded-full overflow-hidden">
                <motion.div
                  className="bg-blue-500 h-2 rounded-full gpu"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;