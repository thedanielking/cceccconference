import { FadeUp } from "../components/ui/FadeUp";
import PublicationList, { PublicationItem } from "../components/PublicationList";

export default function Publications(){
    const publications: PublicationItem[] = [
        { id: 1, title: "Design of a solar-powered water pumping system for sustainable irrigation in rural communities", Author: "Ani et al", Page: "1-9" },
        { id: 2, title: "Towards the development of a deep learning based security solution for electric vehicle charging", Author: "Osa et al", Page: "10-23" },
        { id: 3, title: "Advances in sustainable energy technologies towards net-zero emissions in maritime operations", Author: "Adumene et al", Page: "24-31" },
        { id: 4, title: "Buoyancy-driven heat transfer enhancement in a hexagonal cavity using an optimized MgO–CuO–SiC hybrid nanofluid", Author: "Olabemiwo & Okekunle", Page: "32-41" },
        { id: 5, title: "Climate modeling of flood frequency and intensity in bayelsa state using the SWAT model for climate change adaptation", Author: "Ijaola et al", Page: "42-53" },
        { id: 6, title: "Contribution of the national centre for agriculural mechanization to clean energy production in Nigeria through agricultural and animal wastes", Author: "Ademuluyi", Page: "54-69" },
        { id: 7, title: "Rethinking clean energy utilisation for climate change mitigation and sustainable development in Nigeria: The imperative of community inclusion, mass education and public policy initiatives", Author: "Lamidi", Page: "70-90" },
    ]


    return (
        <div>
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
          Conference{" "}
            <span className="text-primary-dark"> Proceedings</span>
          </h1> 
          </FadeUp>

          <FadeUp delay={0.5}>
          <p className="italic">Discover publications that matter...</p>     
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

    <div className="bg-white py-10 font-sans">

    <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-light border border-primary rounded-full px-4 py-1.5 mb-5">
            <span className="text-[11px] font-bold text-primary-dark tracking-[1px] uppercase">
              publications
            </span>
          </div>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold text-[#0d2e17] tracking-[-0.5px] mb-4 font-heading">
            NCCECC 2026 Proceedings
          </h2>
    </div>

    <div className="space-y-4 px-8 lg:px-20">
       {publications.map((publication)=> (
        <PublicationList key={publication.id} publication={publication} />
       ))}

    </div>

    </div>
        </div>
    )
}



