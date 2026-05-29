import { FadeUp } from "../components/ui/FadeUp";
import { ActionPillars } from "../components/ActionPillars";
import { SpeakerGallery } from "../components/SpeakerGallery";
import { SpeakerMember } from "../components/SpeakerCard";
  
const SPEAKERS: SpeakerMember[] = [
  { id: 1, name: "Prof M.O. Daramola", title: "Keynote Speaker", avatar: "../Picture1.png", affiliation: "University of Pretoria, Pretoria, South Africa", initials: "MO",  color: "#1a8a4a", isAvailable: true },
  { id: 2, name: "Vincent Anayochukwu Ani", title: "Speaker", affiliation: "", initials: "VA", avatar: "../Picture2.png", institution: "../logo1.png", color: "#1a8a4a", isAvailable: true },
  { id: 3, name: "Ozioko Anthonia Taiwo", title: "Speaker", affiliation: "", initials: "OT", avatar: "../Picture6.png", institution: "../logo1.png", color: "#1a8a4a", isAvailable: true },
  { id: 4, name: "Elizabeth Oses Amuta", title: "Speaker", affiliation: "", initials: "EA", avatar: "../Picture7.jpg", institution: "../logo3.png", color: "#1a8a4a", isAvailable: true },
  { id: 5, name: "Babatunde Oluseyi Ajiboye", title: "Speaker", affiliation: "", initials: "BA", avatar: "../Picture8.jpg", institution: "../logo4.png", color: "#1a8a4a", isAvailable: true },
  { id: 6, name: "Moses Eterigho Emetere", title: "Speaker", affiliation: "", initials: "ME", avatar: "../Picture3.png", institution: "../BUlogo.jpg", color: "#1a8a4a", isAvailable: true },
  { id: 7, name: "Waidi Gbenro Adebayo", title: "Speaker", affiliation: "", initials: "WA", avatar: "../Picture5.png", institution: "../logo2.png", color: "#1a8a4a", isAvailable: true },
  { id: 8, name: "Osa Edosa", title: "Speaker", affiliation: "", initials: "OE", avatar: "../Picture9.jpg", institution: "../logo5.jpg", color: "#1a8a4a", isAvailable: true },
  { id: 9, name: "Nuhu Musa", title: "Speaker", affiliation: "", initials: "NM", avatar: "../Picture12.png", institution: "../logo8.jpg", color: "#1a8a4a", isAvailable: true },
  { id: 10, name: "JekayinOluwa Olabemiwo", title: "Speaker", affiliation: "", initials: "JO", avatar: "../Picture13.jpg", institution: "../logo4.png", color: "#1a8a4a", isAvailable: true },
  { id: 11, name: "Michael Omodara", title: "Speaker", affiliation: "", initials: "MO", avatar: "../Picture14.png", institution: "../logo9.jpg", color: "#1a8a4a", isAvailable: true },
  { id: 12, name: "Bukola Badeji-Ajisafe", title: "Speaker", affiliation: "", initials: "BB", avatar: "../Picture10.png", institution: "../logo6.png", color: "#1a8a4a", isAvailable: true },
  { id: 13, name: "Esther Menegbe Gana", title: "Speaker", affiliation: "", initials: "EG", avatar: "../Picture11.jpg", institution: "../logo7.png", color: "#1a8a4a", isAvailable: true },
  { id: 14, name: "Elijah Ige Ohimain", title: "Speaker", affiliation: "", initials: "EO", avatar: "../Picture15.png", institution: "../logo10.png", color: "#1a8a4a", isAvailable: true },
  { id: 15, name: "IJAOLA Opololaoluwa Oladimarun", title: "Speaker", affiliation: "", initials: "IO", avatar: "../Picture18.jpg", institution: "../logo12.png", color: "#1a8a4a", isAvailable: true },
  { id: 16, name: "Charles Baridi Kpina", title: "Speaker", affiliation: "", initials: "CK", avatar: "../Picture19.jpg", institution: "../logo13.jpg", color: "#1a8a4a", isAvailable: true },
  { id: 17, name: "Joseph O. Dirisu", title: "Speaker", affiliation: "", initials: "JD", avatar: "../Picture20.png", institution: "../logo16.jpg", color: "#1a8a4a", isAvailable: true },
  { id: 18, name: "Casper Boongaling Agaton", title: "Speaker", affiliation: "", initials: "CA", avatar: "../Picture16.png", institution: "../logo11.png", color: "#1a8a4a", isAvailable: true },
  { id: 19, name: "John Afamefuna Chikelu", title: "Speaker", affiliation: "", initials: "JC", avatar: "../Picture17.png", institution: "../logo1.png", color: "#1a8a4a", isAvailable: true },
  { id: 20, name: "Obanor I. Enoch", title: "Speaker", affiliation: "", initials: "OE", avatar: "../Picture21.png", institution: "../logo16.jpg", color: "#1a8a4a", isAvailable: true },
  { id: 21, name: "Oluwarotimi Ayokunnu Owolabi", title: "Speaker", affiliation: "", initials: "OO", avatar: "../Picture24.png", institution: "../logo16.jpg", color: "#1a8a4a", isAvailable: true },
  { id: 22, name: "Yinka Segun ADEMILUYI", title: "Speaker", affiliation: "", initials: "YA", avatar: "../Picture25.jpg", institution: "../logo17.jpg", color: "#1a8a4a", isAvailable: true },
  { id: 23, name: "Umosekhaimhe G. Oshos", title: "Speaker", affiliation: "", initials: "UO", avatar: "../Picture26.png", institution: "../logo18.png", color: "#1a8a4a", isAvailable: true },
  { id: 24, name: "Leila Bekrit", title: "Speaker", affiliation: "", initials: "LB", avatar: "../Picture22.png", institution: "../logo14.jpg", color: "#1a8a4a", isAvailable: true },
  { id: 25, name: "Doris D. Houssou", title: "Speaker", affiliation: "", initials: "DH", avatar: "../Picture23.jpg", institution: "../logo15.png", color: "#1a8a4a", isAvailable: true },
  { id: 26, name: "Emmanuel Okeoghene Efeonah", title: "Speaker", affiliation: "", initials: "EE", avatar: "../Picture27.jpg", institution: "../logo16.jpg", color: "#1a8a4a", isAvailable: true },
  { id: 27, name: "Williams Chukwuemeke Ajuwaeze", title: "Speaker", affiliation: "", initials: "WA", avatar: "../Picture30.jpg", institution: "../logo16.jpg", color: "#1a8a4a", isAvailable: true },
  { id: 28, name: "Lamidi Kehinde Felix", title: "Speaker", affiliation: "", initials: "LF", avatar: "../Picture31.jpg", institution: "../logo20.jpg", color: "#1a8a4a", isAvailable: true },
  { id: 29, name: "Olukunle Charles Olawole", title: "Speaker", affiliation: "", initials: "OO", avatar: "../Picture32.jpg", institution: "../logo16.jpg", color: "#1a8a4a", isAvailable: true },
  { id: 30, name: "Umar Abubakar", title: "Speaker", affiliation: "", initials: "UA", avatar: "../Picture28.jpg", institution: "../logo19.jpg", color: "#1a8a4a", isAvailable: true },
  { id: 31, name: "BABALOLA Philip Olufemi", title: "Speaker", affiliation: "", initials: "BO", avatar: "../Picture29.jpg", institution: "../logo16.jpg", color: "#1a8a4a", isAvailable: true },
  { id: 32, name: "Nwosu-Obieogu Kenechi", title: "Speaker", affiliation: "Michael Okpara University of Agriculture, Umudike, Nigeria", initials: "NK",  color: "#1a8a4a", isAvailable: true },
  { id: 33, name: "Olufemi Amudipe", title: "Speaker", affiliation: "Bowen University Iwo, Nigeria", initials: "OA",  color: "#1a8a4a", isAvailable: true },
  { id: 34, name: "Kesyton Oyamenda Ozegin", title: "Speaker", affiliation: "Ambrose Alli University Ekpoma, Nigeria", initials: "KO",  color: "#1a8a4a", isAvailable: true },
  { id: 35, name: "Elijah Eferoghene Onojowho", title: "Speaker", affiliation: "University of Nigeria Nsukka, Nigeria", initials: "EO",  color: "#1a8a4a", isAvailable: true },
  { id: 36, name: "Daniel Uchenna Achilihu", title: "Speaker", affiliation: "Wale University, Nigeria", initials: "DA",  color: "#1a8a4a", isAvailable: true },
  { id: 37, name: "Rishabh Joshi", title: "Speaker", affiliation: "Shri Ramswaroop Memorial University, India", initials: "RJ",  color: "#1a8a4a", isAvailable: true },
  { id: 38, name: "Sidum Adumene", title: "Speaker", affiliation: "Rivers State University, Nigeria", initials: "SA",  color: "#1a8a4a", isAvailable: true },
  { id: 39, name: "Adebisi Adedayo", title: "Speaker", affiliation: "Ibadan Electricity Distribution Company, Nigeria", initials: "AA",  color: "#1a8a4a", isAvailable: true },
  { id: 40, name: "Oladapo Oladoja", title: "Speaker", affiliation: "Abiola Ajimobi Technical University, Ibadan, Nigeria", initials: "OO",  color: "#1a8a4a", isAvailable: true },
  { id: 41, name: "Ugwu Ngozi Mirianrita", title: "Speaker", affiliation: "University of Nigeria Nsukka, Nigeria", initials: "UM",  color: "#1a8a4a", isAvailable: true },
  { id: 42, name: "Ugonna Nkwunonwo", title: "Speaker", affiliation: "University of Nigeria Nsukka, Nigeria", initials: "UN",  color: "#1a8a4a", isAvailable: true },
  { id: 43, name: "Kelechi Esther Onyemata", title: "Speaker", affiliation: "Nile University of Nigeria", initials: "KO",  color: "#1a8a4a", isAvailable: true },
  { id: 44, name: "Maxime Mahugnon OBE", title: "Speaker", affiliation: "National University of Agriculture of Bénin", initials: "MO",  color: "#1a8a4a", isAvailable: true },
  { id: 45, name: "KOUNOU Nounagnon Roméo Roger", title: "Speaker", affiliation: "National University of Agriculture of Bénin", initials: "KR",  color: "#1a8a4a", isAvailable: true },
];

  const INFO_ROWS = [
    {
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2ECC71" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      ),
      value: "15th–16th April 2026",
    },
    {
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2ECC71" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      value: "Bowen University · Online Mode",
    },
    {
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2ECC71" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      value: "Hybrid — International Reach",
    },
  ];

