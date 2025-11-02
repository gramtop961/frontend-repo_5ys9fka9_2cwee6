import React from 'react';

const skills = [
  'Python',
  'SQL',
  'Excel',
  'Power BI',
  'Tableau',
  'PostgreSQL',
  'Streamlit',
  'Pandas',
  'Seaborn',
];

const Skills = () => {
  return (
    <section id="skills" className="w-full bg-gradient-to-b from-zinc-950 to-black py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h3 className="text-2xl font-semibold sm:text-3xl">Technical Skills</h3>
            <p className="mt-2 text-sm text-white/60">Tools and technologies I work with</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {skills.map((s) => (
            <div
              key={s}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <p className="text-sm font-medium">{s}</p>
              </div>
              <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-emerald-500/10 blur-2xl transition group-hover:scale-110" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
