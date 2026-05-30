import ConferenceCommittee from "./ConferenceCommittee";
import { FadeUp } from "./ui/FadeUp";

export function WhyNow() {
  return (
    <>
    <section id="about" className="bg-white py-24 font-sans">
      <FadeUp delay={1} duration={0.5}>
        <div className="px-8 lg:px-20">

        {/* Section header */}
        <div className="flex flex-col items-center mb-14 flex-wrap">
          <div>
            <p className="text-[11px] font-bold text-primary tracking-widest uppercase text-center mb-2.5">
              Empowering Clean Energy
            </p>
            <h2 className="text-[clamp(1.7rem,3vw,2.5rem)] font-extrabold text-text-main tracking-[-0.5px] leading-[1.15] text-center font-heading max-w-115 capitalize">
              A national dialogue on sustainability
            </h2>
          </div>
          <p className="text-sm text-text-muted leading-[1.75] pt-1 max-w-115 text-center">
            The 2nd CCECC Conference exists to close a critical gap between
            research and reality — bringing local expertise into the rooms where
            energy decisions are made.
          </p>
        </div>

        <div className="flex flex-col-reverse gap-4 lg:flex-row lg:gap-10 lg:items-stretch">
          <div className="space-y-4 flex-1">
            <p className="leading-relaxed">Research findings from researchers in third-world countries end up on the shelf. Only very few findings from third-world countries made it to the limelight via personal efforts, which are uncommon in academia. Due to no access to the findings on the shelves, national policymakers, industries and governments have continually relied on globalized findings. Unfortunately, when it comes to clean energy and climate change, the localized findings are more realistic for policymakers, industries and governments. The mandate of this conference is to gather the localized findings and communicate them to stakeholders in order to foster a more inclusive approach to bridging the gap between local knowledge and global practices, ultimately leading to more sustainable and effective solutions. Join us at the National Conference on Clean Energy and Climate Change that is organized by the Cluster for Clean Energy and Climate Change (CCECC), where we unite experts, researchers, and policymakers to address critical issues surrounding clean energy solutions and climate resilience in sub-Saharan Africa.</p>
            <a href="#contact" className="ring ring-green-800 rounded px-3 py-1 text-green-900 ">Get in touch</a>
          </div>
          <div className="flex-1 h-64 lg:h-auto flex">
             <img
                src="./elders.jpg"
                alt="elders sitting"
                className="w-full h-full object-cover rounded"
              />
          </div>

        </div>
        
        </div>
      </FadeUp>
    </section>
    <ConferenceCommittee />
    </>
  );
}