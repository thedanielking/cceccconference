import { Hero } from "../components/Hero";
import { WhyNow } from "../components/WhyNow";
import { PastConferences } from "../components/PastConferences";
import { Proceedings } from "../components/Proceedings";
import { AbstractsTimeline } from "../components/AbstractsTimeline";
import { ActionPillars } from "../components/ActionPillars";
import { Fees } from "../components/Fees";
import { FinalCTA } from "../components/FinalCTA";
import { Info } from "../components/Info"

export default function Homepage() {
    return (
        <div className="min-h-screen bg-white font-sans overflow-x-hidden">
          <Hero />
          <WhyNow />
          <Info />
          <ActionPillars />
          <PastConferences />
          <Proceedings />
          <AbstractsTimeline />
          <Fees />
          <FinalCTA />
        </div>  
    );
  }