import { AbstractsTimeline } from "../components/AbstractsTimeline";
import { FadeUp } from "../components/ui/FadeUp";

export default function News(){
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
            <p>We are excited to announce the 2nd National Conference on Clean Energy and Climate Change, organized by the Cluster for Clean Energy and Climate Change (CCECC). Scheduled for April 15-16, 2027, this groundbreaking event aims to gather researchers, practitioners, and policymakers to share insights and solutions for tackling climate change and promoting clean energy in Nigeria. With a focus on advancing local knowledge and bridging the gap between academia and industry, this conference promises to be a pivotal moment in the national dialogue on sustainable development. Engage with experts in various fields, explore innovative clean energy technologies, and contribute to meaningful discussions on climate change mitigation strategies. This is your opportunity to be part of a collective effort to shape Nigeria's energy future. We invite you to participate, submit your papers, and join us in creating impactful solutions for a climate-resilient Nigeria.</p>
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


    <div className="bg-primary-dark py-24 font-sans relative overflow-hidden">
      {/* Decorative rings */}
      <div className="absolute -top-25 -right-25 w-120 h-120 rounded-full border border-primary/12 pointer-events-none" />
      <div className="absolute -top-15 -right-15 w-80 h-80 rounded-full bg-primary/6 pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-90 h-90 rounded-full border border-primary/8 pointer-events-none" />

      <div className="px-8 relative text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-primary/12 border border-primary/30 rounded-md px-3.5 py-1.5 mb-7">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="text-[11px] font-bold text-primary tracking-[0.9px] uppercase">
            April 15–16, 2027 &nbsp;·&nbsp; Hybrid Mode
          </span>
        </div>

        <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold text-white tracking-[-0.8px] leading-[1.12] mb-4.5 font-heading max-w-165 mx-auto">
          Ready to Take Action?{" "}
          <span className="text-primary">The Future of Energy Starts With You.</span>
        </h2>

        <p className="text-base text-white/70 max-w-130 mx-auto mb-11 leading-[1.75]">
          Join researchers, policymakers, engineers, and advocates at Sub Saharan Africa's
          premier clean energy and climate change conference. Submit your abstract
          or register your place today.
        </p>

        {/* CTA Row */}
        <div className="flex flex-col items-center justify-center gap-3.5 flex-wrap mb-13">
          <a
            href="https://forms.gle/KUhw72qfdKKXmcuc9"
            className="inline-flex items-center gap-2 bg-white text-primary-dark px-8 py-4 rounded-lg no-underline text-[14.5px] font-bold shadow-[0_4px_20px_rgba(0,0,0,0.18)] transition-all duration-200 hover:bg-primary-light hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(0,0,0,0.22)]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            Abstract Submission
          </a>

          <p className="flex items-center"><span className="text-3xl">👇</span> Only for accepted abstract</p>

          <a
            href="https://forms.gle/PmFbQM9umVRrNZFg9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-transparent text-white px-8 py-4 rounded-lg no-underline text-[14.5px] font-semibold border-2 border-white/35 transition-all duration-200 hover:border-primary hover:text-primary hover:-translate-y-0.5"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            Full paper Submission
          </a>
        </div>

        {/* Trust strip */}
        <div className="flex justify-center items-center gap-8 flex-wrap pt-8 border-t border-white/8">
          {[
            { icon: "🎓", label: "Open to Researchers & Students" },
            { icon: "🌍", label: "Sub-Saharan Africa Focus" },
            { icon: "📄", label: "Post-Conference Publication Support" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-white/55 text-[13px] font-medium">
              <span className="text-[17px]">{item.icon}</span>
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </div>

    </div>
    )
};