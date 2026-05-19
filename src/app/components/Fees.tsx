import React from "react";

export function Fees() {
  return (
    <section
      id="fees"
      style={{
        backgroundColor: "#fafafa",
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
            Registration
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
            Conference Fees
          </h2>
          <p
            style={{
              fontSize: "0.93rem",
              color: "#6b7280",
              maxWidth: "460px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Secure your place at the 2nd CCECC Conference. Register early to
            take advantage of the discounted rate.
          </p>
        </div>

        {/* Pricing cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "28px",
            maxWidth: "800px",
            margin: "0 auto 48px",
          }}
        >
          {/* Early Bird */}
          <div
            style={{
              backgroundColor: "#ffffff",
              border: "2px solid #2ECC71",
              borderRadius: "16px",
              padding: "40px 36px",
              position: "relative",
              boxShadow: "0 8px 32px rgba(46,204,113,0.12)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.transform = "translateY(-4px)";
              el.style.boxShadow = "0 16px 48px rgba(46,204,113,0.18)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "0 8px 32px rgba(46,204,113,0.12)";
            }}
          >
            {/* Recommended badge */}
            <div
              style={{
                position: "absolute",
                top: "-14px",
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "#2ECC71",
                color: "#ffffff",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.6px",
                textTransform: "uppercase",
                padding: "4px 16px",
                borderRadius: "100px",
                whiteSpace: "nowrap",
              }}
            >
              Best Value — Save ₦10,000
            </div>

            <div style={{ textAlign: "center" }}>
              {/* Tier label */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "7px",
                  backgroundColor: "#f0fff4",
                  border: "1px solid #86efac",
                  borderRadius: "7px",
                  padding: "6px 14px",
                  marginBottom: "20px",
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#155724"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#155724",
                    letterSpacing: "0.3px",
                  }}
                >
                  Early Bird Registration
                </span>
              </div>

              {/* Price */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  gap: "4px",
                  marginBottom: "4px",
                }}
              >
                <span
                  style={{
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "#155724",
                    paddingTop: "6px",
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  ₦
                </span>
                <span
                  style={{
                    fontSize: "3.6rem",
                    fontWeight: 900,
                    color: "#155724",
                    lineHeight: 1,
                    fontFamily: "'Montserrat', sans-serif",
                    letterSpacing: "-2px",
                  }}
                >
                  30,000
                </span>
              </div>
              <p
                style={{
                  fontSize: "12.5px",
                  color: "#6b7280",
                  marginBottom: "28px",
                }}
              >
                Before March 25, 2027
              </p>

              {/* Deadline callout */}
              <div
                style={{
                  backgroundColor: "#f0fff4",
                  border: "1px solid #d1fae5",
                  borderRadius: "8px",
                  padding: "10px 14px",
                  marginBottom: "28px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2ECC71"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span style={{ fontSize: "12px", color: "#155724", fontWeight: 600 }}>
                  Deadline: March 25, 2027
                </span>
              </div>

              {/* Features */}
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 32px",
                  textAlign: "left",
                }}
              >
                {[
                  "Full conference access (both days)",
                  "Hybrid participation (in-person or virtual)",
                  "Conference materials & abstract book",
                  "Post-conference publication feedback",
                  "Networking sessions",
                ].map((feature) => (
                  <li
                    key={feature}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      padding: "7px 0",
                      fontSize: "13px",
                      color: "#374151",
                      borderBottom: "1px solid #f3f4f6",
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#2ECC71"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ flexShrink: 0 }}
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                style={{
                  display: "block",
                  backgroundColor: "#2ECC71",
                  color: "#ffffff",
                  padding: "13px 24px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: 700,
                  textAlign: "center",
                  boxShadow: "0 4px 16px rgba(46,204,113,0.3)",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.backgroundColor = "#27ae60";
                  el.style.boxShadow = "0 6px 22px rgba(46,204,113,0.4)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.backgroundColor = "#2ECC71";
                  el.style.boxShadow = "0 4px 16px rgba(46,204,113,0.3)";
                }}
              >
                Register at Early Bird Rate
              </a>
            </div>
          </div>

          {/* Late Registration */}
          <div
            style={{
              backgroundColor: "#ffffff",
              border: "1.5px solid #e5e7eb",
              borderRadius: "16px",
              padding: "40px 36px",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.transform = "translateY(-4px)";
              el.style.boxShadow = "0 12px 36px rgba(0,0,0,0.08)";
              el.style.borderColor = "#d1d5db";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "none";
              el.style.borderColor = "#e5e7eb";
            }}
          >
            <div style={{ textAlign: "center" }}>
              {/* Tier label */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "7px",
                  backgroundColor: "#f9fafb",
                  border: "1px solid #e5e7eb",
                  borderRadius: "7px",
                  padding: "6px 14px",
                  marginBottom: "20px",
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#6b7280"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#374151",
                    letterSpacing: "0.3px",
                  }}
                >
                  Late Registration
                </span>
              </div>

              {/* Price */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  gap: "4px",
                  marginBottom: "4px",
                }}
              >
                <span
                  style={{
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "#374151",
                    paddingTop: "6px",
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  ₦
                </span>
                <span
                  style={{
                    fontSize: "3.6rem",
                    fontWeight: 900,
                    color: "#374151",
                    lineHeight: 1,
                    fontFamily: "'Montserrat', sans-serif",
                    letterSpacing: "-2px",
                  }}
                >
                  40,000
                </span>
              </div>
              <p
                style={{
                  fontSize: "12.5px",
                  color: "#6b7280",
                  marginBottom: "28px",
                }}
              >
                After March 25, 2027
              </p>

              {/* Note */}
              <div
                style={{
                  backgroundColor: "#fffbeb",
                  border: "1px solid #fde68a",
                  borderRadius: "8px",
                  padding: "10px 14px",
                  marginBottom: "28px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#d97706"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                <span style={{ fontSize: "12px", color: "#92400e", fontWeight: 600 }}>
                  ₦10,000 more than early bird rate
                </span>
              </div>

              {/* Features */}
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 32px",
                  textAlign: "left",
                }}
              >
                {[
                  "Full conference access (both days)",
                  "Hybrid participation (in-person or virtual)",
                  "Conference materials & abstract book",
                  "Post-conference publication feedback",
                  "Networking sessions",
                ].map((feature) => (
                  <li
                    key={feature}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      padding: "7px 0",
                      fontSize: "13px",
                      color: "#374151",
                      borderBottom: "1px solid #f3f4f6",
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#9ca3af"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ flexShrink: 0 }}
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                style={{
                  display: "block",
                  backgroundColor: "transparent",
                  color: "#374151",
                  padding: "13px 24px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: 600,
                  textAlign: "center",
                  border: "1.5px solid #d1d5db",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "#155724";
                  el.style.color = "#155724";
                  el.style.backgroundColor = "#f0fff4";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "#d1d5db";
                  el.style.color = "#374151";
                  el.style.backgroundColor = "transparent";
                }}
              >
                Register at Standard Rate
              </a>
            </div>
          </div>
        </div>

        {/* Info note */}
        <p
          style={{
            textAlign: "center",
            fontSize: "12.5px",
            color: "#9ca3af",
            maxWidth: "500px",
            margin: "0 auto",
            lineHeight: 1.6,
          }}
        >
          For payment instructions and registration queries, contact{" "}
          <a
            href="mailto:editorial@cceccconferences.com"
            style={{ color: "#155724", fontWeight: 600, textDecoration: "none" }}
          >
            editorial@cceccconferences.com
          </a>
        </p>
      </div>
    </section>
  );
}
