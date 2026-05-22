import { useState, useEffect } from "react";
import { Modal } from "./Modal";
import { RegistrationModal } from "./RegistrationModal";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Timeline", href: "#timeline" },
  { label: "Pillars", href: "#pillars" },
  { label: "Fees", href: "#fees" },
  { label: "Contact", href: "#contact" },
];

function MenuIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function XIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Modal>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/96 shadow-[0_1px_0_rgba(0,0,0,0.08),0_4px_24px_rgba(0,0,0,0.05)]"
            : "bg-white/96 shadow-[0_1px_0_rgba(0,0,0,0.06)]"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-8 h-[68px] flex items-center justify-between gap-6">
          {/* Logo — unchanged */}
          <a href="#home" className="flex items-center gap-2.5 no-underline shrink-0">
            <div className="w-[38px] h-[38px] bg-primary-dark rounded-[9px] flex items-center justify-center">
              <img src="../logo.png" alt="logo" className="w-5 h-5" />
            </div>
            <div>
              <div className="text-base font-extrabold text-primary-dark tracking-tight font-heading leading-tight">
                CCECC
              </div>
              <div className="text-[8.5px] text-primary font-semibold tracking-[0.6px] uppercase">
                Conferences
              </div>
            </div>
          </a>

          {/* Desktop Nav — unchanged */}
          <nav className="hidden min-[900px]:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="no-underline text-text-body text-[13.5px] font-medium tracking-[0.1px] transition-colors duration-200 hover:text-primary-dark whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons — MODAL TRIGGER ADDED HERE */}
          <div className="hidden min-[900px]:flex items-center gap-2.5">
            <a
              href="https://forms.gle/p8GGUnL6QCdrogsi8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-primary-dark border-[1.5px] border-primary-dark px-4 py-2 rounded-[7px] no-underline text-[13px] font-semibold whitespace-nowrap transition-all duration-200 hover:bg-primary-light"
            >
              Submit Abstract
            </a>

            {/* This button now opens the modal */}
              <a href="#fees" className="inline-flex items-center bg-primary text-white px-[18px] py-2 rounded-[7px] text-[13px] font-semibold whitespace-nowrap transition-all duration-200 hover:bg-primary-hover shadow-[0_2px_10px_rgba(46,204,113,0.28)] hover:shadow-[0_4px_16px_rgba(46,204,113,0.4)]">
                Register Now
              </a>
          </div>

          {/* Mobile toggle — unchanged */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="min-[900px]:hidden bg-transparent border-none cursor-pointer text-primary-dark p-1 shrink-0"
          >
            {mobileOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile dropdown — MODAL TRIGGER ADDED HERE */}
        {mobileOpen && (
          <div className="min-[900px]:hidden bg-white border-t border-primary-faint px-8 py-4 pb-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 no-underline text-text-body text-[15px] font-medium border-b border-border-light"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2.5 mt-4">
              <a
                href="https://forms.gle/p8GGUnL6QCdrogsi8"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="block text-primary-dark border-[1.5px] border-primary-dark py-2.5 px-5 rounded-[7px] no-underline text-sm font-semibold text-center"
              >
                Submit Abstract
              </a>

              {/* Mobile modal trigger */}
                <a href="#fees" className="block bg-primary text-white py-2.5 px-5 rounded-[7px] text-sm font-semibold text-center w-full" >
                  Register Now
                </a>
            </div>
          </div>
        )}
      </header>
      
    </Modal>
  );
}