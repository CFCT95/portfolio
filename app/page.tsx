import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 text-center text-xs text-slate-400 dark:text-slate-600 border-t border-slate-200 dark:border-slate-800">
        <p>
          Built with Next.js &amp; Tailwind CSS ·{" "}
          <span className="text-brand-500">Cristian Torres</span> © {new Date().getFullYear()}
        </p>
      </footer>
    </>
  );
}
