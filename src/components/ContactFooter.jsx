import React from 'react';

const ContactFooter = () => {
  return (
    <footer id="contact" className="w-full bg-gradient-to-t from-black to-zinc-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold">Let’s connect</h3>
            <p className="mt-2 max-w-prose text-sm text-white/70">
              Open to internships and collaborations. If you have an opportunity or just want to say hello, feel free to reach out.
            </p>

            <div className="mt-6 space-y-2 text-sm">
              <a href="mailto:aman.rukhsar.19@gmail.com" className="block text-white/90 underline decoration-white/20 underline-offset-4 hover:text-white">
                aman.rukhsar.19@gmail.com
              </a>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="https://www.linkedin.com/in/aman-rukhsar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-white/90 transition hover:bg-white/10"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Whirls19?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-white/90 transition hover:bg-white/10"
                >
                  GitHub
                </a>
                <a
                  href="assets/Resume.docx"
                  download="Aman_Rukhsar_Resume.docx"
                  className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-emerald-500/10 px-3 py-1.5 text-sm font-medium text-emerald-200 transition hover:bg-emerald-500/20"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>

          <div className="md:text-right">
            <div className="inline-flex flex-col items-start gap-2 rounded-xl border border-white/10 bg-white/5 p-5 md:items-end">
              <p className="text-sm text-white/70">Copyright</p>
              <p className="text-sm font-medium text-white/90">© 2025 Aman Rukhsar. Aspiring Data Analyst. Student at Christ University, Bangalore.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
