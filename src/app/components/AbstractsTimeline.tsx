import React from "react";

const TIMELINE_ITEMS = [
  {
    id: 1,
    date: "Nov. 15, 2026",
    label: "First Round Abstract Submission",
    description:
      "Submit your original abstract for the first review round. We welcome research from all disciplines aligned with the conference sub-themes.",
    type: "submission",
    round: "Round 1",
    color: "#2ECC71",
    bg: "#f0fff4",
    border: "#86efac",
  },
  {
    id: 2,
    date: "Feb. 28, 2027",
    label: "Notification of Acceptance",
    description:
      "Authors of Round 1 submissions will be notified of review outcomes and provided feedback to strengthen their work.",
    type: "notification",
    round: "Round 1",
    color: "#0ea5e9",
    bg: "#f0f9ff",
    border: "#bae6fd",
  },
  {
    id: 3,
    date: "Mar. 01, 2027",
    label: "Second Round Abstract Submission",
    description:
      "A second submission window opens for researchers who missed Round 1 or wish to submit additional work.",
    type: "submission",
    round: "Round 2",
    color: "#2ECC71",
    bg: "#f0fff4",
    border: "#86efac",
  },
  {
    id: 4,
    date: "Mar. 20, 2027",
    label: "Notification of Acceptance",
    description:
      "Final acceptance notifications for Round 2 submissions. Accepted authors receive guidance on full paper preparation.",
    type: "notification",
    round: "Round 2",
    color: "#0ea5e9",
    bg: "#f0f9ff",
    border: "#bae6fd",
  },
  {
    id: 5,
    date: "Apr. 15–16, 2027",
    label: "Conference Day",
    description:
      "Present your work at the 2nd National Conference on Clean Energy and Climate Change. Hybrid format — in-person and virtual participation.",
    type: "event",
    round: "Summit",
    color: "#155724",
    bg: "#f0fff4",
    border: "#2ECC71",
    isMain: true,
  },
];

export function AbstractsTimeline() {
  return (
    <section
      id="timeline"
      style={{
        backgroundColor: "#fafafa",
        padding: "96px 0",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
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
            Call for Abstracts
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
            Submission Timeline
          </h2>
          <p
            style={{
              fontSize: "0.93rem",
              color: "#6b7280",
              maxWidth: "560px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            The conference welcomes original, previously unpublished work from
            researchers, practitioners, academics, and students. Accepted papers
            will receive feedback to support post-conference publication.
          </p>
        </div>

        {/* Timeline steps — horizontal on desktop, vertical on mobile */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "0",
            position: "relative",
            marginBottom: "48px",
          }}
          className="timeline-grid"
        >
          {/* Connector line */}
          <div
            style={{
              position: "absolute",
              top: "28px",
              left: "calc(10%)",
              right: "calc(10%)",
              height: "2px",
              backgroundColor: "#d1fae5",
              zIndex: 0,
            }}
            className="timeline-connector"
          />

          {TIMELINE_ITEMS.map((item) => (
            <TimelineStep key={item.id} item={item} />
          ))}
        </div>

        {/* Context note + CTA */}
        <div
          style={{
            maxWidth: "680px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #e5e7eb",
              borderLeft: "4px solid #2ECC71",
              borderRadius: "0 10px 10px 0",
              padding: "18px 22px",
              marginBottom: "32px",
              textAlign: "left",
            }}
          >
            <p
              style={{
                fontSize: "0.87rem",
                color: "#4b5563",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              <strong style={{ color: "#155724" }}>Publication pathway:</strong>{" "}
              The conference welcomes original, previously unpublished work from
              researchers, practitioners, academics, and students. Accepted
              papers will receive feedback to support post-conference
              publication.
            </p>
          </div>

          <a
            href="https://forms.gle/p8GGUnL6QCdrogsi8"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              backgroundColor: "#155724",
              color: "#ffffff",
              padding: "14px 30px",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "14.5px",
              fontWeight: 700,
              boxShadow: "0 4px 18px rgba(21,87,36,0.22)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = "#0f3d1a";
              el.style.transform = "translateY(-2px)";
              el.style.boxShadow = "0 8px 26px rgba(21,87,36,0.3)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = "#155724";
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "0 4px 18px rgba(21,87,36,0.22)";
            }}
          >
            <svg
              width="17"
              height="17"
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
            Go to Google Form Submission
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .timeline-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }
          .timeline-connector { display: none !important; }
        }
        @media (max-width: 400px) {
          .timeline-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .timeline-connector { display: none !important; }
        }
      `}</style>
    </section>
  );
}

function TimelineStep({
  item,
}: {
  item: {
    id: number;
    date: string;
    label: string;
    description: string;
    type: string;
    round: string;
    color: string;
    bg: string;
    border: string;
    isMain?: boolean;
  };
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "0 12px",
        position: "relative",
        zIndex: 1,
      }}
      className="timeline-step"
    >
      {/* Node dot */}
      <div
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          backgroundColor: item.isMain ? "#155724" : item.color,
          border: `4px solid ${item.isMain ? "#2ECC71" : "#ffffff"}`,
          boxShadow: item.isMain
            ? `0 0 0 4px rgba(21,87,36,0.15), 0 4px 16px rgba(21,87,36,0.25)`
            : `0 0 0 3px ${item.color}22, 0 2px 10px ${item.color}33`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "16px",
          flexShrink: 0,
          transition: "transform 0.2s ease",
        }}
      >
        {item.type === "submission" ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
          </svg>
        ) : item.type === "notification" ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.26 12" />
            <path d="M4.26 12A19.5 19.5 0 0 1 1.07 3.37 2 2 0 0 1 3.07 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.07 9.09" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        )}
      </div>

      {/* Round badge */}
      <span
        style={{
          display: "inline-block",
          backgroundColor: `${item.color}18`,
          border: `1px solid ${item.color}44`,
          color: item.color === "#155724" ? "#155724" : item.color,
          fontSize: "9.5px",
          fontWeight: 700,
          letterSpacing: "0.7px",
          textTransform: "uppercase",
          padding: "2px 8px",
          borderRadius: "100px",
          marginBottom: "7px",
        }}
      >
        {item.round}
      </span>

      {/* Date */}
      <p
        style={{
          fontSize: "12px",
          fontWeight: 700,
          color: item.color === "#155724" ? "#155724" : item.color,
          marginBottom: "5px",
          letterSpacing: "0.2px",
        }}
      >
        {item.date}
      </p>

      {/* Label */}
      <p
        style={{
          fontSize: "12.5px",
          fontWeight: 700,
          color: "#0a1a0e",
          marginBottom: "6px",
          lineHeight: 1.3,
          fontFamily: "'Montserrat', sans-serif",
        }}
      >
        {item.label}
      </p>

      {/* Description */}
      <p
        style={{
          fontSize: "11.5px",
          color: "#6b7280",
          lineHeight: 1.6,
          maxWidth: "180px",
        }}
      >
        {item.description}
      </p>
    </div>
  );
}
