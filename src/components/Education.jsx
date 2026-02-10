export default function Education() {
  return (
    <section id="education" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h3 className="text-4xl md:text-5xl font-extrabold text-center mb-24 text-white tracking-wide">
          Education
        </h3>

        {/* Timeline Wrapper */}
        <div className="relative max-w-4xl mx-auto space-y-20">

          {/* Vertical Line (desktop only) */}
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-white/30 hidden sm:block" />

          {/* MCA */}
          <div className="relative flex flex-col sm:flex-row gap-8 items-start">

            {/* Dot */}
            <div className="hidden sm:flex w-14 justify-center">
              <span className="w-4 h-4 rounded-full bg-blue-500 mt-6" />
            </div>

            {/* Card */}
            <div
              className="
                group relative
                flex flex-col sm:flex-row
                gap-6 sm:gap-8
                p-8
                rounded-3xl
                border border-white/25
                bg-transparent
                transition hover:border-blue-400
                w-full
              "
            >
              {/* Image */}
              <img
                src="/ku.jpg"
                alt="University of Kashmir"
                className="
                  w-28 h-28 sm:w-36 sm:h-36
                  mx-auto sm:mx-0
                  object-cover
                  rounded-2xl
                  border border-white/30
                "
              />

              {/* Content */}
              <div className="text-center sm:text-left">
                <h4 className="text-xl sm:text-2xl font-semibold text-white">
                  Master of Computer Applications
                </h4>
                <p className="text-white/70 mt-2">
                  University of Kashmir
                </p>
                <p className="text-white/50 text-sm mt-1">
                  2023 – 2025 • CGPA: 8.04
                </p>
              </div>

              {/* Hover Accent */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-br from-blue-500/15 to-transparent" />
            </div>
          </div>

          {/* BCA */}
          <div className="relative flex flex-col sm:flex-row gap-8 items-start">

            {/* Dot */}
            <div className="hidden sm:flex w-14 justify-center">
              <span className="w-4 h-4 rounded-full bg-blue-500 mt-6" />
            </div>

            {/* Card */}
            <div
              className="
                group relative
                flex flex-col sm:flex-row
                gap-6 sm:gap-8
                p-8
                rounded-3xl
                border border-white/25
                bg-transparent
                transition hover:border-blue-400
                w-full
              "
            >
              {/* Image */}
              <img
                src="/islamia.jpeg"
                alt="Islamia College"
                className="
                  w-28 h-28 sm:w-36 sm:h-36
                  mx-auto sm:mx-0
                  object-cover
                  rounded-2xl
                  border border-white/30
                "
              />

              {/* Content */}
              <div className="text-center sm:text-left">
                <h4 className="text-xl sm:text-2xl font-semibold text-white">
                  Bachelor of Computer Applications
                </h4>
                <p className="text-white/70 mt-2">
                  Islamia College of Science & Commerce
                </p>
                <p className="text-white/50 text-sm mt-1">
                  2019 – 2022 • CGPA: 7.94
                </p>
              </div>

              {/* Hover Accent */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-br from-blue-500/15 to-transparent" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
