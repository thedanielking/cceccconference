export function FinalCTA() {
  return (
    <section className="bg-primary-dark py-24 font-sans relative overflow-hidden">
      {/* Decorative rings */}
      <div className="absolute -top-25 -right-25 w-120 h-120 rounded-full border border-primary/12 pointer-events-none" />
      <div className="absolute -top-15 -right-15 w-80 h-80 rounded-full bg-primary/6 pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-90 h-90 rounded-full border border-primary/8 pointer-events-none" />

      <div className="px-8 relative text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-primary/12 border border-primary/30 rounded-md px-3.5 py-1.5 mb-7">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="text-[11px] font-bold text-primary tracking-[0.9px] uppercase">
            April 15–16, 2027 &nbsp;·&nbsp; Hybrid Mode
          </span>
        </div>

        <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold text-white tracking-[-0.8px] leading-[1.12] mb-4.5 font-heading max-w-165 mx-auto">
          Ready to Take Action?{" "}
          <span className="text-primary">The Future of Energy Starts With You.</span>
        </h2>

        <p className="text-base text-white/70 max-w-130 mx-auto mb-11 leading-[1.75]">
          Join researchers, policymakers, engineers, and advocates at Nigeria's
          premier clean energy and climate change conference. Submit your abstract
          or register your place today.
        </p>

        {/* CTA Row */}
        <div className="flex justify-center gap-3.5 flex-wrap mb-13">
          <a
            href="#fees"
            className="inline-flex items-center gap-2 bg-white text-primary-dark px-8 py-4 rounded-lg no-underline text-[14.5px] font-bold shadow-[0_4px_20px_rgba(0,0,0,0.18)] transition-all duration-200 hover:bg-primary-light hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(0,0,0,0.22)]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <line x1="19" y1="8" x2="19" y2="14" />
              <line x1="22" y1="11" x2="16" y2="11" />
            </svg>
            Register to Attend
          </a>

          <a
            href="https://forms.gle/p8GGUnL6QCdrogsi8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-transparent text-white px-8 py-4 rounded-lg no-underline text-[14.5px] font-semibold border-2 border-white/35 transition-all duration-200 hover:border-primary hover:text-primary hover:-translate-y-0.5"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            Submit Your Abstract
          </a>
        </div>

        {/* Trust strip */}
        <div className="flex justify-center items-center gap-8 flex-wrap pt-8 border-t border-white/8">
          {[
            { icon: "🎓", label: "Open to Researchers & Students" },
            { icon: "🌍", label: "Sub-Saharan Africa Focus" },
            { icon: "📄", label: "Post-Conference Publication Support" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-white/55 text-[13px] font-medium">
              <span className="text-[17px]">{item.icon}</span>
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}