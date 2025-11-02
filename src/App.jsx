import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactFooter from './components/ContactFooter';

function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-black text-white">
      {/* Top Nav */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
          <a href="#home" className="text-sm font-semibold tracking-wide text-white">Aman Rukhsar</a>
          <nav className="hidden gap-6 text-sm text-white/80 sm:flex">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a
            href="assets/Resume.docx"
            download="Aman_Rukhsar_Resume.docx"
            className="rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-black hover:bg-white/90"
          >
            Download Resume
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <Skills />
        <Projects />
        <ContactFooter />
      </main>
    </div>
  );
}

export default App;
