const SPEAKERS = [
  {
    id: 1,
    name: "Prof. Aisha Bello",
    title: "Director, Renewable Energy Research",
    affiliation: "University of Lagos",
    initials: "AB",
    color: "#155724",
  },
  {
    id: 2,
    name: "Dr. Emeka Okafor",
    title: "Head of Energy Policy",
    affiliation: "Federal Ministry of Power",
    initials: "EO",
    color: "#2ECC71",
  },
  {
    id: 3,
    name: "Dr. Funmilayo Adeyemi",
    title: "Sustainable Energy Lead",
    affiliation: "University of Ibadan",
    initials: "FA",
    color: "#1a8a4a",
  },
  {
    id: 4,
    name: "Prof. Chidi Nwachukwu",
    title: "Chair, Environmental Studies",
    affiliation: "University of Nigeria, Nsukka",
    initials: "CN",
    color: "#0f6630",
  },
  {
    id: 5,
    name: "Ms. Zainab Musa",
    title: "Climate Finance Specialist",
    affiliation: "African Development Bank",
    initials: "ZM",
    color: "#27ae60",
  },
  {
    id: 6,
    name: "Engr. Tunde Rasheed",
    title: "Solar Systems Engineer",
    affiliation: "Ahmadu Bello University",
    initials: "TR",
    color: "#155724",
  },
  {
    id: 7,
    name: "Dr. Ngozi Eze",
    title: "Executive Director",
    affiliation: "Clean Energy Initiative NG",
    initials: "NE",
    color: "#2ECC71",
  },
  {
    id: 8,
    name: "Prof. Babatunde Fashola",
    title: "Energy Regulatory Expert",
    affiliation: "Covenant University",
    initials: "BF",
    color: "#1a8a4a",
  },
];

const LOGOS = [
  { name: "UNILAG", abbr: "UNILAG" },
  { name: "UNN", abbr: "UNN" },
  { name: "ABU", abbr: "ABU" },
  { name: "UI", abbr: "UI" },
  { name: "AfDB", abbr: "AfDB" },
  { name: "FMP", abbr: "FMP" },
];

export function SpeakerGallery() {
  return (
    <section
      id="speakers"
      style={{
        backgroundColor: "#ffffff",
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
              Committee & Speakers
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
            Voices of Authority
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "#5a7a62",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Our organizing committee and speakers represent Nigeria's leading
            academic institutions, government ministries, and development
            organizations.
          </p>
        </div>

        {/* Speaker Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "24px",
            marginBottom: "72px",
          }}
        >
          {SPEAKERS.map((speaker) => (
            <SpeakerCard key={speaker.id} speaker={speaker} />
          ))}
        </div>

        {/* Affiliation Logos Row */}
        <div
          style={{
            borderTop: "1px solid #e8f5e9",
            paddingTop: "48px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "12px",
              fontWeight: 600,
              color: "#9ca3af",
              letterSpacing: "1px",
              textTransform: "uppercase",
              marginBottom: "28px",
            }}
          >
            Partnering Institutions
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            {LOGOS.map((logo) => (
              <div
                key={logo.name}
                style={{
                  padding: "10px 22px",
                  border: "1px solid #d1fae5",
                  borderRadius: "8px",
                  backgroundColor: "#f9fffe",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#155724",
                  letterSpacing: "0.5px",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.backgroundColor = "#f0fff4";
                  el.style.borderColor = "#2ECC71";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.backgroundColor = "#f9fffe";
                  el.style.borderColor = "#d1fae5";
                }}
              >
                {logo.abbr}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SpeakerCard({ speaker }: { speaker: (typeof SPEAKERS)[number] }) {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        border: "1px solid #e8f5e9",
        borderRadius: "16px",
        padding: "28px 24px",
        textAlign: "center",
        transition: "all 0.25s ease",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.transform = "translateY(-5px)";
        el.style.boxShadow = "0 12px 36px rgba(21,87,36,0.1)";
        el.style.borderColor = "#2ECC71";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
        el.style.borderColor = "#e8f5e9";
      }}
    >
      {/* Avatar */}
      <div
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          backgroundColor: speaker.color,
          margin: "0 auto 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: `3px solid ${speaker.color}33`,
          boxShadow: `0 0 0 5px ${speaker.color}11`,
          fontSize: "1.3rem",
          fontWeight: 700,
          color: "#ffffff",
          fontFamily: "'Montserrat', sans-serif",
        }}
      >
        {speaker.initials}
      </div>

      <div
        style={{
          fontSize: "0.95rem",
          fontWeight: 700,
          color: "#0d2e17",
          marginBottom: "4px",
          fontFamily: "'Montserrat', sans-serif",
        }}
      >
        {speaker.name}
      </div>
      <div
        style={{
          fontSize: "0.8rem",
          color: "#6b7280",
          marginBottom: "8px",
          lineHeight: 1.4,
        }}
      >
        {speaker.title}
      </div>
      <div
        style={{
          display: "inline-block",
          backgroundColor: "#f0fff4",
          border: "1px solid #d1fae5",
          borderRadius: "100px",
          padding: "3px 12px",
          fontSize: "11px",
          fontWeight: 600,
          color: "#155724",
        }}
      >
        {speaker.affiliation}
      </div>
    </div>
  );
}
