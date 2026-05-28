import { SpeakerCard, SpeakerMember } from "./SpeakerCard";
import { FadeUp } from "./ui/FadeUp";

interface SpeakerSectionProps{
  SPEAKERS: SpeakerMember[];
}


const LOGOS = [
  { name: "UNILAG", abbr: "UNILAG" },
  { name: "UNN", abbr: "UNN" },
  { name: "ABU", abbr: "ABU" },
  { name: "UI", abbr: "UI" },
  { name: "AfDB", abbr: "AfDB" },
  { name: "FMP", abbr: "FMP" },
];

export function SpeakerGallery({SPEAKERS}: SpeakerSectionProps) {
  return (
    <section id="speakers" className="bg-white py-10 font-sans">
      <FadeUp>
      <div className="mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-light border border-primary rounded-full px-4 py-1.5 mb-5">
            <span className="text-[11px] font-bold text-primary-dark tracking-[1px] uppercase">
              Speakers
            </span>
          </div>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold text-[#0d2e17] tracking-[-0.5px] mb-4 font-heading">
            Voices of Authority
          </h2>
          <p className="text-[1.05rem] text-[#5a7a62] max-w-130 mx-auto leading-[1.7]">
            Our speakers represent Nigeria's leading academic institutions, government ministries, and development organizations.
          </p>
        </div>

        {/* Speaker Grid */}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-6 mb-18">
          {SPEAKERS.map((speaker, id) => (
            <FadeUp delay={Number(`0.${id}`)}>
              <SpeakerCard key={speaker.id} speaker={speaker} />
            </FadeUp>
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
                className="px-5.5 py-2.5 border border-primary-faint rounded-lg bg-[#f9fffe] text-[13px] font-bold text-primary-dark tracking-[0.5px] transition-all duration-200 hover:bg-primary-light hover:border-primary"
              >
                {logo.abbr}
              </div>
            ))}
          </div>
        </div>
      </div>
      </FadeUp>
    </section>
  );
}