export default function ConferenceHistory(){
    return (
        <div className="space-y-10 lg:space-y-20">
       <section      
      className="relative w-full h-90 flex items-center overflow-hidden font-sans"
    >
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('../pastConferenceImg1.jpg')] bg-cover bg-position-[center_40%] bg-no-repeat" />

      {/* Layered overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.70) 42%, rgba(255,255,255,0.20) 70%, rgba(255,255,255,0.05) 100%)",
        }}
      />

      {/* Subtle bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-white/10 to-transparent" />

      {/* Content */}
      <div className="relative mx-auto px-8 lg:px-20 pt-27.5 pb-20 w-full">
        <div className="">
          

          {/* Main headline */}
          <FadeUp delay={0.3} >
          <h1 className="text-[clamp(1.9rem,4vw,3.1rem)] font-extrabold text-text-main leading-[1.13] tracking-[-0.8px] mb-4.5 font-heading ">             
             Past{" "}
            <span className="text-primary-dark">Conferences</span>
          </h1> 
          </FadeUp>

          <FadeUp delay={0.5}>
          <p className="italic">Take a look at previous editions...</p>     
          </FadeUp>

          
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-50 ">
        <div className="w-4.5 h-7 border-2 border-primary-dark rounded-[9px] flex justify-center pt-1">
          <div className="w-0.75 h-1.25 bg-primary rounded-sm animate-scroll-dot" />
        </div>
      </div>
    </section>

    <div className="grid grid-cols-2 gap-7 items-center max-[860px]:grid-cols-1 px-8 lg:px-20">
        {/* left side */}
        <FadeUp delay={0.8} duration={0.6}>
            <div className="rounded-[18px] overflow-hidden relative"> 

            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(rgba(46,204,113,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(46,204,113,0.06) .8px, transparent 1px)`,
                  backgroundSize: "32px 32px",
                }}
              /> 
                        
  
              <div className="relative pt-10 pb-9">
                {/* Status + edition badge */}
                <div className="flex items-center gap-2.5 mb-8">
                  <div className="flex items-center gap-1.5 bg-primary/12 border border-primary/25 rounded-full px-3 py-1.25">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-[10.5px] font-bold text-primary tracking-[0.8px] uppercase">
                      Completed
                    </span>
                  </div>
                  <span className="text-[10.5px] font-semibold /30 tracking-[0.8px] uppercase">
                    1st Edition
                  </span>
                </div>
  
                {/* Conference code */}
                <div className="text-[clamp(2.4rem,5vw,3.6rem)] font-black  font-heading tracking-[-1.5px] leading-none mb-2">
                  NCCECC
                  <span className="text-primary">-2026</span>
                </div>

                {/* Theme tag row */}
              <div className="bg-bg-alt border border-border-default rounded-lg p-5 px-5">
                <p className="text-[10px] font-bold text-text-faint tracking-[1px] uppercase mb-3">
                  2026 Conference Theme
                </p>
                <p className="text-[13px] text-text-body italic leading-relaxed m-0 border-l-[3px] border-l-primary pl-3">
                  "Advancing Clean Energy Solutions for Climate-Resilient and Sustainable Development in Sub-Saharan Africa"
                </p>
              </div>
  
                {/* Key info rows */}
                {INFO_ROWS.map((row, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 py-2.75 border-t border-white/6"
                  >
                    <div className="w-7.5 h-7.5 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                      {row.icon}
                    </div>
                    <span className="text-xs /75 font-medium">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>  
              
            </div>
        </FadeUp>

            {/* right side */}

        <FadeUp delay={1.4} duration={1}>
            <div>
                <img src="../bgconference2.jpg" alt="conference img" />
            </div>
        </FadeUp>
    </div>

    <ActionPillars />
    <SpeakerGallery SPEAKERS={SPEAKERS} />

    <div>

    </div>
        </div>
    )
}