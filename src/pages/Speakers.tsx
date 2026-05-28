import { SpeakerMember } from "../components/SpeakerCard";
import { SpeakerGallery } from "../components/SpeakerGallery";
import { FadeUp } from "../components/ui/FadeUp";


// this is the framework
const SPEAKERS: SpeakerMember[] = [
  { id: 2, name: "Vincent Anayochukwu Ani", title: "Speaker", affiliation: "", initials: "VA", avatar: "../Picture2.png", institution: "../logo1.png", color: "#1a8a4a", isAvailable: false },
  { id: 3, name: "Ozioko Anthonia Taiwo", title: "Speaker", affiliation: "", initials: "OT", avatar: "../Picture6.png", institution: "../logo1.png", color: "#1a8a4a", isAvailable: false },
  { id: 4, name: "Elizabeth Oses Amuta", title: "Speaker", affiliation: "", initials: "EA", avatar: "../Picture7.jpg", institution: "../logo3.png", color: "#1a8a4a", isAvailable: false },
  { id: 5, name: "Babatunde Oluseyi Ajiboye", title: "Speaker", affiliation: "", initials: "BA", avatar: "../Picture8.jpg", institution: "../logo4.png", color: "#1a8a4a", isAvailable: false },
  { id: 6, name: "Moses Eterigho Emetere", title: "Speaker", affiliation: "", initials: "ME", avatar: "../Picture3.png", institution: "../BUlogo.jpg", color: "#1a8a4a", isAvailable: false },
  { id: 7, name: "Waidi Gbenro Adebayo", title: "Speaker", affiliation: "", initials: "WA", avatar: "../Picture5.png", institution: "../logo2.png", color: "#1a8a4a", isAvailable: false },
  { id: 8, name: "Osa Edosa", title: "Speaker", affiliation: "", initials: "OE", avatar: "../Picture9.jpg", institution: "../logo5.jpg", color: "#1a8a4a", isAvailable: false },
  { id: 9, name: "Nuhu Musa", title: "Speaker", affiliation: "", initials: "NM", avatar: "../Picture12.png", institution: "../logo8.jpg", color: "#1a8a4a", isAvailable: false },
  { id: 10, name: "JekayinOluwa Olabemiwo", title: "Speaker", affiliation: "", initials: "JO", avatar: "../Picture13.jpg", institution: "../logo4.png", color: "#1a8a4a", isAvailable: false },
  { id: 11, name: "Michael Omodara", title: "Speaker", affiliation: "", initials: "MO", avatar: "../Picture14.png", institution: "../logo9.jpg", color: "#1a8a4a", isAvailable: false },
  { id: 12, name: "Bukola Badeji-Ajisafe", title: "Speaker", affiliation: "", initials: "BB", avatar: "../Picture10.png", institution: "../logo6.png", color: "#1a8a4a", isAvailable: false },
  { id: 13, name: "Esther Menegbe Gana", title: "Speaker", affiliation: "", initials: "EG", avatar: "../Picture11.jpg", institution: "../logo7.png", color: "#1a8a4a", isAvailable: false },
  { id: 14, name: "Elijah Ige Ohimain", title: "Speaker", affiliation: "", initials: "EO", avatar: "../Picture15.png", institution: "../logo10.png", color: "#1a8a4a", isAvailable: false },
  { id: 15, name: "IJAOLA Opololaoluwa Oladimarun", title: "Speaker", affiliation: "", initials: "IO", avatar: "../Picture18.jpg", institution: "../logo12.png", color: "#1a8a4a" },
  { id: 16, name: "Charles Baridi Kpina", title: "Speaker", affiliation: "", initials: "CK", avatar: "../Picture19.jpg", institution: "../logo13.jpg", color: "#1a8a4a", isAvailable: false },
  { id: 17, name: "Joseph O. Dirisu", title: "Speaker", affiliation: "", initials: "JD", avatar: "../Picture20.png", institution: "../logo16.jpg", color: "#1a8a4a", isAvailable: false },
  { id: 18, name: "Casper Boongaling Agaton", title: "Speaker", affiliation: "", initials: "CA", avatar: "../Picture16.png", institution: "../logo11.png", color: "#1a8a4a" },
  { id: 19, name: "John Afamefuna Chikelu", title: "Speaker", affiliation: "", initials: "JC", avatar: "../Picture17.png", institution: "../logo1.png", color: "#1a8a4a", isAvailable: false },
  { id: 20, name: "Obanor I. Enoch", title: "Speaker", affiliation: "", initials: "OE", avatar: "../Picture21.png", institution: "../logo16.jpg", color: "#1a8a4a", isAvailable: false },
  { id: 21, name: "Oluwarotimi Ayokunnu Owolabi", title: "Speaker", affiliation: "", initials: "OO", avatar: "../Picture24.png", institution: "../logo16.jpg", color: "#1a8a4a", isAvailable: false },
  { id: 22, name: "Yinka Segun ADEMILUYI", title: "Speaker", affiliation: "", initials: "YA", avatar: "../Picture25.jpg", institution: "../logo17.jpg", color: "#1a8a4a", isAvailable: false },
  { id: 23, name: "Umosekhaimhe G. Oshos", title: "Speaker", affiliation: "", initials: "UO", avatar: "../Picture26.png", institution: "../logo18.png", color: "#1a8a4a" },
  { id: 24, name: "Leila Bekrit", title: "Speaker", affiliation: "", initials: "LB", avatar: "../Picture22.png", institution: "../logo14.jpg", color: "#1a8a4a", isAvailable: false },
  { id: 25, name: "Doris D. Houssou", title: "Speaker", affiliation: "", initials: "DH", avatar: "../Picture23.jpg", institution: "../logo15.png", color: "#1a8a4a", isAvailable: false },
  { id: 26, name: "Emmanuel Okeoghene Efeonah", title: "Speaker", affiliation: "", initials: "EE", avatar: "../Picture27.jpg", institution: "../logo16.jpg", color: "#1a8a4a" },
  { id: 27, name: "Williams Chukwuemeke Ajuwaeze", title: "Speaker", affiliation: "", initials: "WA", avatar: "../Picture30.jpg", institution: "../logo16.jpg", color: "#1a8a4a", isAvailable: false },
  { id: 28, name: "Lamidi Kehinde Felix", title: "Speaker", affiliation: "", initials: "LF", avatar: "../Picture31.jpg", institution: "../logo20.jpg", color: "#1a8a4a", isAvailable: false },
  { id: 29, name: "Olukunle Charles Olawole", title: "Speaker", affiliation: "", initials: "OO", avatar: "../Picture32.jpg", institution: "../logo16.jpg", color: "#1a8a4a", isAvailable: false },
  { id: 30, name: "Umar Abubakar", title: "Speaker", affiliation: "", initials: "UA", avatar: "../Picture28.jpg", institution: "../logo19.jpg", color: "#1a8a4a", isAvailable: false },
  { id: 31, name: "BABALOLA Philip Olufemi", title: "Speaker", affiliation: "", initials: "BO", avatar: "../Picture29.jpg", institution: "../logo16.jpg", color: "#1a8a4a" },
  { id: 32, name: "Nwosu-Obieogu Kenechi", title: "Speaker", affiliation: "Michael Okpara University of Agriculture, Umudike, Nigeria", initials: "NK",  color: "#1a8a4a", isAvailable: false },
  { id: 33, name: "Olufemi Amudipe", title: "Speaker", affiliation: "Bowen University Iwo, Nigeria", initials: "OA",  color: "#1a8a4a", isAvailable: false },
  { id: 34, name: "Kesyton Oyamenda Ozegin", title: "Speaker", affiliation: "Ambrose Alli University Ekpoma, Nigeria", initials: "KO",  color: "#1a8a4a" },
  { id: 35, name: "Elijah Eferoghene Onojowho", title: "Speaker", affiliation: "University of Nigeria Nsukka, Nigeria", initials: "EO",  color: "#1a8a4a", isAvailable: false },
  { id: 36, name: "Daniel Uchenna Achilihu", title: "Speaker", affiliation: "Wale University, Nigeria", initials: "DA",  color: "#1a8a4a", isAvailable: false },
  { id: 37, name: "Rishabh Joshi", title: "Speaker", affiliation: "Shri Ramswaroop Memorial University, India", initials: "RJ",  color: "#1a8a4a", isAvailable: false },
  { id: 38, name: "Sidum Adumene", title: "Speaker", affiliation: "Rivers State University, Nigeria", initials: "SA",  color: "#1a8a4a", isAvailable: false },
  { id: 39, name: "Adebisi Adedayo", title: "Speaker", affiliation: "Ibadan Electricity Distribution Company, Nigeria", initials: "AA",  color: "#1a8a4a" },
  { id: 40, name: "Oladapo Oladoja", title: "Speaker", affiliation: "Abiola Ajimobi Technical University, Ibadan, Nigeria", initials: "OO",  color: "#1a8a4a", isAvailable: false },
  { id: 41, name: "Ugwu Ngozi Mirianrita", title: "Speaker", affiliation: "University of Nigeria Nsukka, Nigeria", initials: "UM",  color: "#1a8a4a", isAvailable: false },
  { id: 42, name: "Ugonna Nkwunonwo", title: "Speaker", affiliation: "University of Nigeria Nsukka, Nigeria", initials: "UN",  color: "#1a8a4a" },
  { id: 43, name: "Kelechi Esther Onyemata", title: "Speaker", affiliation: "Nile University of Nigeria", initials: "KO",  color: "#1a8a4a", isAvailable: false },
  { id: 44, name: "Maxime Mahugnon OBE", title: "Speaker", affiliation: "National University of Agriculture of Bénin", initials: "MO",  color: "#1a8a4a", isAvailable: false },
  { id: 45, name: "KOUNOU Nounagnon Roméo Roger", title: "Speaker", affiliation: "National University of Agriculture of Bénin", initials: "KR",  color: "#1a8a4a", isAvailable: false },
];

