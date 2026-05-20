const EVENTS = [
  { id: 1, date: "June 1, 2026", label: "Registration Opens", description: "Early-bird registration opens for delegates, students, and industry professionals.", type: "registration", status: "upcoming" },
  { id: 2, date: "July 15, 2026", label: "Abstract Submission Deadline", description: "Last day to submit research papers, poster proposals, and panel session ideas.", type: "deadline", status: "upcoming" },
  { id: 3, date: "August 1, 2026", label: "Early-Bird Registration Closes", description: "Secure your spot at the discounted early-bird rate before standard pricing applies.", type: "deadline", status: "upcoming" },
  { id: 4, date: "September 1, 2026", label: "Speaker Announcements", description: "Full lineup of keynote speakers, panelists, and workshop facilitators revealed.", type: "milestone", status: "upcoming" },
  { id: 5, date: "October 1, 2026", label: "Standard Registration Closes", description: "Final deadline for standard delegate registration. Late registration may apply.", type: "deadline", status: "upcoming" },
  { id: 6, date: "November 14–16, 2026", label: "CCECC Summit 2026", description: "Three days of keynotes, workshops, panel discussions, and networking — shaping Nigeria's clean energy future.", type: "event", status: "main" },
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
    <section className="bg-[#f9fffe] py-[100px] font-sans">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-light border border-primary rounded-full px-4 py-1.5 mb-5">
            <span className="text-[11px] font-bold text-primary-dark tracking-[1px] uppercase">
              Key Dates
            </span>
          </div>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold text-[#0d2e17] tracking-[-0.5px] mb-4 font-heading">
            Event Timeline
          </h2>
          <p className="text-[1.05rem] text-[#5a7a62] max-w-[500px] mx-auto leading-[1.7]">
            Mark your calendar. Every milestone brings us closer to November's landmark summit.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-[760px] mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-2.5 bottom-2.5 w-0.5 bg-primary-faint" />

          {EVENTS.map((event, index) => (
            <div key={event.id} className="flex gap-8 relative mb-10 last:mb-0">
              {/* Dot */}
              <div className="shrink-0 w-[50px] flex flex-col items-center">
                <div
                  className="w-[18px] h-[18px] rounded-full border-[3px] border-white relative z-10 mt-1.5"
                  style={{
                    backgroundColor: event.status === "main" ? "#155724" : TYPE_COLORS[event.type],
                    borderColor: event.status === "main" ? "#2ECC71" : "white",
                    boxShadow: event.status === "main" ? "0 0 0 5px rgba(21,87,36,0.15)" : `0 0 0 4px ${TYPE_COLORS[event.type]}22`,
                  }}
                />
              </div>

              {/* Card */}
              <div
                className={`flex-1 rounded-xl p-5 px-6 transition-all duration-200 hover:translate-x-1 ${
                  event.status === "main"
                    ? "bg-primary-light border border-primary shadow-[0_4px_24px_rgba(21,87,36,0.1)]"
                    : "bg-white border border-primary-faint hover:border-primary hover:shadow-[0_4px_16px_rgba(21,87,36,0.08)]"
                }`}
              >
                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                  <div className="text-[0.95rem] font-bold text-[#0d2e17] font-heading">
                    {event.label}
                  </div>
                  <div
                    className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-[0.4px] border"
                    style={{
                      backgroundColor: `${TYPE_COLORS[event.type]}18`,
                      borderColor: `${TYPE_COLORS[event.type]}44`,
                      color: TYPE_COLORS[event.type],
                    }}
                  >
                    {TYPE_LABELS[event.type]}
                  </div>
                </div>
                <div className="text-xs font-semibold text-primary mb-2 tracking-[0.3px]">
                  📅 {event.date}
                </div>
                <p className="text-[0.87rem] text-text-muted leading-[1.6] m-0">
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