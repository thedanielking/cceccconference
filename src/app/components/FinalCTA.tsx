import React from "react";

export function FinalCTA() {
  return (
    <section
      style={{
        backgroundColor: "#155724",
        padding: "96px 0",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative rings */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "480px",
          height: "480px",
          borderRadius: "50%",
          border: "1px solid rgba(46,204,113,0.12)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "-60px",
          right: "-60px",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          backgroundColor: "rgba(46,204,113,0.06)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-80px",
          left: "-80px",
          width: "360px",
          height: "360px",
          borderRadius: "50%",
          border: "1px solid rgba(46,204,113,0.08)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2rem",
          position: "relative",
          textAlign: "center",
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            backgroundColor: "rgba(46,204,113,0.12)",
            border: "1px solid rgba(46,204,113,0.3)",
            borderRadius: "6px",
            padding: "5px 14px",
            marginBottom: "28px",
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
              color: "#2ECC71",
              letterSpacing: "0.9px",
              textTransform: "uppercase",
            }}
          >
            April 15–16, 2027 &nbsp;·&nbsp; Hybrid Mode
          </span>
        </div>

        <h2
          style={{
            fontSize: "clamp(1.9rem, 4vw, 3rem)",
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: "-0.8px",
            lineHeight: 1.12,
            marginBottom: "18px",
            fontFamily: "'Montserrat', sans-serif",
            maxWidth: "660px",
            margin: "0 auto 18px",
          }}
        >
          Ready to Take Action?{" "}
          <span style={{ color: "#2ECC71" }}>
            The Future of Energy Starts With You.
          </span>
        </h2>

        <p
          style={{
            fontSize: "1rem",
            color: "rgba(255,255,255,0.68)",
            maxWidth: "520px",
            margin: "0 auto 44px",
            lineHeight: 1.75,
          }}
        >
          Join researchers, policymakers, engineers, and advocates at Nigeria's
          premier clean energy and climate change conference. Submit your abstract
          or register your place today.
        </p>

        {/* CTA Row */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "14px",
            flexWrap: "wrap",
            marginBottom: "52px",
          }}
        >
          <a
            href="#fees"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "9px",
              backgroundColor: "#ffffff",
              color: "#155724",
              padding: "15px 32px",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "14.5px",
              fontWeight: 700,
              boxShadow: "0 4px 20px rgba(0,0,0,0.18)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = "#f0fff4";
              el.style.transform = "translateY(-2px)";
              el.style.boxShadow = "0 8px 28px rgba(0,0,0,0.22)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = "#ffffff";
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "0 4px 20px rgba(0,0,0,0.18)";
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
              gap: "9px",
              backgroundColor: "transparent",
              color: "#ffffff",
              padding: "15px 32px",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "14.5px",
              fontWeight: 600,
              border: "2px solid rgba(255,255,255,0.35)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "#2ECC71";
              el.style.color = "#2ECC71";
              el.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "rgba(255,255,255,0.35)";
              el.style.color = "#ffffff";
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
            </svg>
            Submit Your Abstract
          </a>
        </div>

        {/* Trust strip */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "32px",
            flexWrap: "wrap",
            paddingTop: "32px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {[
            { icon: "🎓", label: "Open to Researchers & Students" },
            { icon: "🌍", label: "Sub-Saharan Africa Focus" },
            { icon: "📄", label: "Post-Conference Publication Support" },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "rgba(255,255,255,0.55)",
                fontSize: "13px",
                fontWeight: 500,
              }}
            >
              <span style={{ fontSize: "17px" }}>{item.icon}</span>
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
