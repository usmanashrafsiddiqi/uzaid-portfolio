const skills = [
  "HTML",
  "CSS",
  "WordPress",
  "Git",
  "MS Word",
  "MS Excel",
  "MS PowerPoint",
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h3 className="text-4xl md:text-5xl font-extrabold text-center mb-20 text-white tracking-wide">
          Skills
        </h3>

        {/* Skills Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {skills.map((skill, index) => (
            <div
              key={skill}
              className="
                group relative p-8 rounded-3xl
                border border-white/25
                bg-transparent
                transition-all duration-500
                hover:border-blue-400
              "
            >
              {/* Number Indicator */}
              <span className="absolute top-6 right-6 text-sm text-white/40 font-mono">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Skill Name */}
              <h4 className="text-2xl font-semibold text-white tracking-wide">
                {skill}
              </h4>

              {/* Divider */}
              <div className="mt-4 h-[2px] w-10 bg-white/30 group-hover:bg-blue-400 transition-all duration-500" />

              {/* Hover Background Accent */}
              <div
                className="
                  absolute inset-0 rounded-3xl
                  opacity-0 group-hover:opacity-100
                  transition duration-500
                  pointer-events-none
                  bg-gradient-to-br from-blue-500/15 via-transparent to-transparent
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
