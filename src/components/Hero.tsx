
export function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center overflow-hidden font-sans"
    >
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('../bgCleanEnergy.jpg')] bg-cover bg-position-[center_40%] bg-no-repeat" />

      {/* Layered overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.70) 42%, rgba(255,255,255,0.20) 70%, rgba(255,255,255,0.05) 100%)",
        }}
      />

      {/* Subtle bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-white/10 to-transparent" />

      {/* Content */}
      <div className="relative mx-auto px-8 pt-27.5 pb-20 w-full">
        <div className="max-w-200">
          {/* Conference edition badge */}
          <div className="flex w-fit items-center gap-2 ring ring-primary-dark rounded px-3.5 py-1.5 mb-7 bg-white/85">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-[11px] font-bold text-primary-dark tracking-wider uppercase">
              2nd National Conference &nbsp;·&nbsp; Hybrid Mode
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-[clamp(1.9rem,4vw,3.1rem)] font-extrabold text-text-main leading-[1.13] tracking-[-0.8px] mb-4.5 font-heading text-center lg:text-left">
            2nd National Conference on{" "}
            <span className="text-primary-dark">Clean Energy and Climate Change</span>
          </h1>

          {/* Date strip */}
          <div className="flex items-center justify-center w-fit mx-auto gap-2.5 bg-primary-dark text-white rounded-md px-4 py-2 mb-5 text-sm font-semibold lg:mx-0">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            April 15–16, 2027
          </div>

          {/* Theme */}
          <div className="bg-primary-light/92 border border-primary-border border-l-4 border-l-primary rounded-r-lg px-4 py-3.5 mb-9 max-w-155">
            <p className="text-[11px] font-bold text-primary-dark tracking-[0.8px] uppercase mb-1">
              Conference Theme
            </p>
            <p className="text-[0.95rem] text-[#1a3a24] leading-relaxed italic font-medium">
              "Advancing Clean Energy Solutions for Climate-Resilient and Sustainable Development in Sub-Saharan Africa"
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-3.5">
              <a href="#fees" className="flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-lg text-sm font-bold shadow-[0_4px_20px_rgba(46,204,113,0.38)] transition-all duration-200 hover:bg-primary-hover hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(22, 29, 25, 0.48)]">
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
              className="flex items-center gap-2 bg-white/90 text-primary-dark px-7 py-3.5 rounded-lg no-underline text-sm font-semibold border-2 border-primary-dark transition-all duration-200 hover:bg-primary-light hover:-translate-y-0.5 backdrop-blur-sm"
            >
              Submit Your Paper
            </a>
          </div>

          {/* Inline note */}
          <p className="mt-5 text-xs text-text-muted flex items-center gap-1.5">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#2ECC71" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            Original, previously unpublished work is welcome from researchers, practitioners, academics, and students.
          </p>
        </div>
      </div>

      {/* Scroll hint */}
      {/* <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-50">
        <div className="w-[18px] h-7 border-2 border-primary-dark rounded-[9px] flex justify-center pt-1">
          <div className="w-[3px] h-[5px] bg-primary rounded-sm animate-scroll-dot" />
        </div>
      </div> */}
    </section>
  );
}