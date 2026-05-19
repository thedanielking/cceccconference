import React from "react";

const CARDS = [
  {
    id: 1,
    number: "01",
    label: "The Gap",
    title: "Research Left on Shelves",
    description:
      "Research from third-world countries often ends up forgotten on shelves, forcing policymakers to rely on global data that doesn't fit local realities. The knowledge exists — but it never reaches decision-makers.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="8" width="24" height="3" rx="1.5" fill="#e74c3c" opacity="0.25" />
        <rect x="4" y="14" width="20" height="3" rx="1.5" fill="#e74c3c" opacity="0.45" />
        <rect x="4" y="20" width="16" height="3" rx="1.5" fill="#e74c3c" opacity="0.65" />
        <circle cx="26" cy="21.5" r="4" fill="none" stroke="#e74c3c" strokeWidth="2" />
        <line x1="29" y1="24.5" x2="31" y2="26.5" stroke="#e74c3c" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    accentColor: "#e74c3c",
    borderColor: "#fecaca",
    bgColor: "#fff8f8",
    numberColor: "#fca5a5",
  },
  {
    id: 2,
    number: "02",
    label: "The Solution",
    title: "Localized Knowledge Works",
    description:
      "Localized findings are much more realistic and impactful for our industries and governments. Research grounded in local context produces actionable insights that truly reflect on-the-ground conditions in Sub-Saharan Africa.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="11" stroke="#2ECC71" strokeWidth="2" />
        <path d="M10 16l4 4 8-8" stroke="#2ECC71" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    accentColor: "#2ECC71",
    borderColor: "#86efac",
    bgColor: "#f0fff4",
    numberColor: "#86efac",
  },
  {
    id: 3,
    number: "03",
    label: "The Mandate",
    title: "Bridging Knowledge to Action",
    description:
      "This summit gathers and communicates local knowledge to stakeholders to bridge the gap and deploy sustainable solutions. We connect researchers, policymakers, and industry to turn evidence into energy policy.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="8" cy="24" r="4" stroke="#0ea5e9" strokeWidth="2" />
        <circle cx="24" cy="24" r="4" stroke="#0ea5e9" strokeWidth="2" />
        <circle cx="16" cy="8" r="4" stroke="#0ea5e9" strokeWidth="2" />
        <line x1="11.5" y1="21" x2="13" y2="11.5" stroke="#0ea5e9" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="20.5" y1="21" x2="19" y2="11.5" stroke="#0ea5e9" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="12" y1="24" x2="20" y2="24" stroke="#0ea5e9" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    accentColor: "#0ea5e9",
    borderColor: "#bae6fd",
    bgColor: "#f0f9ff",
    numberColor: "#7dd3fc",
  },
];

export function WhyNow() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: "#ffffff",
        padding: "96px 0",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Section header */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "56px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "11px",
                fontWeight: 700,
                color: "#2ECC71",
                letterSpacing: "1.2px",
                textTransform: "uppercase",
                textAlign: "center",
                marginBottom: "10px",
              }}
            >
              Why Attend
            </p>
            <h2
              style={{
                fontSize: "clamp(1.7rem, 3vw, 2.5rem)",
                fontWeight: 800,
                color: "#0a1a0e",
                letterSpacing: "-0.5px",
                lineHeight: 1.15,
                textAlign: "center",
                fontFamily: "'Montserrat', sans-serif",
                maxWidth: "460px",
              }}
            >
              The Mission Behind the Conference
            </h2>
          </div>
          <p
            style={{
              fontSize: "0.93rem",
              color: "#6b7280",
              lineHeight: 1.75,
              paddingTop: "4px",
              maxWidth: "460px",
              textAlign: "center",
            }}
          >
            The 2nd CCECC Conference exists to close a critical gap between
            research and reality — bringing local expertise into the rooms where
            energy decisions are made.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {CARDS.map((card) => (
            <div
              key={card.id}
              style={{
                position: "relative",
                backgroundColor: card.bgColor,
                border: `1px solid ${card.borderColor}`,
                borderRadius: "14px",
                padding: "36px 32px",
                overflow: "hidden",
                transition: "all 0.25s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(-5px)";
                el.style.boxShadow = `0 16px 44px ${card.accentColor}1a`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Large background number */}
              <div
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "20px",
                  fontSize: "5rem",
                  fontWeight: 900,
                  color: card.numberColor,
                  opacity: 0.35,
                  lineHeight: 1,
                  fontFamily: "'Montserrat', sans-serif",
                  userSelect: "none",
                }}
              >
                {card.number}
              </div>

              {/* Icon */}
              <div style={{ marginBottom: "18px" }}>{card.icon}</div>

              {/* Label */}
              <p
                style={{
                  fontSize: "10.5px",
                  fontWeight: 700,
                  color: card.accentColor,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  marginBottom: "7px",
                }}
              >
                {card.label}
              </p>

              {/* Title */}
              <h3
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: "#0a1a0e",
                  marginBottom: "12px",
                  fontFamily: "'Montserrat', sans-serif",
                  lineHeight: 1.3,
                }}
              >
                {card.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: "0.88rem",
                  color: "#4b5563",
                  lineHeight: 1.75,
                }}
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
