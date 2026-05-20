const SPEAKERS = [
  { id: 1, name: "Prof. Aisha Bello", title: "Director, Renewable Energy Research", affiliation: "University of Lagos", initials: "AB", color: "#155724" },
  { id: 2, name: "Dr. Emeka Okafor", title: "Head of Energy Policy", affiliation: "Federal Ministry of Power", initials: "EO", color: "#2ECC71" },
  { id: 3, name: "Dr. Funmilayo Adeyemi", title: "Sustainable Energy Lead", affiliation: "University of Ibadan", initials: "FA", color: "#1a8a4a" },
  { id: 4, name: "Prof. Chidi Nwachukwu", title: "Chair, Environmental Studies", affiliation: "University of Nigeria, Nsukka", initials: "CN", color: "#0f6630" },
  { id: 5, name: "Ms. Zainab Musa", title: "Climate Finance Specialist", affiliation: "African Development Bank", initials: "ZM", color: "#27ae60" },
  { id: 6, name: "Engr. Tunde Rasheed", title: "Solar Systems Engineer", affiliation: "Ahmadu Bello University", initials: "TR", color: "#155724" },
  { id: 7, name: "Dr. Ngozi Eze", title: "Executive Director", affiliation: "Clean Energy Initiative NG", initials: "NE", color: "#2ECC71" },
  { id: 8, name: "Prof. Babatunde Fashola", title: "Energy Regulatory Expert", affiliation: "Covenant University", initials: "BF", color: "#1a8a4a" },
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
    <section id="speakers" className="bg-white py-[100px] font-sans">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-light border border-primary rounded-full px-4 py-1.5 mb-5">
            <span className="text-[11px] font-bold text-primary-dark tracking-[1px] uppercase">
              Committee & Speakers
            </span>
          </div>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold text-[#0d2e17] tracking-[-0.5px] mb-4 font-heading">
            Voices of Authority
          </h2>
          <p className="text-[1.05rem] text-[#5a7a62] max-w-[520px] mx-auto leading-[1.7]">
            Our organizing committee and speakers represent Nigeria's leading academic institutions, government ministries, and development organizations.
          </p>
        </div>

        {/* Speaker Grid */}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-6 mb-[72px]">
          {SPEAKERS.map((speaker) => (
            <SpeakerCard key={speaker.id} speaker={speaker} />
          ))}
        </div>

        {/* Affiliation Logos Row */}
        <div className="border-t border-primary-faint pt-12 text-center">
          <p className="text-xs font-semibold text-text-faint tracking-[1px] uppercase mb-7">
            Partnering Institutions
          </p>
          <div className="flex justify-center items-center gap-4 flex-wrap">
            {LOGOS.map((logo) => (
              <div
                key={logo.name}
                className="px-[22px] py-2.5 border border-primary-faint rounded-lg bg-[#f9fffe] text-[13px] font-bold text-primary-dark tracking-[0.5px] transition-all duration-200 hover:bg-primary-light hover:border-primary"
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
    <div className="bg-white border border-primary-faint rounded-2xl p-7 px-6 text-center transition-all duration-[250ms] cursor-default hover:-translate-y-[5px] hover:shadow-[0_12px_36px_rgba(21,87,36,0.1)] hover:border-primary">
      {/* Avatar */}
      <div
        className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-[1.3rem] font-bold text-white font-heading border-[3px]"
        style={{
          backgroundColor: speaker.color,
          borderColor: `${speaker.color}33`,
          boxShadow: `0 0 0 5px ${speaker.color}11`,
        }}
      >
        {speaker.initials}
      </div>

      <div className="text-[0.95rem] font-bold text-[#0d2e17] mb-1 font-heading">
        {speaker.name}
      </div>
      <div className="text-[0.8rem] text-text-muted mb-2 leading-[1.4]">
        {speaker.title}
      </div>
      <div className="inline-block bg-primary-light border border-primary-faint rounded-full px-3 py-[3px] text-[11px] font-semibold text-primary-dark">
        {speaker.affiliation}
      </div>
    </div>
  );
}