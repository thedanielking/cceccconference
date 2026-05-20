import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { WhyNow } from "./components/WhyNow";
import { AbstractsTimeline } from "./components/AbstractsTimeline";
import { ActionPillars } from "./components/ActionPillars";
import { Fees } from "./components/Fees";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Header />
      <Hero />
      <WhyNow />
      <AbstractsTimeline />
      <ActionPillars />
      <Fees />
      <FinalCTA />
      <Footer />
    </div>
  );
}