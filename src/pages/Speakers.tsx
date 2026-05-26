import { SpeakerGallery } from "../components/SpeakerGallery";

export function Speakers(){
    return (
        <div className="space-y-10 lg:space-y-20">
            <section
      id="home"
      className="relative w-full h-90 flex items-center overflow-hidden font-sans"
    >
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('../slide5.webp')] bg-cover bg-position-[center_40%] bg-no-repeat" />

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
          <h1 className="text-[clamp(1.9rem,4vw,3.1rem)] font-extrabold text-text-main leading-[1.13] tracking-[-0.8px] mb-4.5 font-heading ">             
             Conference{" "}
            <span className="text-primary-dark">Speakers</span>
          </h1> 
          <p className="italic">Let's talk about the future</p>     

          
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-50">
        <div className="w-[18px] h-7 border-2 border-primary-dark rounded-[9px] flex justify-center pt-1">
          <div className="w-[3px] h-[5px] bg-primary rounded-sm animate-scroll-dot" />
        </div>
      </div>
    </section>

    <div className="flex flex-col-reverse gap-4 px-8 lg:px-20 py-1 font-sans lg:flex-row lg:items-center lg:gap-10">
        <div className="flex-1">
            <p className="text-[11px] font-bold text-primary-dark tracking-[0.8px] uppercase mb-1">Conference keynote speaker</p>
            <div>
                <h2>Prof M.O. Daramola</h2>
                <p className="text-sm -mt-1">University of Pretoria, Pretoria, South Africa</p>
            </div>
            <p>
            Prof Daramola is a professor and Head of the Department of Chemical Engineering at the University of Pretoria. He is a global scholar with over 20 years of experiences in teaching, research, administration and management in academia. He is a Chartered Engineer (CEng) with Engineering Council of UK, a Fellow of Institution of Chemical Engineers UK (FIChemE), a Member of Academy of Science of South Africa (MASSAF), a Fellow of South African Institution of Chemical Engineers (FSAIChE) and a COREN-registered Engineer in Nigeria. Prof Daramola conducts sustainable chemical engineering research producing solutions for enhancing sustainable energy and environment. He is amongst the world's Top 2% scientists (Stanford and Elsevier’s list). Prof Daramola conducts sustainable chemical engineering research producing solutions for enhancing sustainable energy and environment. To-date, Prof Daramola has trained 78 postgraduate students (33 doctorate and 45 master’s and more than 25 early career researchers (22 postdoctoral fellows as capacity development in the field)). In addition, he contributed in excess of 300 scientific publications (more than 250 journal articles, one granted patent, seventeen book chapters, and three edited books) with 8977 citations and H-index of 48 (GoogleScholar), as knowledge contributions to the field.
            </p>
        </div>
        <div className="flex-1">
            <img src="../Picture1.png"/>
        </div>
    </div>

    <SpeakerGallery />


        </div>
    )
}