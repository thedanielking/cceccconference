// import { motion } from "motion/react";
import ConferenceCommittee from "./ConferenceCommittee";
import { FadeUp } from "./ui/FadeUp";

const CARDS = [
  {
    id: 1,
    number: "01",
    label: "The Gap",
    title: "Research Left on Shelves",
    description:
      "Research from third-world countries often ends up forgotten on shelves, forcing policymakers to rely on global data that doesn't fit local realities. The knowledge exists — but it never reaches decision-makers.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="8" width="24" height="3" rx="1.5" fill="#e74c3c" opacity="0.25" />
        <rect x="4" y="14" width="20" height="3" rx="1.5" fill="#e74c3c" opacity="0.45" />
        <rect x="4" y="20" width="16" height="3" rx="1.5" fill="#e74c3c" opacity="0.65" />
        <circle cx="26" cy="21.5" r="4" fill="none" stroke="#e74c3c" strokeWidth="2" />
        <line x1="29" y1="24.5" x2="31" y2="26.5" stroke="#e74c3c" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    accentColor: "#e74c3c",
    borderColor: "#fecaca",
    bgColor: "#fff8f8",
    numberColor: "#fca5a5",
  },
  {
    id: 2,
    number: "02",
    label: "The Solution",
    title: "Localized Knowledge Works",
    description:
      "Localized findings are much more realistic and impactful for our industries and governments. Research grounded in local context produces actionable insights that truly reflect on-the-ground conditions in Sub-Saharan Africa.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="11" stroke="#2ECC71" strokeWidth="2" />
        <path d="M10 16l4 4 8-8" stroke="#2ECC71" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    accentColor: "#2ECC71",
    borderColor: "#86efac",
    bgColor: "#f0fff4",
    numberColor: "#86efac",
  },
  {
    id: 3,
    number: "03",
    label: "The Mandate",
    title: "Bridging Knowledge to Action",
    description:
      "This summit gathers and communicates local knowledge to stakeholders to bridge the gap and deploy sustainable solutions. We connect researchers, policymakers, and industry to turn evidence into energy policy.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="8" cy="24" r="4" stroke="#0ea5e9" strokeWidth="2" />
        <circle cx="24" cy="24" r="4" stroke="#0ea5e9" strokeWidth="2" />
        <circle cx="16" cy="8" r="4" stroke="#0ea5e9" strokeWidth="2" />
        <line x1="11.5" y1="21" x2="13" y2="11.5" stroke="#0ea5e9" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="20.5" y1="21" x2="19" y2="11.5" stroke="#0ea5e9" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="12" y1="24" x2="20" y2="24" stroke="#0ea5e9" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    accentColor: "#0ea5e9",
    borderColor: "#bae6fd",
    bgColor: "#f0f9ff",
    numberColor: "#7dd3fc",
  },
];

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