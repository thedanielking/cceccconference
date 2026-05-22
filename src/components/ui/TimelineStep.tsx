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

  
export function TimelineStep({ item }: { item: (typeof TIMELINE_ITEMS)[number] }) {
    const nodeColor = item.isMain ? "#155724" : item.color;
    const nodeBorder = item.isMain ? "#2ECC71" : "#ffffff";
    const nodeShadow = item.isMain
      ? "0 0 0 4px rgba(21,87,36,0.15), 0 4px 16px rgba(21,87,36,0.25)"
      : `0 0 0 3px ${item.color}22, 0 2px 10px ${item.color}33`;
  
    return (
      <div className="flex flex-col items-center text-center px-3 relative z-10">
        {/* Node dot */}
        <div
          className="w-14 h-14 rounded-full border-4 border-white flex items-center justify-center mb-4 shrink-0 transition-transform duration-200 hover:scale-110"
          style={{
            backgroundColor: nodeColor,
            borderColor: nodeBorder,
            boxShadow: nodeShadow,
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
          className="inline-block text-[9.5px] font-bold tracking-[0.7px] uppercase px-2 py-0.5 rounded-full mb-[7px] border"
          style={{
            backgroundColor: `${item.color}18`,
            borderColor: `${item.color}44`,
            color: item.color === "#155724" ? "#155724" : item.color,
          }}
        >
          {item.round}
        </span>
  
        {/* Date */}
        <p
          className="text-xs font-bold mb-1 tracking-[0.2px]"
          style={{ color: item.color === "#155724" ? "#155724" : item.color }}
        >
          {item.date}
        </p>
  
        {/* Label */}
        <p className="text-[12.5px] font-bold text-text-main mb-1.5 leading-[1.3] font-heading">
          {item.label}
        </p>
  
        {/* Description */}
        <p className="text-[11.5px] text-text-muted leading-[1.6] max-w-[180px]">
          {item.description}
        </p>
      </div>
    );
  }