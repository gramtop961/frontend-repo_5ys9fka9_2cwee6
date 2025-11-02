import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative w-full bg-black text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <p className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">Professional Portfolio</p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Aman Rukhsar
            </h1>
            <h2 className="text-xl font-medium text-white/80 md:text-2xl">Data Analyst & Computer Science Student</h2>
            <p className="max-w-prose text-base leading-relaxed text-white/70">
              As a dedicated data analyst and computer science student, I specialize in transforming complex data into valuable insights. My experience includes working on real-world projects involving Python, SQL, Excel, Power BI, and Tableau. I am passionate about leveraging data to drive strategic decision-making. I also have a strong foundation in machine learning models and data visualization. Feel free to reach out for internship opportunities or collaborations.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90">View Projects</a>
              <a href="#contact" className="rounded-lg border border-white/20 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10">Contact Me</a>
            </div>
          </div>
          <div className="relative h-[360px] w-full sm:h-[420px] md:h-[520px] lg:h-[600px]">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute -bottom-24 left-1/2 h-48 w-[140%] -translate-x-1/2 rounded-[50%] bg-gradient-to-t from-cyan-500/20 via-fuchsia-500/10 to-transparent blur-3xl" />
    </section>
  );
};

export default Hero;
