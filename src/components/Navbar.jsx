export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div
          className="flex justify-between items-center rounded-2xl
          bg-transparent border border-transparent"
        >
          <h1 className="px-6 py-3 text-xl font-semibold tracking-wide text-white">
            Uzaid Handoo
          </h1>

          <ul className="hidden md:flex gap-8 px-6 py-3 font-medium text-white">
            <li>
              <a href="#skills" className="hover:text-blue-500 transition">
                Skills
              </a>
            </li>
            <li>
              <a href="#education" className="hover:text-blue-500 transition">
                Education
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
