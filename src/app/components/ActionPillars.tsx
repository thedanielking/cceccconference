import React from "react";

const PILLARS = [
  {
    id: 1,
    name: "Clean Energy Technologies and Innovation",
    description:
      "Exploring breakthrough technologies in solar, wind, hydro, and storage that can accelerate clean energy deployment across Sub-Saharan Africa.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="6" stroke="#2ECC71" strokeWidth="2" />
        <line x1="14" y1="2" x2="14" y2="6" stroke="#2ECC71" strokeWidth="2" strokeLinecap="round" />
        <line x1="14" y1="22" x2="14" y2="26" stroke="#2ECC71" strokeWidth="2" strokeLinecap="round" />
        <line x1="2" y1="14" x2="6" y2="14" stroke="#2ECC71" strokeWidth="2" strokeLinecap="round" />
        <line x1="22" y1="14" x2="26" y2="14" stroke="#2ECC71" strokeWidth="2" strokeLinecap="round" />
        <line x1="5.5" y1="5.5" x2="8.4" y2="8.4" stroke="#2ECC71" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="19.6" y1="19.6" x2="22.5" y2="22.5" stroke="#2ECC71" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="22.5" y1="5.5" x2="19.6" y2="8.4" stroke="#2ECC71" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="8.4" y1="19.6" x2="5.5" y2="22.5" stroke="#2ECC71" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 2,
    name: "Climate Change Mitigation and Adaptation Strategies",
    description:
      "Evidence-based approaches to reducing emissions and building resilient communities in the face of accelerating climate impacts.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4C9 4 5 8 5 13c0 4 2.5 7.5 6 9" stroke="#2ECC71" strokeWidth="2" strokeLinecap="round" />
        <path d="M14 4C19 4 23 8 23 13c0 4-2.5 7.5-6 9" stroke="#2ECC71" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 22l6 2 6-2" stroke="#2ECC71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 4v20" stroke="#2ECC71" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" />
        <path d="M5 13h18" stroke="#2ECC71" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    id: 3,
    name: "Energy Policy, Governance, and Regulation",
    description:
      "Examining the regulatory frameworks, governance structures, and policy instruments that enable or hinder clean energy transitions.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="4" width="20" height="20" rx="3" stroke="#2ECC71" strokeWidth="2" />
        <line x1="8" y1="10" x2="20" y2="10" stroke="#2ECC71" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="8" y1="14" x2="17" y2="14" stroke="#2ECC71" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="8" y1="18" x2="14" y2="18" stroke="#2ECC71" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 4,
    name: "Sustainable Power Systems and Energy Efficiency",
    description:
      "Optimizing grid infrastructure, demand-side management, and energy efficiency measures to maximize impact of available resources.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M16 4l-8 12h8l-4 8 10-14h-8l4-6z" stroke="#2ECC71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
  {
    id: 5,
    name: "Environmental Impacts, Health, and Society",
    description:
      "Understanding how energy choices affect air quality, public health, ecosystems, and social equity across urban and rural communities.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 5C9 5 5 9 5 14s4 9 9 9 9-4 9-9-4-9-9-9z" stroke="#2ECC71" strokeWidth="2" />
        <path d="M14 9v5l3 3" stroke="#2ECC71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 20s1-4 3-5 5 0 6-3" stroke="#2ECC71" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 6,
    name: "Financing, Investment, and Entrepreneurship",
    description:
      "Mobilizing climate finance, blended capital, green bonds, and entrepreneurial ecosystems to fund clean energy at scale.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4v4M14 20v4M6 14H4M24 14h-2" stroke="#2ECC71" strokeWidth="2" strokeLinecap="round" />
        <circle cx="14" cy="14" r="5" stroke="#2ECC71" strokeWidth="2" />
        <path d="M12 13c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2 .9-2 2 .9 2 2 2 2-.9 2-2" stroke="#2ECC71" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 7,
    name: "Regional and Local Perspectives on Climate Action",
    description:
      "Centering African voices and locally-grounded solutions — ensuring that policy and practice reflect the lived realities of those most affected.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="9" stroke="#2ECC71" strokeWidth="2" />
        <path d="M5 14h18M14 5c-3 3-4 6-4 9s1 6 4 9M14 5c3 3 4 6 4 9s-1 6-4 9" stroke="#2ECC71" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function ActionPillars() {
  return (
    <section
      id="pillars"
      style={{
        backgroundColor: "#ffffff",
        padding: "96px 0",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <p
            style={{
              fontSize: "11px",
              fontWeight: 700,
              color: "#2ECC71",
              letterSpacing: "1.2px",
              textTransform: "uppercase",
              marginBottom: "10px",
            }}
          >
            Conference Sub-Themes
          </p>
          <h2
            style={{
              fontSize: "clamp(1.7rem, 3vw, 2.5rem)",
              fontWeight: 800,
              color: "#0a1a0e",
              letterSpacing: "-0.5px",
              marginBottom: "14px",
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            7 Action Pillars
          </h2>
          <p
            style={{
              fontSize: "0.93rem",
              color: "#6b7280",
              maxWidth: "500px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            The conference is structured around seven interconnected sub-themes,
            each addressing a critical dimension of clean energy and climate
            action in Sub-Saharan Africa.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {PILLARS.map((pillar) => (
            <PillarCard key={pillar.id} pillar={pillar} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PillarCard({
  pillar,
}: {
  pillar: (typeof PILLARS)[number];
}) {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        padding: "28px 26px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        transition: "all 0.22s ease",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "#2ECC71";
        el.style.transform = "translateY(-4px)";
        el.style.boxShadow = "0 12px 36px rgba(21,87,36,0.1)";
        el.style.backgroundColor = "#f9fffe";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "#e5e7eb";
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
        el.style.backgroundColor = "#ffffff";
      }}
    >
      {/* Pillar number — top right */}
      <div
        style={{
          position: "absolute",
          top: "16px",
          right: "18px",
          fontSize: "11px",
          fontWeight: 700,
          color: "#d1fae5",
          letterSpacing: "0.5px",
          fontFamily: "'Montserrat', sans-serif",
        }}
      >
        0{pillar.id}
      </div>

      {/* Icon in pill */}
      <div
        style={{
          width: "52px",
          height: "52px",
          backgroundColor: "#f0fff4",
          border: "1px solid #d1fae5",
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {pillar.icon}
      </div>

      <h3
        style={{
          fontSize: "0.95rem",
          fontWeight: 700,
          color: "#0a1a0e",
          lineHeight: 1.35,
          fontFamily: "'Montserrat', sans-serif",
        }}
      >
        {pillar.name}
      </h3>

      <p
        style={{
          fontSize: "0.84rem",
          color: "#6b7280",
          lineHeight: 1.7,
        }}
      >
        {pillar.description}
      </p>
    </div>
  );
}
