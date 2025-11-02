import React from 'react';

const projects = [
  {
    title: 'Udemy Course Analysis & Recommendation System',
    description:
      'Architected an end-to-end data pipeline for 3,600+ courses, deployed on a Streamlit app with a content-based recommendation system (TF-IDF) and analytics dashboard.',
    link: 'https://udemy-courses-recommendation-system.streamlit.app/',
    tag: 'Python · Streamlit · ML',
  },
  {
    title: 'Finnova Finance Training App (Flutter Project)',
    description:
      'Built a comprehensive Flutter finance/trading app with real-time market data, financial calculators, and a paper trading feature.',
    link: 'https://github.com/Whirls19/Finnova',
    tag: 'Flutter · Dart',
  },
  {
    title: 'Jobs Search Project (SQL Project)',
    description:
      'Designed advanced SQL queries on a 2023 job postings dataset to identify in-demand skills and hiring trends using PostgreSQL.',
    link: 'https://github.com/Whirls19/SQL-Jobs-Search-Project',
    tag: 'PostgreSQL · SQL',
  },
  {
    title: 'Airplanes vs Wildlife (Tableau Project)',
    description:
      'Analyzed U.S. aviation collision data and created Tableau dashboards highlighting frequency, damages, and incident trends.',
    link: 'https://public.tableau.com/app/profile/aman.rukhsar/viz/AirplanesVs_Wildlife/Dashboard1',
    tag: 'Tableau',
  },
  {
    title: 'NYC Tree Census Analysis (Tableau Project)',
    description:
      'Visualized NYC’s tree census, building interactive dashboards to explore species diversity, health, and geographic distribution.',
    link: 'https://public.tableau.com/app/profile/aman.rukhsar/viz/TreesNYC_17580032183300/Dashboard',
    tag: 'Tableau',
  },
  {
    title: 'Nashville Housing Data Cleaning (SQL Project)',
    description:
      'Cleaned and standardized Nashville housing data using SQL Server, formatting dates, filling missing addresses, and removing duplicates.',
    link: 'https://github.com/Whirls19/Nashville-Housing-Data-Cleaning-and-Analysis',
    tag: 'SQL Server',
  },
  {
    title: 'COVID-19 Vaccination Data Analysis (SQL Project)',
    description:
      'Analyzed COVID-19 vaccination data, applying advanced SQL for cleaning, aggregation, and calculating coverage metrics in SQL Server.',
    link: 'https://github.com/Whirls19/COVID-19-Vaccination-Data-Analysis',
    tag: 'SQL Server',
  },
  {
    title: 'Customer Churn Analysis (Python Project)',
    description:
      'Performed EDA on a telecom churn dataset using Python (Pandas, Seaborn) to identify key factors affecting customer retention.',
    link: 'https://github.com/Whirls19/Customer-Churn-Analysis',
    tag: 'Python · Pandas · Seaborn',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full bg-black py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h3 className="text-2xl font-semibold sm:text-3xl">Projects</h3>
            <p className="mt-2 text-sm text-white/60">A selection of recent work and case studies</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
            >
              <div>
                <span className="inline-flex rounded-full bg-emerald-400/10 px-2 py-0.5 text-[10px] font-medium text-emerald-300 ring-1 ring-emerald-400/30">
                  {p.tag}
                </span>
                <h4 className="mt-3 text-lg font-semibold leading-snug">{p.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{p.description}</p>
              </div>
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white/80 group-hover:text-white">
                <span>Open project</span>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 7h-6m6 0v6m0-6L7 17" />
                </svg>
              </div>
              <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-fuchsia-500/10 blur-2xl transition group-hover:scale-110" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
