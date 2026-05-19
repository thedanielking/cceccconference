import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import React from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Timeline", href: "#timeline" },
  { label: "Pillars", href: "#pillars" },
  { label: "Fees", href: "#fees" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.3s ease",
        backgroundColor: scrolled ? "#ffffff" : "rgba(255,255,255,0.96)",
        boxShadow: scrolled
          ? "0 1px 0 rgba(0,0,0,0.08), 0 4px 24px rgba(0,0,0,0.05)"
          : "0 1px 0 rgba(0,0,0,0.06)",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2rem",
          height: "68px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: "38px",
              height: "38px",
              backgroundColor: "#155724",
              borderRadius: "9px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src="../logo.png" alt="logo" />
          </div>
          <div>
            <div
              style={{
                fontSize: "16px",
                fontWeight: 800,
                color: "#155724",
                letterSpacing: "-0.3px",
                fontFamily: "'Montserrat', sans-serif",
                lineHeight: 1.1,
              }}
            >
              CCECC
            </div>
            <div
              style={{
                fontSize: "8.5px",
                color: "#2ECC71",
                fontWeight: 600,
                letterSpacing: "0.6px",
                textTransform: "uppercase",
              }}
            >
              Conferences
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav
          style={{ display: "flex", alignItems: "center", gap: "1.6rem" }}
          className="header-nav"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                textDecoration: "none",
                color: "#374151",
                fontSize: "13.5px",
                fontWeight: 500,
                letterSpacing: "0.1px",
                transition: "color 0.2s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLAnchorElement).style.color = "#155724")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLAnchorElement).style.color = "#374151")
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div
          style={{ display: "flex", alignItems: "center", gap: "10px" }}
          className="header-ctas"
        >
          <a
            href="https://forms.gle/p8GGUnL6QCdrogsi8"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              color: "#155724",
              border: "1.5px solid #155724",
              padding: "8px 16px",
              borderRadius: "7px",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: 600,
              whiteSpace: "nowrap",
              transition: "all 0.2s ease",
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = "#f0fff4";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = "transparent";
            }}
          >
            Submit Abstract
          </a>
          <a
            href="#fees"
            style={{
              display: "inline-flex",
              alignItems: "center",
              backgroundColor: "#2ECC71",
              color: "#ffffff",
              padding: "8px 18px",
              borderRadius: "7px",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: 600,
              whiteSpace: "nowrap",
              transition: "all 0.2s ease",
              boxShadow: "0 2px 10px rgba(46,204,113,0.28)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = "#27ae60";
              el.style.boxShadow = "0 4px 16px rgba(46,204,113,0.4)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = "#2ECC71";
              el.style.boxShadow = "0 2px 10px rgba(46,204,113,0.28)";
            }}
          >
            Register Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#155724",
            display: "none",
            padding: "4px",
            flexShrink: 0,
          }}
          className="header-hamburger"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div
          style={{
            backgroundColor: "#ffffff",
            borderTop: "1px solid #e8f5e9",
            padding: "1rem 2rem 1.5rem",
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                padding: "11px 0",
                textDecoration: "none",
                color: "#374151",
                fontSize: "15px",
                fontWeight: 500,
                borderBottom: "1px solid #f3f4f6",
              }}
            >
              {link.label}
            </a>
          ))}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "16px" }}>
            <a
              href="https://forms.gle/p8GGUnL6QCdrogsi8"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                color: "#155724",
                border: "1.5px solid #155724",
                padding: "11px 20px",
                borderRadius: "7px",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 600,
                textAlign: "center",
              }}
            >
              Submit Abstract
            </a>
            <a
              href="#fees"
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                backgroundColor: "#2ECC71",
                color: "#ffffff",
                padding: "11px 20px",
                borderRadius: "7px",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 600,
                textAlign: "center",
              }}
            >
              Register Now
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .header-nav { display: none !important; }
          .header-ctas { display: none !important; }
          .header-hamburger { display: flex !important; }
        }
        @media (min-width: 901px) {
          .header-hamburger { display: none !important; }
        }
      `}</style>
    </header>
  );
}
