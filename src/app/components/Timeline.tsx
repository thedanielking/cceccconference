const EVENTS = [
  {
    id: 1,
    date: "June 1, 2026",
    label: "Registration Opens",
    description: "Early-bird registration opens for delegates, students, and industry professionals.",
    type: "registration",
    status: "upcoming",
  },
  {
    id: 2,
    date: "July 15, 2026",
    label: "Abstract Submission Deadline",
    description: "Last day to submit research papers, poster proposals, and panel session ideas.",
    type: "deadline",
    status: "upcoming",
  },
  {
    id: 3,
    date: "August 1, 2026",
    label: "Early-Bird Registration Closes",
    description: "Secure your spot at the discounted early-bird rate before standard pricing applies.",
    type: "deadline",
    status: "upcoming",
  },
  {
    id: 4,
    date: "September 1, 2026",
    label: "Speaker Announcements",
    description: "Full lineup of keynote speakers, panelists, and workshop facilitators revealed.",
    type: "milestone",
    status: "upcoming",
  },
  {
    id: 5,
    date: "October 1, 2026",
    label: "Standard Registration Closes",
    description: "Final deadline for standard delegate registration. Late registration may apply.",
    type: "deadline",
    status: "upcoming",
  },
  {
    id: 6,
    date: "November 14–16, 2026",
    label: "CCECC Summit 2026",
    description:
      "Three days of keynotes, workshops, panel discussions, and networking — shaping Nigeria's clean energy future.",
    type: "event",
    status: "main",
  },
];

const TYPE_COLORS: Record<string, string> = {
  registration: "#2ECC71",
  deadline: "#f59e0b",
  milestone: "#0ea5e9",
  event: "#155724",
};

const TYPE_LABELS: Record<string, string> = {
  registration: "Registration",
  deadline: "Deadline",
  milestone: "Milestone",
  event: "Main Event",
};

export function Timeline() {
  return (
    <section
      style={{
        backgroundColor: "#f9fffe",
        padding: "100px 0",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#f0fff4",
              border: "1px solid #2ECC71",
              borderRadius: "100px",
              padding: "6px 16px",
              marginBottom: "20px",
            }}
          >
            <span
              style={{
                fontSize: "11px",
                fontWeight: 700,
                color: "#155724",
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              Key Dates
            </span>
          </div>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 800,
              color: "#0d2e17",
              letterSpacing: "-0.5px",
              marginBottom: "16px",
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            Event Timeline
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "#5a7a62",
              maxWidth: "500px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Mark your calendar. Every milestone brings us closer to November's
            landmark summit.
          </p>
        </div>

        {/* Timeline */}
        <div
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            position: "relative",
          }}
        >
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: "24px",
              top: "10px",
              bottom: "10px",
              width: "2px",
              backgroundColor: "#d1fae5",
            }}
          />

          {EVENTS.map((event, index) => (
            <div
              key={event.id}
              style={{
                display: "flex",
                gap: "32px",
                marginBottom: index < EVENTS.length - 1 ? "40px" : "0",
                position: "relative",
              }}
            >
              {/* Dot */}
              <div
                style={{
                  flexShrink: 0,
                  width: "50px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "18px",
                    height: "18px",
                    borderRadius: "50%",
                    backgroundColor:
                      event.status === "main"
                        ? "#155724"
                        : TYPE_COLORS[event.type],
                    border: `3px solid ${
                      event.status === "main" ? "#2ECC71" : "white"
                    }`,
                    boxShadow:
                      event.status === "main"
                        ? "0 0 0 5px rgba(21,87,36,0.15)"
                        : `0 0 0 4px ${TYPE_COLORS[event.type]}22`,
                    zIndex: 2,
                    position: "relative",
                    marginTop: "6px",
                  }}
                />
              </div>

              {/* Card */}
              <div
                style={{
                  flex: 1,
                  backgroundColor:
                    event.status === "main" ? "#f0fff4" : "#ffffff",
                  border:
                    event.status === "main"
                      ? "1px solid #2ECC71"
                      : "1px solid #e8f5e9",
                  borderRadius: "12px",
                  padding: "20px 24px",
                  transition: "all 0.2s ease",
                  boxShadow:
                    event.status === "main"
                      ? "0 4px 24px rgba(21,87,36,0.1)"
                      : "none",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "translateX(4px)";
                  if (event.status !== "main") {
                    el.style.borderColor = "#2ECC71";
                    el.style.boxShadow = "0 4px 16px rgba(21,87,36,0.08)";
                  }
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "translateX(0)";
                  if (event.status !== "main") {
                    el.style.borderColor = "#e8f5e9";
                    el.style.boxShadow = "none";
                  }
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: "8px",
                    marginBottom: "8px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: "#0d2e17",
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    {event.label}
                  </div>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "5px",
                      backgroundColor: `${TYPE_COLORS[event.type]}18`,
                      border: `1px solid ${TYPE_COLORS[event.type]}44`,
                      borderRadius: "100px",
                      padding: "2px 10px",
                      fontSize: "10px",
                      fontWeight: 700,
                      color: TYPE_COLORS[event.type],
                      letterSpacing: "0.4px",
                    }}
                  >
                    {TYPE_LABELS[event.type]}
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#2ECC71",
                    marginBottom: "8px",
                    letterSpacing: "0.3px",
                  }}
                >
                  📅 {event.date}
                </div>
                <p
                  style={{
                    fontSize: "0.87rem",
                    color: "#6b7280",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
