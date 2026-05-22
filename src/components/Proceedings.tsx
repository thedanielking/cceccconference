const VOLUME = {
    title: "NCCECC 2026 Conference Proceedings",
    volume: "Volume 1",
    year: "2026",
    edition: "1st National Conference on Clean Energy and Climate Change",
    publishedDate: "June 15, 2026",
    editors: ["Prof. Moses Emetere"],
    pages: "312 pp.",
    indexedIn: ["Google Scholar", "Scopus-Pending", "African Journals Online"],
    isbn: "978-XXX-XXXX-XX-X",
    doi: "10.XXXXX/nccecc.2026",
    abstract:
      "This volume collects peer-reviewed papers presented at the 1st National Conference on Clean Energy and Climate Change, hosted at Bowen University (Online Mode), 15th–16th April 2026. Research spans solar energy deployment, climate policy, green finance, and community resilience strategies across Sub-Saharan Africa.",
  };
  
  const INDEX_TAGS = ["Google Scholar", "Scopus (Pending)", "African Journals Online", "Open Access"];
  
  const METADATA = [
    { label: "Published", value: VOLUME.publishedDate },
    { label: "Pages", value: VOLUME.pages },
    { label: "ISBN", value: VOLUME.isbn },
    { label: "DOI", value: VOLUME.doi },
  ];
  
  export function Proceedings() {
    return (
      <section className="bg-white py-24 font-sans border-t border-border-light">
        <div className="max-w-[1280px] mx-auto px-8">
          {/* Section header */}
          <div className="text-center mb-12">
            <p className="text-[11px] font-bold text-primary tracking-[1.2px] uppercase mb-2.5">
              Publications
            </p>
            <h2 className="text-[clamp(1.7rem,3vw,2.5rem)] font-extrabold text-text-main tracking-[-0.5px] font-heading">
              NCCECC Proceedings
            </h2>
          </div>
  
          {/* Document card */}
          <div className="max-w-[860px] mx-auto bg-white border border-border-default rounded-[18px] overflow-hidden shadow-[0_4px_32px_rgba(0,0,0,0.05)]">
            {/* Top layout: spine + content */}
            <div className="flex max-[600px]:flex-col">
              {/* Book spine */}
              <div className="w-2.5 bg-primary shrink-0" />
  
              {/* Main content */}
              <div className="flex-1 pt-9 px-9">
                {/* Header row */}
                <div className="flex items-start justify-between gap-5 flex-wrap mb-6">
                  <div className="flex-1 min-w-[200px]">
                    {/* Volume badge */}
                    <div className="inline-flex items-center gap-[7px] bg-primary-light border border-primary-border rounded-md px-3 py-1 mb-3.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#155724" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                      </svg>
                      <span className="text-[10.5px] font-bold text-primary-dark tracking-[0.5px]">
                        {VOLUME.volume} &nbsp;·&nbsp; {VOLUME.year}
                      </span>
                    </div>
  
                    <h3 className="text-[1.25rem] font-extrabold text-text-main leading-[1.25] mb-1.5 font-heading">
                      {VOLUME.title}
                    </h3>
                    <p className="text-[12.5px] text-text-muted italic mb-0">
                      {VOLUME.edition}
                    </p>
                  </div>
  
                  {/* Document icon mockup */}
                  <div className="w-[72px] h-[90px] bg-[#f9fafb] border-[1.5px] border-border-default rounded-lg flex flex-col items-center justify-center gap-1.5 shrink-0 relative overflow-hidden">
                    {/* Dog-ear corner */}
                    <div
                      className="absolute top-0 right-0 w-[18px] h-[18px] bg-border-default"
                      style={{ clipPath: "polygon(100% 0, 100% 100%, 0 0)" }}
                    />
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                    <span className="text-[9px] font-bold text-accent-red tracking-[0.5px]">
                      PDF
                    </span>
                  </div>
                </div>
  
                {/* Metadata row */}
                <div className="flex gap-6 flex-wrap pb-5 border-b border-border-light mb-5">
                  {METADATA.map((meta) => (
                    <div key={meta.label}>
                      <p className="text-[9.5px] font-bold text-text-faint tracking-[0.8px] uppercase mb-0.5">
                        {meta.label}
                      </p>
                      <p className="text-[12.5px] font-semibold text-text-body">
                        {meta.value}
                      </p>
                    </div>
                  ))}
                </div>
  
                {/* Abstract */}
                <div className="mb-5">
                  <p className="text-[9.5px] font-bold text-text-faint tracking-[0.8px] uppercase mb-[7px]">
                    About This Volume
                  </p>
                  <p className="text-[13px] text-text-light leading-[1.75]">
                    {VOLUME.abstract}
                  </p>
                </div>
  
                {/* Editors */}
                <div className="mb-5 pb-5 border-b border-border-light">
                  <p className="text-[9.5px] font-bold text-text-faint tracking-[0.8px] uppercase mb-2">
                    Editors
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {VOLUME.editors.map((ed) => (
                      <span
                        key={ed}
                        className="bg-[#f9fafb] border border-border-default rounded-md px-3 py-1 text-xs font-medium text-text-body"
                      >
                        {ed}
                      </span>
                    ))}
                  </div>
                </div>
  
                {/* Indexed in */}
                <div className="mb-7">
                  <p className="text-[9.5px] font-bold text-text-faint tracking-[0.8px] uppercase mb-2">
                    Indexed / Listed In
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {INDEX_TAGS.map((tag) => (
                      <span
                        key={tag}
                        className="bg-primary-light border border-primary-border rounded-md px-3 py-1 text-[11.5px] font-semibold text-primary-dark flex items-center gap-[5px]"
                      >
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#2ECC71" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
  
            {/* Footer action bar */}
            <div className="border-t border-border-light bg-bg-alt px-9 py-5 flex items-center justify-between gap-4 flex-wrap">
              <p className="text-xs text-text-faint m-0 flex items-center gap-1.5">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#2ECC71" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                Full proceedings available upon conference completion.
              </p>
  
              {/* <a
                href="#"
                className="inline-flex items-center gap-2 bg-transparent text-primary-dark px-[22px] py-2.5 rounded-lg no-underline text-[13.5px] font-bold border-[1.5px] border-primary-dark transition-all duration-[220ms] whitespace-nowrap hover:bg-primary-dark hover:text-white hover:shadow-[0_4px_16px_rgba(21,87,36,0.2)]"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="12" y1="18" x2="12" y2="12" />
                  <line x1="9" y1="15" x2="15" y2="15" />
                </svg>
                Download Proceedings (PDF)
              </a> */}
            </div>
          </div>
        </div>
      </section>
    );
  }