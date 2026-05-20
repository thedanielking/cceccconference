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
    <section id="pillars" className="bg-white py-24 font-sans">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-[11px] font-bold text-primary tracking-[1.2px] uppercase mb-2.5">
            Conference Sub-Themes
          </p>
          <h2 className="text-[clamp(1.7rem,3vw,2.5rem)] font-extrabold text-text-main tracking-[-0.5px] mb-3.5 font-heading">
            7 Action Pillars
          </h2>
          <p className="text-[0.93rem] text-text-muted max-w-[500px] mx-auto leading-[1.7]">
            The conference is structured around seven interconnected sub-themes,
            each addressing a critical dimension of clean energy and climate
            action in Sub-Saharan Africa.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5">
          {PILLARS.map((pillar) => (
            <PillarCard key={pillar.id} pillar={pillar} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PillarCard({ pillar }: { pillar: (typeof PILLARS)[number] }) {
  return (
    <div className="bg-white border border-border-default rounded-xl p-7 px-[26px] flex flex-col gap-3 transition-all duration-[220ms] cursor-default relative overflow-hidden hover:border-primary hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(21,87,36,0.1)] hover:bg-[#f9fffe]">
      {/* Pillar number */}
      <div className="absolute top-4 right-[18px] text-[11px] font-bold text-primary-faint tracking-[0.5px] font-heading">
        0{pillar.id}
      </div>

      {/* Icon in pill */}
      <div className="w-[52px] h-[52px] bg-primary-light border border-primary-faint rounded-xl flex items-center justify-center shrink-0">
        {pillar.icon}
      </div>

      <h3 className="text-[0.95rem] font-bold text-text-main leading-[1.35] font-heading">
        {pillar.name}
      </h3>

      <p className="text-[0.84rem] text-text-muted leading-[1.7]">
        {pillar.description}
      </p>
    </div>
  );
}