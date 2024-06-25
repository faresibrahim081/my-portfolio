import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Landing from "@/components/LandingPage/Landing";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";


export default function Home() {
  return (
    <div>
      <Landing />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
