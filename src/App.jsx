import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import AnimatedBackground from "./components/background/AnimatedBackground";
import Experience from "./components/Experience";

export default function App() {
  return (
    <div className="relative min-h-screen text-gray-800">
      <AnimatedBackground />

      <Navbar />
      <Hero />
      <Skills />
      <Education />
      <Experience/>
      <Contact />
    </div>
  );
}
