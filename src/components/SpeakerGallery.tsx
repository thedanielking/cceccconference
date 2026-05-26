const SPEAKERS = [
  { id: 2, name: "Vincent Anayochukwu Ani", title: "Speaker", affiliation: "", initials: "VA", avatar: "../Picture2.png", institution: "../logo1.png", color: "#2ECC71" },
  { id: 3, name: "Ozioko Anthonia Taiwo", title: "Speaker", affiliation: "", initials: "OT", avatar: "../Picture6.png", institution: "../logo1.png", color: "#1a8a4a" },
  { id: 4, name: "Elizabeth Oses Amuta", title: "Speaker", affiliation: "", initials: "EA", avatar: "../Picture7.jpg", institution: "../logo3.png", color: "#0f6630" },
  { id: 5, name: "Babatunde Oluseyi Ajiboye", title: "Speaker", affiliation: "", initials: "BA", avatar: "../Picture8.jpg", institution: "../logo4.png", color: "#27ae60" },
  { id: 6, name: "Moses Eterigho Emetere", title: "Speaker", affiliation: "", initials: "ME", avatar: "../Picture3.png", institution: "../BUlogo.jpg", color: "#155724" },
  { id: 7, name: "Waidi Gbenro Adebayo", title: "Speaker", affiliation: "", initials: "WA", avatar: "../Picture5.png", institution: "../logo2.png", color: "#2ECC71" },
  { id: 8, name: "Osa Edosa", title: "Speaker", affiliation: "", initials: "OE", avatar: "../Picture9.jpg", institution: "../logo5.jpg", color: "#1a8a4a" },
  { id: 9, name: "Nuhu Musa", title: "Speaker", affiliation: "", initials: "NM", avatar: "../Picture12.png", institution: "../logo8.jpg", color: "#155724" },
  { id: 10, name: "JekayinOluwa Olabemiwo", title: "Speaker", affiliation: "", initials: "JO", avatar: "../Picture13.jpg", institution: "../logo4.png", color: "#2ECC71" },
  { id: 11, name: "Michael Omodara", title: "Speaker", affiliation: "", initials: "MO", avatar: "../Picture14.png", institution: "../logo9.jpg", color: "#1a8a4a" },
  { id: 12, name: "Bukola Badeji-Ajisafe", title: "Speaker", affiliation: "", initials: "BB", avatar: "../Picture10.png", institution: "../logo6.png", color: "#0f6630" },
  { id: 13, name: "Esther Menegbe Gana", title: "Speaker", affiliation: "", initials: "EG", avatar: "../Picture11.jpg", institution: "../logo7.png", color: "#27ae60" },
  { id: 14, name: "Elijah Ige Ohimain", title: "Speaker", affiliation: "", initials: "EO", avatar: "../Picture15.png", institution: "../logo10.png", color: "#155724" },
  { id: 15, name: "IJAOLA Opololaoluwa Oladimarun", title: "Speaker", affiliation: "", initials: "IO", avatar: "../Picture18.jpg", institution: "../logo12.png", color: "#2ECC71" },
  { id: 16, name: "Charles Baridi Kpina", title: "Speaker", affiliation: "", initials: "CK", avatar: "../Picture19.jpg", institution: "../logo13.jpg", color: "#1a8a4a" },
  { id: 17, name: "Joseph O. Dirisu", title: "Speaker", affiliation: "", initials: "JD", avatar: "../Picture20.png", institution: "../logo16.jpg", color: "#155724" },
  { id: 18, name: "Casper Boongaling Agaton", title: "Speaker", affiliation: "", initials: "CA", avatar: "../Picture16.png", institution: "../logo11.png", color: "#2ECC71" },
  { id: 19, name: "John Afamefuna Chikelu", title: "Speaker", affiliation: "", initials: "JC", avatar: "../Picture17.png", institution: "../logo1.png", color: "#1a8a4a" },
  { id: 20, name: "Obanor I. Enoch", title: "Speaker", affiliation: "", initials: "OE", avatar: "../Picture21.png", institution: "../logo16.jpg", color: "#0f6630" },
  { id: 21, name: "Oluwarotimi Ayokunnu Owolabi", title: "Speaker", affiliation: "", initials: "OO", avatar: "../Picture24.png", institution: "../logo16.jpg", color: "#27ae60" },
  { id: 22, name: "Yinka Segun ADEMILUYI", title: "Speaker", affiliation: "", initials: "YA", avatar: "../Picture25.jpg", institution: "../logo17.jpg", color: "#155724" },
  { id: 23, name: "Umosekhaimhe G. Oshos", title: "Speaker", affiliation: "", initials: "UO", avatar: "../Picture26.png", institution: "../logo18.png", color: "#2ECC71" },
  { id: 24, name: "Leila Bekrit", title: "Speaker", affiliation: "", initials: "LB", avatar: "../Picture22.png", institution: "../logo14.jpg", color: "#1a8a4a" },
  { id: 25, name: "Doris D. Houssou", title: "Speaker", affiliation: "", initials: "DH", avatar: "../Picture23.jpg", institution: "../logo15.png", color: "#155724" },
  { id: 26, name: "Emmanuel Okeoghene Efeonah", title: "Speaker", affiliation: "", initials: "EE", avatar: "../Picture27.jpg", institution: "../logo16.jpg", color: "#2ECC71" },
  { id: 27, name: "Williams Chukwuemeke Ajuwaeze", title: "Speaker", affiliation: "", initials: "WA", avatar: "../Picture30.jpg", institution: "../logo16.jpg", color: "#1a8a4a" },
  { id: 28, name: "Lamidi Kehinde Felix", title: "Speaker", affiliation: "", initials: "LF", avatar: "../Picture31.jpg", institution: "../logo20.jpg", color: "#0f6630" },
  { id: 29, name: "Olukunle Charles Olawole", title: "Speaker", affiliation: "", initials: "OO", avatar: "../Picture32.jpg", institution: "../logo16.jpg", color: "#27ae60" },
  { id: 30, name: "Umar Abubakar", title: "Speaker", affiliation: "", initials: "UA", avatar: "../Picture28.jpg", institution: "../logo19.jpg", color: "#155724" },
  { id: 31, name: "BABALOLA Philip Olufemi", title: "Speaker", affiliation: "", initials: "BO", avatar: "../Picture29.jpg", institution: "../logo16.jpg", color: "#2ECC71" },
  { id: 32, name: "Nwosu-Obieogu Kenechi", title: "Speaker", affiliation: "Michael Okpara University of Agriculture, Umudike, Nigeria", initials: "NK",  color: "#1a8a4a" },
  { id: 33, name: "Olufemi Amudipe", title: "Speaker", affiliation: "Bowen University Iwo, Nigeria", initials: "OA",  color: "#155724" },
  { id: 34, name: "Kesyton Oyamenda Ozegin", title: "Speaker", affiliation: "Ambrose Alli University Ekpoma, Nigeria", initials: "KO",  color: "#2ECC71" },
  { id: 35, name: "Elijah Eferoghene Onojowho", title: "Speaker", affiliation: "University of Nigeria Nsukka, Nigeria", initials: "EO",  color: "#1a8a4a" },
  { id: 36, name: "Daniel Uchenna Achilihu", title: "Speaker", affiliation: "Wale University, Nigeria", initials: "DA",  color: "#0f6630" },
  { id: 37, name: "Rishabh Joshi", title: "Speaker", affiliation: "Shri Ramswaroop Memorial University, India", initials: "RJ",  color: "#27ae60" },
  { id: 38, name: "Sidum Adumene", title: "Speaker", affiliation: "Rivers State University, Nigeria", initials: "SA",  color: "#155724" },
  { id: 39, name: "Adebisi Adedayo", title: "Speaker", affiliation: "Ibadan Electricity Distribution Company, Nigeria", initials: "AA",  color: "#2ECC71" },
  { id: 40, name: "Oladapo Oladoja", title: "Speaker", affiliation: "Abiola Ajimobi Technical University, Ibadan, Nigeria", initials: "OO",  color: "#1a8a4a" },
  { id: 41, name: "Ugwu Ngozi Mirianrita", title: "Speaker", affiliation: "University of Nigeria Nsukka, Nigeria", initials: "UM",  color: "#155724" },
  { id: 42, name: "Ugonna Nkwunonwo", title: "Speaker", affiliation: "University of Nigeria Nsukka, Nigeria", initials: "UN",  color: "#2ECC71" },
  { id: 43, name: "Kelechi Esther Onyemata", title: "Speaker", affiliation: "Nile University of Nigeria", initials: "KO",  color: "#1a8a4a" },
  { id: 44, name: "Maxime Mahugnon OBE", title: "Speaker", affiliation: "National University of Agriculture of Bénin", initials: "MO",  color: "#0f6630" },
  { id: 45, name: "KOUNOU Nounagnon Roméo Roger", title: "Speaker", affiliation: "National University of Agriculture of Bénin", initials: "KR",  color: "#27ae60" },
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
              Speakers
            </span>
          </div>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold text-[#0d2e17] tracking-[-0.5px] mb-4 font-heading">
            Voices of Authority
          </h2>
          <p className="text-[1.05rem] text-[#5a7a62] max-w-[520px] mx-auto leading-[1.7]">
            Our speakers represent Nigeria's leading academic institutions, government ministries, and development organizations.
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
      : <div className="inline-block bg-primary-light border border-primary-faint rounded-full px-3 py-[3px] text-[11px] font-semibold text-primary-dark">
      <p>{speaker.affiliation}</p>
    </div>
      }
      
    </div>
  );
}