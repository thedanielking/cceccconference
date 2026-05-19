import React from "react";

const NAV_SECTIONS = {
  "Quick Links": [
    { label: "Home", href: "#home" },
    { label: "About / Why Attend", href: "#about" },
    { label: "Submission Timeline", href: "#timeline" },
    { label: "Action Pillars", href: "#pillars" },
    { label: "Registration Fees", href: "#fees" },
  ],
  "Submissions": [
    { label: "Go to Google Form", href: "https://forms.gle/p8GGUnL6QCdrogsi8", external: true },
    { label: "Round 1 Deadline: Nov 15, 2026", href: "#timeline" },
    { label: "Round 2 Deadline: Mar 1, 2027", href: "#timeline" },
    { label: "Acceptance Notifications", href: "#timeline" },
  ],
  "Conference": [
    { label: "April 15–16, 2027", href: "#home" },
    { label: "Hybrid Mode (In-Person + Virtual)", href: "#home" },
    { label: "CCECC 2nd National Conference", href: "#home" },
  ],
};

const SOCIAL = [
  {
    name: "Twitter / X",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.736-8.85L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer
      id="contact"
      style={{
        backgroundColor: "#0a1a0e",
        color: "#ffffff",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "72px 2rem 0",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.8fr 1fr 1fr 1fr",
            gap: "48px",
            marginBottom: "60px",
          }}
          className="footer-grid"
        >
          {/* Brand column */}
          <div>
            {/* Logo */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "18px",
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
                  flexShrink: 0,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L3 7v10l9 5 9-5V7L12 2z" fill="#2ECC71" />
                  <path
                    d="M12 2v20M3 7l9 5 9-5"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: 800,
                    color: "#ffffff",
                    fontFamily: "'Montserrat', sans-serif",
                    lineHeight: 1.1,
                  }}
                >
                  CCECC Conferences
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
                  Cluster for Clean Energy & Climate Change
                </div>
              </div>
            </div>

            <p
              style={{
                fontSize: "0.85rem",
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.75,
                marginBottom: "20px",
                maxWidth: "290px",
              }}
            >
              Organised by the{" "}
              <strong style={{ color: "rgba(255,255,255,0.75)" }}>
                Cluster for Clean Energy and Climate Change (CCECC)
              </strong>
              . Connecting research to policy for a sustainable Sub-Saharan Africa.
            </p>

            {/* Contact block */}
            <div
              style={{
                backgroundColor: "rgba(46,204,113,0.08)",
                border: "1px solid rgba(46,204,113,0.2)",
                borderRadius: "10px",
                padding: "16px 18px",
                marginBottom: "22px",
              }}
            >
              <p
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  color: "#2ECC71",
                  letterSpacing: "0.9px",
                  textTransform: "uppercase",
                  marginBottom: "10px",
                }}
              >
                Conference Contact
              </p>
              <div
                style={{
                  fontSize: "13.5px",
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.85)",
                  marginBottom: "4px",
                }}
              >
                Prof. Moses Emetere
              </div>
              <a
                href="mailto:editorial@cceccconferences.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "12.5px",
                  color: "#2ECC71",
                  textDecoration: "none",
                  wordBreak: "break-all",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.textDecoration =
                    "underline")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.textDecoration =
                    "none")
                }
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                editorial@cceccconferences.com
              </a>
            </div>

            {/* Social */}
            <div style={{ display: "flex", gap: "8px" }}>
              {SOCIAL.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  style={{
                    width: "34px",
                    height: "34px",
                    borderRadius: "7px",
                    backgroundColor: "rgba(255,255,255,0.07)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.55)",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.backgroundColor = "#2ECC71";
                    el.style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.backgroundColor = "rgba(255,255,255,0.07)";
                    el.style.color = "rgba(255,255,255,0.55)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(NAV_SECTIONS).map(([section, links]) => (
            <div key={section}>
              <h4
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "#2ECC71",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  marginBottom: "18px",
                }}
              >
                {section}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {links.map((link) => (
                  <li key={link.label} style={{ marginBottom: "9px" }}>
                    <a
                      href={link.href}
                      target={"external" in link && link.external ? "_blank" : undefined}
                      rel={"external" in link && link.external ? "noopener noreferrer" : undefined}
                      style={{
                        color: "rgba(255,255,255,0.5)",
                        textDecoration: "none",
                        fontSize: "13px",
                        lineHeight: 1.5,
                        transition: "color 0.2s",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLAnchorElement).style.color =
                          "#2ECC71")
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLAnchorElement).style.color =
                          "rgba(255,255,255,0.5)")
                      }
                    >
                      {link.label}
                      {"external" in link && link.external && (
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            padding: "22px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>
            © 2026–2027 Cluster for Clean Energy and Climate Change (CCECC). All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "20px" }}>
            {["Privacy Policy", "Terms of Use"].map((label) => (
              <a
                key={label}
                href="#"
                style={{
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.3)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLAnchorElement).style.color = "rgba(255,255,255,0.6)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLAnchorElement).style.color =
                    "rgba(255,255,255,0.3)")
                }
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
