const HIGHLIGHTS = [
    {
      value: "60",
      unit: "+",
      label: "Speaker Slots",
      sub: "Researchers & practitioners",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      value: "7",
      unit: "",
      label: "Sub-Themes",
      sub: "Interdisciplinary coverage",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v4M12 18v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M2 12h4M18 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
        </svg>
      ),
    },
    {
      value: "2",
      unit: "",
      label: "Conference Days",
      sub: "15th–16th April 2026",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      ),
    },
    {
      value: "∞",
      unit: "",
      label: "Publication Outlets",
      sub: "Validated & indexed",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      ),
    },
  ];
  
  const PARTNERS = [
    { abbr: "BU", name: "Bowen University" , logo: "../BUlogo.jpg" },
    { abbr: "NUC", name: "Natl. Universities Commission", logo: "../NUClogo.jpg" },
    { abbr: "PTDF", name: "PTDF", logo: "../PDTFlogo.jpg" },
    { abbr: "TETF", name: "TETFund", logo: "TETFundlogo.jpg" },
  ];
  
  const EDITIONS = [
    { year: "2026", code: "NCCECC-2026", status: "completed", active: true },
    { year: "2027", code: "NCCECC-2027", status: "upcoming", active: false },
  ];
  
  const INFO_ROWS = [
    {
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2ECC71" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      ),
      value: "15th–16th April 2026",
    },
    {
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2ECC71" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      value: "Bowen University · Online Mode",
    },
    {
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2ECC71" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      value: "Hybrid — International Reach",
    },
  ];
  
  export function PastConferences() {
    return (
      <section className="bg-bg-alt py-24 font-sans border-t border-border-light">
        <div className="max-w-[1280px] mx-auto px-8">
          {/* Section header */}
          <div className="flex items-end justify-between gap-6 mb-12 flex-wrap">
            <div>
              <p className="text-[11px] font-bold text-primary tracking-[1.2px] uppercase mb-2.5">
                Conference History
              </p>
              <h2 className="text-[clamp(1.7rem,3vw,2.5rem)] font-extrabold text-text-main tracking-[-0.5px] font-heading leading-[1.1]">
                Past Conferences
              </h2>
            </div>
  
            {/* Edition pill nav */}
            <div className="flex gap-2 bg-border-light p-[5px] rounded-[10px]">
              {EDITIONS.map((ed) => (
                <div
                  key={ed.year}
                  className={`px-4 py-[7px] rounded-md text-[12.5px] font-bold font-heading flex items-center gap-1.5 tracking-[0.3px] cursor-default ${
                    ed.active ? "bg-primary-dark text-white" : "bg-transparent text-text-faint"
                  }`}
                >
                  {ed.active && (
                    <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block shrink-0" />
                  )}
                  {ed.year}
                  {ed.status === "upcoming" && (
                    <span className="text-[9px] bg-primary/15 text-primary px-[5px] py-px rounded font-semibold">
                      Soon
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
  
          {/* Main content: two-column split */}
          <div className="grid grid-cols-2 gap-7 items-start max-[860px]:grid-cols-1">
            {/* LEFT: Identity card */}
            <div className="bg-text-main rounded-[18px] overflow-hidden relative">
              {/* Decorative grid pattern */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(rgba(46,204,113,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(46,204,113,0.06) 1px, transparent 1px)`,
                  backgroundSize: "32px 32px",
                }}
              />
  
              {/* Top glow */}
              <div
                className="absolute -top-[60px] -left-10 w-[280px] h-[280px] rounded-full bg-primary/6 blur-[40px] pointer-events-none"
              />
  
              <div className="relative px-10 pt-10 pb-9">
                {/* Status + edition badge */}
                <div className="flex items-center gap-2.5 mb-8">
                  <div className="flex items-center gap-1.5 bg-primary/12 border border-primary/25 rounded-full px-3 py-[5px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-[10.5px] font-bold text-primary tracking-[0.8px] uppercase">
                      Completed
                    </span>
                  </div>
                  <span className="text-[10.5px] font-semibold text-white/30 tracking-[0.8px] uppercase">
                    1st Edition
                  </span>
                </div>
  
                {/* Conference code */}
                <div className="text-[clamp(2.4rem,5vw,3.6rem)] font-black text-white font-heading tracking-[-1.5px] leading-none mb-2">
                  NCCECC
                  <span className="text-primary">-2026</span>
                </div>
  
                <p className="text-[13px] text-white/50 italic leading-relaxed mb-8 max-w-[340px]">
                  National Conference on Clean Energy and Climate Change
                </p>
  
                {/* Key info rows */}
                {INFO_ROWS.map((row, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 py-[11px] border-t border-white/[0.06]"
                  >
                    <div className="w-[30px] h-[30px] rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                      {row.icon}
                    </div>
                    <span className="text-[13px] text-white/75 font-medium">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
  
              {/* Bottom action strip */}
              <div className="border-t border-white/[0.07] px-10 py-[18px] flex items-center justify-between gap-3 flex-wrap">
                <span className="text-xs text-white/35">
                  View previous edition
                </span>
                {/* <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-primary no-underline transition-all duration-200 hover:gap-2.5"
                >
                  Conference Archive
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </a> */}
              </div>
            </div>
  
            {/* RIGHT: Stats + partners */}
            <div className="flex flex-col gap-5">
              {/* Stats 2×2 grid */}
              <div className="grid grid-cols-2 gap-3.5">
                {HIGHLIGHTS.map((h, i) => (
                  <div
                    key={i}
                    className={`rounded-[14px] p-6 px-[22px] flex flex-col gap-2.5 transition-all duration-[220ms] cursor-default hover:-translate-y-[3px] hover:border-primary hover:bg-primary-light hover:shadow-[0_8px_24px_rgba(21,87,36,0.1)] bg-white border border-border-default`}
                  >
                    <div className="w-[38px] h-[38px] rounded-md bg-white border border-primary-faint flex items-center justify-center text-primary-dark">
                      {h.icon}
                    </div>
                    <div>
                      <div className="text-[2.2rem] font-black text-text-main font-heading leading-none tracking-[-1px]">
                        {h.value}
                        <span className="text-[1.2rem] text-primary">{h.unit}</span>
                      </div>
                      <div className="text-[13px] font-bold text-text-body mt-1">
                        {h.label}
                      </div>
                      <div className="text-[11.5px] text-text-faint mt-0.5">
                        {h.sub}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
  
              {/* Theme tag row */}
              <div className="bg-bg-alt border border-border-default rounded-[14px] p-5 px-[22px]">
                <p className="text-[10px] font-bold text-text-faint tracking-[1px] uppercase mb-3">
                  2026 Conference Theme
                </p>
                <p className="text-[13px] text-text-body italic leading-relaxed m-0 border-l-[3px] border-l-primary pl-3">
                  "Advancing Clean Energy Solutions for Climate-Resilient and Sustainable Development in Sub-Saharan Africa"
                </p>
              </div>
  
              {/* Partner logos */}
              <div className="border border-border-default rounded-[14px] p-5 px-[22px] bg-white">
                <p className="text-[10px] font-bold text-text-faint tracking-[1px] uppercase mb-3.5">
                  Sponsors & Partners
                </p>
                <div className="grid grid-cols-4 gap-2.5 max-[480px]:grid-cols-2">
                  {PARTNERS.map((p) => (
                    <div
                      key={p.abbr}
                      title={p.name}
                      className="h-16 bg-[#f9fafb] overflow-hidden border-[1.5px] border-dashed border-border-default rounded-lg flex flex-col items-center justify-center gap-[3px] transition-all duration-200 hover:border-primary hover:bg-primary-light hover:border-solid cursor-default"
                    >
                      {/* <span className="text-[13px] font-extrabold text-[#cbd5e1] font-heading tracking-[0.3px]">
                        {p.abbr}
                      </span> */}
                      <img src={p.logo} alt={p.abbr} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }