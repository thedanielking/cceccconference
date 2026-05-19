import React from "react";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1749192901190-ea45a711b0e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzb2xhciUyMHBhbmVscyUyMHdpbmQlMjB0dXJiaW5lcyUyMHN1c3RhaW5hYmxlJTIwZW5lcmd5JTIwbGFuZHNjYXBlJTIwYWVyaWFsfGVufDF8fHx8MTc3OTE4Njk3M3ww&ixlib=rb-4.1.0&q=80&w=1920";

export function Hero() {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(../bgCleanEnergy.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Layered overlay — left-heavy for text readability, opens to image on right */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(100deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.70) 42%, rgba(255,255,255,0.20) 70%, rgba(255,255,255,0.05) 100%)",
        }}
      />
      {/* Subtle bottom fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "40px",
          background:
            "linear-gradient(to top, rgba(255,255,255,0.1) 0%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2rem",
          paddingTop: "110px",
          paddingBottom: "80px",
          width: "100%",
        }}
      >
        <div style={{ maxWidth: "700px" }}>
          {/* Conference edition badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              border: "1px solid #155724",
              borderRadius: "6px",
              padding: "5px 14px",
              marginBottom: "28px",
              backgroundColor: "rgba(255,255,255,0.85)",
            }}
          >
            <div
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: "#2ECC71",
              }}
            />
            <span
              style={{
                fontSize: "11px",
                fontWeight: 700,
                color: "#155724",
                letterSpacing: "0.9px",
                textTransform: "uppercase",
              }}
            >
              2nd National Conference &nbsp;·&nbsp; Hybrid Mode
            </span>
          </div>

          {/* Main headline */}
          <h1
            style={{
              fontSize: "clamp(1.9rem, 4vw, 3.1rem)",
              fontWeight: 800,
              color: "#0a1a0e",
              lineHeight: 1.13,
              letterSpacing: "-0.8px",
              marginBottom: "18px",
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            2nd National Conference on{" "}
            <span style={{ color: "#155724" }}>
              Clean Energy and Climate Change
            </span>
          </h1>

          {/* Date strip */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              backgroundColor: "#155724",
              color: "#ffffff",
              borderRadius: "7px",
              padding: "8px 18px",
              marginBottom: "20px",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            April 15–16, 2027
          </div>

          {/* Theme */}
          <div
            style={{
              backgroundColor: "rgba(240,255,244,0.92)",
              border: "1px solid #86efac",
              borderLeft: "4px solid #2ECC71",
              borderRadius: "0 8px 8px 0",
              padding: "14px 18px",
              marginBottom: "36px",
              maxWidth: "620px",
            }}
          >
            <p
              style={{
                fontSize: "11px",
                fontWeight: 700,
                color: "#155724",
                letterSpacing: "0.8px",
                textTransform: "uppercase",
                marginBottom: "5px",
              }}
            >
              Conference Theme
            </p>
            <p
              style={{
                fontSize: "0.95rem",
                color: "#1a3a24",
                lineHeight: 1.6,
                fontStyle: "italic",
                fontWeight: 500,
              }}
            >
              "Advancing Clean Energy Solutions for Climate-Resilient and
              Sustainable Development in Sub-Saharan Africa"
            </p>
          </div>

          {/* CTA buttons */}
          <div
            style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}
          >
            <a
              href="#fees"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#2ECC71",
                color: "#ffffff",
                padding: "14px 28px",
                borderRadius: "8px",
                textDecoration: "none",
                fontSize: "14.5px",
                fontWeight: 700,
                boxShadow: "0 4px 20px rgba(46,204,113,0.38)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.backgroundColor = "#27ae60";
                el.style.transform = "translateY(-2px)";
                el.style.boxShadow = "0 8px 28px rgba(46,204,113,0.48)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.backgroundColor = "#2ECC71";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "0 4px 20px rgba(46,204,113,0.38)";
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
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
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "rgba(255,255,255,0.9)",
                color: "#155724",
                padding: "14px 28px",
                borderRadius: "8px",
                textDecoration: "none",
                fontSize: "14.5px",
                fontWeight: 600,
                border: "2px solid #155724",
                transition: "all 0.2s ease",
                backdropFilter: "blur(4px)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.backgroundColor = "#f0fff4";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.backgroundColor = "rgba(255,255,255,0.9)";
                el.style.transform = "translateY(0)";
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              Submit Your Paper
            </a>
          </div>

          {/* Inline note */}
          <p
            style={{
              marginTop: "20px",
              fontSize: "12px",
              color: "#6b7280",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2ECC71"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            Original, previously unpublished work is welcome from researchers,
            practitioners, academics, and students.
          </p>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        style={{
          position: "absolute",
          bottom: "28px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "5px",
          opacity: 0.5,
        }}
      >
        <div
          style={{
            width: "18px",
            height: "28px",
            border: "2px solid #155724",
            borderRadius: "9px",
            display: "flex",
            justifyContent: "center",
            paddingTop: "4px",
          }}
        >
          <div
            style={{
              width: "3px",
              height: "5px",
              backgroundColor: "#2ECC71",
              borderRadius: "2px",
              animation: "scrollDot 1.6s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes scrollDot {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(10px); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
