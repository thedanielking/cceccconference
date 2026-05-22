import { Modal } from "./components/Modal";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { WhyNow } from "./components/WhyNow";
import { PastConferences } from "./components/PastConferences";
import { Proceedings } from "./components/Proceedings";
import { AbstractsTimeline } from "./components/AbstractsTimeline";
import { RegistrationMethod } from "./components/RegistrationMethod"; // Remove this line
import { ActionPillars } from "./components/ActionPillars";
import { Fees } from "./components/Fees";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { RegistrationModal } from "./components/RegistrationModal"; // Add this

export default function App() {
  return (
    <Modal>
      <div className="min-h-screen bg-white font-sans overflow-x-hidden">
        <Header />
        <Hero />
        <WhyNow />
        <PastConferences />
        <Proceedings />
        <AbstractsTimeline />
        {/* Remove <RegistrationMethod /> from page flow */}
        <ActionPillars />
        <Fees />
        <FinalCTA />
        <Footer />
      </div>

      {/* Modal windows defined at app level */}
      <Modal.Window name="register">
        <RegistrationModal />
      </Modal.Window>
    </Modal>
  );
}