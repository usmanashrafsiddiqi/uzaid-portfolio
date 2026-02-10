export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28">
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text content */}
        <div>
          <h2 className="text-5xl font-extrabold leading-tight text-white">
            Hi, I’m <span className="text-blue-600">Uzaid</span>
          </h2>

          <p className="mt-6 text-lg text-white max-w-xl">
            MCA graduate with hands-on experience in data operations, inventory & billing systems,
            and web development. Focused on building accurate, scalable, and user-friendly solutions.
          </p>

          <a
            href="#contact"
            className="inline-block mt-8 px-10 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
          >
            Contact Me
          </a>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/uzaid.jpeg"
            alt="Uzaid"
            className="w-72 h-72 rounded-2xl object-cover shadow-xl"
          />
        </div>

      </div>
    </section>
  );
}
