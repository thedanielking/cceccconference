// Define and export the member shape
export interface SpeakerMember {
    id: number;
    name: string;
    title: string;
    affiliation: string;
    initials: string;
    avatar?: string;
    institution?: string;
    color: string; 
  }
  
  interface SpeakerCardProps {
    speaker: SpeakerMember;
  }

export function SpeakerCard({ speaker }: SpeakerCardProps) {
    return (
      <div className="bg-white border border-primary-faint rounded-2xl p-7 px-6 text-center transition-all duration-250 cursor-default hover:-translate-y-1.25 hover:shadow-[0_12px_36px_rgba(21,87,36,0.1)] hover:border-primary">
        {/* Avatar */}
        <div
          className="w-20 h-20 overflow-hidden rounded-full mx-auto mb-4 flex items-center justify-center text-[1.3rem] font-bold text-white font-heading border-[3px]"
          style={{
            backgroundColor: speaker.color,
            borderColor: `${speaker.color}33`,
            boxShadow: `0 0 0 5px ${speaker.color}11`,
          }}
        >
          {speaker.avatar ? <img src={speaker.avatar} className="w-full h-full" alt={speaker.initials} /> : <p>{speaker.initials}</p>}        
        </div>
  
        <div className="text-[0.95rem] font-bold text-[#0d2e17] mb-1 font-heading">
          {speaker.name}
        </div>
        <div className="text-[0.8rem] text-text-muted mb-2 leading-[1.4]">
          {speaker.title}
        </div>
        {speaker.institution 
        ? <div className="w-9 h-9 mx-auto">
          <img src={speaker.institution} className="w-full h-full" alt={speaker.affiliation} /> 
        </div>
        : <div className="inline-block bg-primary-light border border-primary-faint rounded-full px-3 py-0.75 text-[11px] font-semibold text-primary-dark">
        <p>{speaker.affiliation}</p>
      </div>
        }
        
      </div>
    );
  }