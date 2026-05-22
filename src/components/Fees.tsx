import { Modal } from "./Modal";
import { RegistrationModal } from "./RegistrationModal";

export function Fees() {  

  return (
    <Modal>
    <section id="fees" className="bg-bg-alt py-24 font-sans">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-[11px] font-bold text-primary tracking-[1.2px] uppercase mb-2.5">
            Registration
          </p>
          <h2 className="text-[clamp(1.7rem,3vw,2.5rem)] font-extrabold text-text-main tracking-[-0.5px] mb-3.5 font-heading">
            Conference Fees
          </h2>
          <p className="text-[0.93rem] text-text-muted max-w-[460px] mx-auto leading-[1.7]">
            Secure your place at the 2nd CCECC Conference. Register early to
            take advantage of the discounted rate.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-7 max-w-[800px] mx-auto mb-12">
          {/* Early Bird */}
          <div className="bg-white border-2 border-primary rounded-2xl p-10 px-9 relative shadow-[0_8px_32px_rgba(46,204,113,0.12)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(46,204,113,0.18)]">
            {/* Recommended badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white text-[11px] font-bold tracking-[0.6px] uppercase px-4 py-1 rounded-full whitespace-nowrap">
              Best Value — Save ₦10,000
            </div>

            <div className="text-center">
              {/* Tier label */}
              <div className="inline-flex items-center gap-[7px] bg-primary-light border border-primary-border rounded-md px-3.5 py-1.5 mb-5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#155724" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
                <span className="text-xs font-bold text-primary-dark tracking-[0.3px]">
                  Early Bird Registration
                </span>
              </div>

              {/* Price */}
              <div className="flex items-start justify-center gap-1 mb-1">
                <span className="text-[22px] font-bold text-primary-dark pt-1.5 font-heading">₦</span>
                <span className="text-[3.6rem] font-black text-primary-dark leading-none font-heading tracking-[-2px]">
                  30,000
                </span>
              </div>
              <p className="text-[12.5px] text-text-muted mb-7">
                Before March 25, 2027
              </p>

              {/* Deadline callout */}
              <div className="bg-primary-light border border-primary-faint rounded-lg px-3.5 py-2.5 mb-7 flex items-center gap-2">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2ECC71" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span className="text-xs text-primary-dark font-semibold">
                  Deadline: March 25, 2027
                </span>
              </div>

              {/* Features */}
              <ul className="list-none p-0 m-0 mb-8 text-left">
                {[
                  "Full conference access (both days)",
                  "Hybrid participation (in-person or virtual)",
                  "Conference materials & abstract book",
                  "Post-conference publication feedback",
                  "Networking sessions",
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 py-[7px] text-[13px] text-text-body border-b border-border-light">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2ECC71" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Modal.Open opens="register">
                <button
                  className="block bg-primary text-white py-2.5 px-5 rounded-[7px] text-sm font-semibold text-center w-full"
                >
                  Register at Early Rate
                </button>
              </Modal.Open>
            </div>
          </div>

          {/* Late Registration */}
          <div className="bg-white border-[1.5px] border-border-default rounded-2xl p-10 px-9 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] hover:border-[#d1d5db]">
            <div className="text-center">
              {/* Tier label */}
              <div className="inline-flex items-center gap-[7px] bg-[#f9fafb] border border-border-default rounded-md px-3.5 py-1.5 mb-5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span className="text-xs font-bold text-text-body tracking-[0.3px]">
                  Late Registration
                </span>
              </div>

              {/* Price */}
              <div className="flex items-start justify-center gap-1 mb-1">
                <span className="text-[22px] font-bold text-text-body pt-1.5 font-heading">₦</span>
                <span className="text-[3.6rem] font-black text-text-body leading-none font-heading tracking-[-2px]">
                  40,000
                </span>
              </div>
              <p className="text-[12.5px] text-text-muted mb-7">
                After March 25, 2027
              </p>

              {/* Note */}
              <div className="bg-bg-warm border border-[#fde68a] rounded-lg px-3.5 py-2.5 mb-7 flex items-center gap-2">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                <span className="text-xs text-[#92400e] font-semibold">
                  ₦10,000 more than early bird rate
                </span>
              </div>

              {/* Features */}
              <ul className="list-none p-0 m-0 mb-8 text-left">
                {[
                  "Full conference access (both days)",
                  "Hybrid participation (in-person or virtual)",
                  "Conference materials & abstract book",
                  "Post-conference publication feedback",
                  "Networking sessions",
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 py-[7px] text-[13px] text-text-body border-b border-border-light">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Modal.Open opens="register">
                <button
                  className="block bg-transparent w-full text-text-body py-3.5 px-6 rounded-lg no-underline text-sm font-semibold text-center border-[1.5px] border-[#d1d5db] transition-all duration-200 hover:border-primary-dark hover:text-primary-dark hover:bg-primary-light"
                >
                  Register at Standard Rate
                </button>
              </Modal.Open>
              
            </div>
          </div>
        </div>

        {/* Info note */}
        <p className="text-center text-[12.5px] text-text-faint max-w-[500px] mx-auto leading-relaxed">
          For payment instructions and registration queries, contact{" "}
          <a href="mailto:editorial@cceccconferences.com" className="text-primary-dark font-semibold no-underline">
            editorial@cceccconferences.com
          </a>
        </p>
      </div>
    </section>

      {/* Modal window definition */}
      <Modal.Window name="register">
        <RegistrationModal />
      </Modal.Window>

    </Modal>
  );
}