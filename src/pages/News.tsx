import { AbstractsTimeline } from "../components/AbstractsTimeline";
import { Fees } from "../components/Fees";
import { FadeUp } from "../components/ui/FadeUp";

export function News(){
    return (
       <div className="space-y-3 lg:space-y-20">
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
          <FadeUp delay={0.3} >

          <h1 className="text-[clamp(1.9rem,4vw,3.1rem)] font-extrabold text-text-main leading-[1.13] tracking-[-0.8px] mb-4.5 font-heading ">             
             Clean energy and Climate{" "}
            <span className="text-primary-dark">Change Conference</span>
          </h1> 
          </FadeUp>

          <FadeUp delay={0.5} >
          <p className="italic">Join the movement for a sustainable future</p>     
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

    {/* call for paper */}
    <div id="info" className="px-8 lg:px-20 space-y-20">
    <div className="bg-primary-light/92 border border-primary-border border-l-4 border-l-primary rounded-r-lg px-4 py-3.5 mb-9 ">
        <p className="text-[11px] font-bold text-primary-dark tracking-[0.8px] uppercase mb-1">
            Call for paper
        </p>
        <p className="text-[0.95rem] text-[#1a3a24] leading-relaxed font-medium">
        The conference welcomes paper submissions from researchers, practitioners, academics, and students. The conference will only accept original and previously unpublished work on a range of topics related to the subtheme. The conference organizer reserves the right to reject papers that do not meet the required standards or fall outside the specified scope. Authors will be notified of the acceptance decision by the end of the submission review period, and feedback will be provided to support publishing the paper after the conference.
        </p>
    </div>

    <div className="space-y-10 lg:space-y-20">
      <FadeUp delay={0.3} >
       <div id="about" className="flex flex-col gap-2 lg:flex-row-reverse lg:gap-10">
        <div className="flex-1">
        <FadeUp delay={0.8} >
          <img src="../news1.jpg" alt="news" />
        </FadeUp>
        </div>
        <div className="flex-1">
            <h3 className="font-semibold text-lg lg:text-xl">Announcing the Cluster for Clean Energy and Climate Change (CCECC)!</h3>
            <p>We are excited to announce the 1st National Conference on Clean Energy and Climate Change, organized by the Cluster for Clean Energy and Climate Change (CCECC). Scheduled for April 15-16, 2026, this groundbreaking event aims to gather researchers, practitioners, and policymakers to share insights and solutions for tackling climate change and promoting clean energy in Nigeria. With a focus on advancing local knowledge and bridging the gap between academia and industry, this conference promises to be a pivotal moment in the national dialogue on sustainable development. Engage with experts in various fields, explore innovative clean energy technologies, and contribute to meaningful discussions on climate change mitigation strategies. This is your opportunity to be part of a collective effort to shape Nigeria's energy future. We invite you to participate, submit your papers, and join us in creating impactful solutions for a climate-resilient Nigeria.</p>
        </div>
       </div>
       </FadeUp>

       <FadeUp delay={0.3} >
       <div className="flex flex-col gap-2 lg:flex-row lg:gap-10">
       <div className="flex-1">
          <FadeUp delay={0.8} >
          <img src="../news2.jpg" alt="news" />
          </FadeUp>
        </div>
        <div className="flex-1">
            <h3 className="font-semibold text-lg lg:text-xl">Announcement of Publication Policy for Conference Papers</h3>
            <p>The Cluster for Clean Energy and Climate Change (CCECC) is committed to upholding the highest academic integrity standards. Therefore, the conference organizers reserve the right to withdraw and report any paper submission that infringes upon any form of plagiarism. This policy ensures that all contributions to the conference are original and uphold the ethical standards expected in academic research. By submitting your paper for this conference, you acknowledge and agree that the organizers have the right to publish your work. This publication will facilitate the dissemination of your research to a wider audience, contributing to the ongoing dialogue surrounding clean energy and climate change solutions. We appreciate your commitment to advancing knowledge in this vital area.</p>
        </div>
       </div>
       </FadeUp>

       {/* timeline */}
       
    </div>

    </div>
    <AbstractsTimeline />

    </div>
    )
};