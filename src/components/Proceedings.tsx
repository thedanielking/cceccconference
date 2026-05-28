import { Link } from "react-router";
import { FadeUp } from "./ui/FadeUp";

const VOLUME = {
    title: "NCCECC 2026 Conference Proceedings",
    volume: "Volume 1",
    year: "2026",
    edition: "1st National Conference on Clean Energy and Climate Change",
    publishedDate: "June 15, 2026",
    Authors: ["Ani et al (1-9)", "Osa et al (10-23)", "Adumene et all (24-31)", "Olabemiwo & Okekunle (32-41)", "Ijaola et all (42-3)", "Ademuluyi (54-69)", "Lamidi (70-90)" ],
    pages: "90 pp.",
    indexedIn: ["Google Scholar", "Scopus-Pending", "African Journals Online"],
    doi: "10.XXXXXX/nccecc.2026",
    abstract:
      "This volume collects peer-reviewed papers presented at the 1st National Conference on Clean Energy and Climate Change, hosted at Bowen University (Online Mode), 15th–16th April 2026. Research spans solar energy deployment, climate policy, green finance, and community resilience strategies across Sub-Saharan Africa.",
  };
  
  const INDEX_TAGS = ["Google Scholar", "Scopus (Pending)", "African Journals Online", "Open Access"];
  
  const METADATA = [
    { label: "Published", value: VOLUME.publishedDate },
    { label: "Pages", value: VOLUME.pages },
    { label: "DOI", value: VOLUME.doi },
  ];
  
  export function Proceedings() {
    return (
      <section id="publication" className="bg-bg-alt py-24 font-sans border-t border-border-light">
        <FadeUp delay={1} duration={0.5}>
        <div className="px-8">
          {/* Section header */}
          <div className="text-center mb-12">
            <p className="text-[11px] font-bold text-primary tracking-widest uppercase mb-2.5">
              Publications
            </p>
            <h2 className="text-[clamp(1.7rem,3vw,2.5rem)] font-extrabold text-text-main tracking-[-0.5px] font-heading">
              NCCECC Proceedings
            </h2>
          </div>
  
          {/* Document card */}
          <div className="max-w-215 mx-auto bg-white border border-border-default rounded-2xl overflow-hidden shadow-[0_4px_32px_rgba(0,0,0,0.05)]">
            {/* Top layout: spine + content */}
            <div className="flex max-[600px]:flex-col">
              {/* Book spine */}
              <div className="w-2.5 bg-primary shrink-0" />
  
              {/* Main content */}
              <div className="flex-1 pt-9 px-9">
                {/* Header row */}
                <div className="flex items-start justify-between gap-5 flex-wrap mb-6">
                  <div className="flex-1 min-w-50">
                    {/* Volume badge */}
                    <div className="inline-flex items-center gap-1.75 bg-primary-light border border-primary-border rounded-md px-3 py-1 mb-3.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#155724" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                      </svg>
                      <span className="text-[10.5px] font-bold text-primary-dark tracking-[0.5px]">
                        {VOLUME.volume} &nbsp;·&nbsp; {VOLUME.year}
                      </span>
                    </div>
  
                    <h3 className="text-lg font-extrabold text-text-main leading-tight mb-1.5 font-heading">
                      {VOLUME.title}
                    </h3>
                    <p className="text-xs text-text-muted italic mb-0">
                      {VOLUME.edition}
                    </p>
                  </div> 
                  
                </div>

                {/* view more link */}
                <Link to="/publications"
                className="inline-flex items-center gap-2 bg-transparent text-primary-dark py-2.5 text-[13.5px] font-bold transition-all duration-220 whitespace-nowrap hover:underline "
              >
                View more
                <svg
                   width="16"
                   height="16"
                   fill="none"
                   viewBox="0 0 24 24"
                   stroke="currentColor"
                   strokeWidth="2.2"
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   className="text-primary-dark"
                >
                  <path d="M5 12h14" />
                  <path d="M13 6l6 6-6 6" />
                </svg>                
              </Link>
  
                
  
                {/* Abstract */}
                <div className="mb-5">
                  <p className="text-[9.5px] font-bold text-text-faint tracking-[0.8px] uppercase mb-1.75">
                    About This Volume
                  </p>
                  <p className="text-[13px] text-text-light leading-[1.75]">
                    {VOLUME.abstract}
                  </p>
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
                        className="bg-primary-light border border-primary-border rounded-md px-3 py-1 text-[11.5px] font-semibold text-primary-dark flex items-center gap-1.25"
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
  
              
            </div>
          </div>
        </div>
        </FadeUp>
      </section>
    );
  }