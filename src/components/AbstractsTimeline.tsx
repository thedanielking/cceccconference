import { FadeUp } from "./ui/FadeUp";
import { TimelineStep } from "./ui/TimelineStep";

const TIMELINE_ITEMS = [
  {
    id: 1,
    date: "Oct. 15, 2026",
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
    date: "Dec. 01, 2026",
    label: "Notification of Acceptance",
    description:
      "Authors of Round 1 submissions will be notified of review outcomes and provided feedback to strengthen their work.",
    type: "notification",
    round: "Round 2",
    color: "#0ea5e9",
    bg: "#f0f9ff",
    border: "#bae6fd",
  },
  {
    id: 3,
    date: "Dec. 02, 2026",
    label: "Full Paper Submission",
    description:
      "A full paper submission window opens for researchers to submit the full paper of the round 2.",
    type: "submission",
    round: "Round 3",
    color: "#2ECC71",
    bg: "#f0fff4",
    border: "#86efac",
  },
  {
    id: 4,
    date: "Dec. 02, 2026",
    label: "Second Round Abstract Submission",
    description:
      "A second submission window opens for researchers who missed Round 1.",
    type: "submission",
    round: "Round 4",
    color: "#2ECC71",
    bg: "#f0fff4",
    border: "#86efac",
  },
  {
    id: 5,
    date: "Jan. 02, 2027",
    label: "Notification of Acceptance",
    description:
      "Authors of Round 4 submissions will be notified of review outcomes and provided feedback to strengthen their work.",
    type: "notification",
    round: "Round 5",
    color: "#0ea5e9",
    bg: "#f0f9ff",
    border: "#bae6fd",
  },
  {
    id: 6,
    date: "Jan. 03, 2026",
    label: "Full Paper Submission",
    description:
      "A full paper submission window opens for researchers to submit the full paper of the round 5.",
    type: "submission",
    round: "Round 6",
    color: "#2ECC71",
    bg: "#f0fff4",
    border: "#86efac",
  },
  {
    id: 7,
    date: "Mar. 10, 2027",
    label: "Notification of Acceptance",
    description:
      "Final acceptance notifications for all submissions. Accepted authors receive guidance on full paper preparation.",
    type: "notification",
    round: "Round 7",
    color: "#0ea5e9",
    bg: "#f0f9ff",
    border: "#bae6fd",
  },
];

export function AbstractsTimeline() {
  return (
    <section id="timeline" className="bg-white py-24 font-sans">
      <FadeUp delay={1} duration={0.5}>
      <div className="px-8 lg:px-20">
        {/* Section header */}
        <div className="text-center mb-15">
          <p className="text-[11px] font-bold text-primary tracking-widest uppercase mb-2.5">
            Call for Abstracts
          </p>
          <h2 className="text-[clamp(1.7rem,3vw,2.5rem)] font-extrabold text-text-main tracking-[-0.5px] mb-3.5 font-heading">
            Submission Timeline
          </h2>
          <p className="text-[0.93rem] text-text-muted max-w-140 mx-auto leading-[1.7]">
            The conference welcomes original, previously unpublished work from
            researchers, practitioners, academics, and students. Accepted papers
            will receive feedback to support post-conference publication.
          </p>
        </div>

        {/* Timeline steps */}
        <div className="relative grid grid-cols-7 gap-0 mb-12 max-[820px]:grid-cols-2 max-[820px]:gap-5 max-[400px]:grid-cols-1">
          {/* Connector line */}
          <div className="absolute top-7 left-[10%] right-[10%] h-0.5 bg-primary-faint z-0 max-[820px]:hidden" />

          {TIMELINE_ITEMS.map((item) => (
            <TimelineStep key={item.id} item={item} />
          ))}
        </div>

        {/* Context note + CTA */}
        <div className="max-w-170 mx-auto text-center">
          <div className="bg-white border border-border-default border-l-4 border-l-primary rounded-r-[10px] px-5.5 py-4.5 mb-8 text-left">
            <p className="text-[0.87rem] text-text-light leading-[1.7] m-0">
              <strong className="text-primary-dark">Publication pathway:</strong>{" "}
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
            className="inline-flex items-center gap-2.5 bg-primary-dark text-white px-7.5 py-3.5 rounded-lg no-underline text-[14.5px] font-bold shadow-[0_4px_18px_rgba(21,87,36,0.22)] transition-all duration-200 hover:bg-[#0f3d1a] hover:-translate-y-0.5 hover:shadow-[0_8px_26px_rgba(21,87,36,0.3)]"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            Go to Google Form Submission
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </div>
      </FadeUp>
    </section>
  );
}

