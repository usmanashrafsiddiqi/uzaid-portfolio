import { FaInstagram, FaWhatsapp, FaFacebookF } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="relative py-36">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT — Text */}
        <div>
          <h3 className="text-5xl font-extrabold text-white mb-6 leading-tight">
            Let’s <br /> Connect
          </h3>

          <p className="text-white/70 text-lg max-w-md mb-10">
            Open to opportunities, collaborations, and professional discussions.
            Feel free to reach out through any platform below.
          </p>

          <div className="space-y-4 text-white/80">
            <p>
              📍 Gulbahar Colony, Ellahi Bagh, Srinagar – 190020
            </p>
            <p>
              📞{" "}
              <a
                href="tel:+918825059757"
                className="hover:text-blue-400 transition"
              >
                +91 8825059757
              </a>
            </p>
            <p>
              ✉️{" "}
              <a
                href="mailto:uzaidshowkathandoo@gmail.com"
                className="hover:text-blue-400 transition"
              >
                uzaidshowkathandoo@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* RIGHT — Social Orbit */}
        <div className="relative flex justify-center items-center">
          {/* Center Circle */}
          <div
            className="
              w-36 h-36 rounded-full
              border border-white/30
              flex items-center justify-center
              text-white font-semibold text-lg
            "
          >
            Socials
          </div>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/_uzaid._.77"
            target="_blank"
            rel="noreferrer"
            className="
              absolute -top-6
              w-14 h-14 rounded-full
              border border-white/30
              flex items-center justify-center
              text-white text-xl
              hover:text-pink-400 hover:scale-110
              transition
            "
          >
            <FaInstagram />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/918825059757"
            target="_blank"
            rel="noreferrer"
            className="
              absolute -right-6
              w-14 h-14 rounded-full
              border border-white/30
              flex items-center justify-center
              text-white text-xl
              hover:text-green-400 hover:scale-110
              transition
            "
          >
            <FaWhatsapp />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/share/1HUUjZXyR2/"
            target="_blank"
            rel="noreferrer"
            className="
              absolute -bottom-6
              w-14 h-14 rounded-full
              border border-white/30
              flex items-center justify-center
              text-white text-xl
              hover:text-blue-400 hover:scale-110
              transition
            "
          >
            <FaFacebookF />
          </a>
        </div>
      </div>
    </section>
  );
}