export default function Speakers(){
  const isAvailable = false;
    return (
        <div className="space-y-10 lg:space-y-20">
            <section
      id="home"
      className="relative w-full h-90 flex items-center overflow-hidden font-sans"
    >
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('../bgconference3.jpg')] bg-cover bg-position-[center_40%] bg-no-repeat" />

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
             Conference{" "}
            <span className="text-primary-dark">Speakers</span>
          </h1> 
          </FadeUp>

          <FadeUp delay={0.5}>
          <p className="italic">Let's talk about the future</p>     
          </FadeUp>

          
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-50">
        <div className="w-4.5 h-7 border-2 border-primary-dark rounded-[9px] flex justify-center pt-1">
          <div className="w-0.75 h-1.25 bg-primary rounded-sm animate-scroll-dot" />
        </div>
      </div>
    </section>

    <FadeUp delay={0.5} duration={1}>
    <div className="flex flex-col-reverse gap-4 px-8 lg:px-20 py-1 font-sans lg:flex-row-reverse lg:items-center lg:gap-10">
        {isAvailable ? <div className="flex-1">
            <p className="text-[11px] font-bold text-primary-dark tracking-[0.8px] uppercase mb-1">Conference keynote speaker</p>
            <div>
                <h2>Prof M.O. Daramola</h2>
                <p className="text-sm -mt-1">University of Pretoria, Pretoria, South Africa</p>
            </div>
            <p>
            Prof Daramola is a professor and Head of the Department of Chemical Engineering at the University of Pretoria. He is a global scholar with over 20 years of experiences in teaching, research, administration and management in academia. He is a Chartered Engineer (CEng) with Engineering Council of UK, a Fellow of Institution of Chemical Engineers UK (FIChemE), a Member of Academy of Science of South Africa (MASSAF), a Fellow of South African Institution of Chemical Engineers (FSAIChE) and a COREN-registered Engineer in Nigeria. Prof Daramola conducts sustainable chemical engineering research producing solutions for enhancing sustainable energy and environment. He is amongst the world's Top 2% scientists (Stanford and Elsevier’s list). Prof Daramola conducts sustainable chemical engineering research producing solutions for enhancing sustainable energy and environment. To-date, Prof Daramola has trained 78 postgraduate students (33 doctorate and 45 master’s and more than 25 early career researchers (22 postdoctoral fellows as capacity development in the field)). In addition, he contributed in excess of 300 scientific publications (more than 250 journal articles, one granted patent, seventeen book chapters, and three edited books) with 8977 citations and H-index of 48 (GoogleScholar), as knowledge contributions to the field.
            </p>
        </div> : (
          <div className="w-full lg:flex-1 bg-blue-800 flex items-center justify-center p-6 h-100">
            <p className="text-5xl text-white">?</p>
          </div>
        )}
        {isAvailable ? <div className="flex-1 rounded-full overflow-hidden">
            <img src="../Picture1.png" className="w-100 h-100 rounded-full object-cover mx-auto"/>
        </div> : (
          <div className="flex-1">
            <div className="flex items-center justify-center rounded-full bg-blue-800 w-100 h-100">
              <p className="text-5xl text-white">?</p>
            </div>
          </div>
        )}
    </div>
    </FadeUp>

    <SpeakerGallery SPEAKERS={SPEAKERS} />


        </div>
    )
}