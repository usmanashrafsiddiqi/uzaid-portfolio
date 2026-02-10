const experiences = [
  {
    company: "Tariq Medical Hall",
    role: "Inventory & Billing Manager (MARG ERP 9+) – Part Time",
    duration: "2019 – 2021",
    highlights: [
      "Managed inventory operations and billing accuracy",
      "Improved efficiency using structured ERP workflows",
    ],
  },
  {
    company: "Sher-i-Kashmir Institute of Medical Sciences, Soura",
    role: "Data Entry Operator",
    duration: "2023",
    highlights: [
      "Handled sensitive medical data with high accuracy",
      "Ensured compliance with healthcare data standards",
      "Optimized patient record management processes",
    ],
  },
  {
    company: "Gabfire Private Limited",
    role: "Website Developer – Intern",
    duration: "2025",
    highlights: [
      "Built responsive UI components",
      "Worked closely with design and dev teams",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h3 className="text-center text-5xl font-extrabold text-white mb-24 tracking-wide">
          Experience
        </h3>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="
                group relative overflow-hidden rounded-3xl
                border border-white/20
                p-10
                transition-all duration-500
                hover:border-white/50
                hover:-translate-y-2
              "
            >
              {/* Gradient glow */}
              <div
                className="
                  absolute inset-0 opacity-0 group-hover:opacity-100
                  bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20
                  transition-opacity duration-500
                "
              />

              <div className="relative z-10">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-2xl font-semibold text-white">
                    {exp.company}
                  </h4>
                  <span className="text-sm text-white/60">
                    {exp.duration}
                  </span>
                </div>

                <p className="text-white/80 font-medium mb-6">
                  {exp.role}
                </p>

                <ul className="space-y-3 text-white/70 text-sm">
                  {exp.highlights.map((point, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-blue-400">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
