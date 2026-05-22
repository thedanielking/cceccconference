import { useState } from "react";

const BANK_DETAILS = {
  accountName: "CCECC Conference Fund",
  bank: "First Bank of Nigeria",
  accountNumber: "3012345678",
};

function CopyIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2z2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function CopyField({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div>
      <p className="text-[10px] font-bold text-text-faint tracking-[0.8px] uppercase mb-1">
        {label}
      </p>
      <div className="flex items-center justify-between bg-bg-alt border border-border-default rounded-md px-3 py-2 gap-2.5">
        <span
          className={`text-[13.5px] font-semibold text-[#111827] ${
            label === "Account Number" ? "tracking-[1.5px] font-heading" : ""
          }`}
        >
          {value}
        </span>
        <button
          onClick={handleCopy}
          title={`Copy ${label}`}
          className={`bg-transparent border-none cursor-pointer p-[3px] flex items-center transition-colors duration-200 shrink-0 ${
            copied ? "text-primary" : "text-text-faint hover:text-primary-dark"
          }`}
        >
          {copied ? <CheckIcon /> : <CopyIcon size={14} />}
        </button>
      </div>
    </div>
  );
}

const STEPS = [
  {
    number: "01",
    label: "Make Bank Transfer",
    // sublabel: "Use the account details below",
    sublabel: "Get the account details from the email below",
  },
  {
    number: "02",
    label: "Capture Your Receipt",
    sublabel: "Screenshot or download the payment confirmation",
  },
  {
    number: "03",
    label: "Email Proof of Payment",
    sublabel: "Send to confirm your registration",
  },
];

const FILE_FORMATS = ["PNG", "JPG", "PDF"];

export function RegistrationModal({ onCloseModal }: { onCloseModal?: () => void }) {
  return (
    <div className="font-sans">
      {/* Modal header */}
      <div className="mb-8">
        <p className="text-[11px] font-bold text-primary tracking-[1.2px] uppercase mb-2">
          How to Register
        </p>
        <h2 className="text-[1.5rem] font-extrabold text-text-main tracking-[-0.5px] font-heading mb-2">
          Registration Method
        </h2>
        <p className="text-[0.9rem] text-text-muted leading-[1.7]">
          Follow these three simple steps to complete your conference registration via bank transfer.
        </p>
      </div>

      {/* 3-step timeline */}
      <div className="relative mb-8">
        {/* Connector line */}
        <div className="absolute top-5 left-[calc(16.66%)] w-[calc(66.66%)] h-[2px] bg-primary-faint max-[640px]:hidden" />

        <div className="grid grid-cols-3 gap-4 max-[640px]:grid-cols-1 max-[640px]:gap-6">
          {STEPS.map((step, i) => (
            <div key={step.number} className="flex flex-col items-center text-center relative z-10">
              <div
                className={`w-10 h-10 rounded-full border-2 flex items-center justify-center mb-3 shrink-0 ${
                  i === 2
                    ? "bg-primary-dark border-primary shadow-[0_4px_12px_rgba(21,87,36,0.2)]"
                    : "bg-primary-light border-primary-border"
                }`}
              >
                <span
                  className={`text-xs font-extrabold font-heading ${
                    i === 2 ? "text-white" : "text-primary-dark"
                  }`}
                >
                  {step.number}
                </span>
              </div>
              <h3 className="text-sm font-bold text-text-main mb-1 font-heading">
                {step.label}
              </h3>
              <p className="text-xs text-text-faint leading-relaxed">
                {step.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bank details card */}
      {/* <div className="bg-white border border-border-default rounded-xl p-6 mb-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
        <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-border-light">
          <div className="w-9 h-9 bg-primary-light border border-primary-faint rounded-lg flex items-center justify-center shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#155724" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="5" width="20" height="14" rx="2" />
              <line x1="2" y1="10" x2="22" y2="10" />
            </svg>
          </div>
          <div>
            <p className="text-[11px] text-text-faint font-semibold tracking-[0.5px] uppercase">
              Bank Transfer Details
            </p>
            <p className="text-[11px] text-primary font-semibold">
              Click any field to copy
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <CopyField label="Account Name" value={BANK_DETAILS.accountName} />
          <CopyField label="Bank" value={BANK_DETAILS.bank} />
          <CopyField label="Account Number" value={BANK_DETAILS.accountNumber} />
        </div>
      </div> */}

      {/* Receipt instructions */}
      {/* <div className="bg-bg-alt border border-border-default rounded-xl p-5 mb-6">
        <p className="text-[10px] font-bold text-text-faint tracking-[1px] uppercase mb-3">
          After Payment
        </p>
        <div className="flex items-start gap-3 mb-3">
          <div className="w-8 h-8 rounded-lg bg-white border border-border-default flex items-center justify-center shrink-0">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#155724" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-text-body mb-1">Capture your receipt</p>
            <p className="text-xs text-text-muted leading-relaxed">
              Screenshot or save as PNG, JPG, or PDF
            </p>
            <div className="flex gap-1.5 mt-2">
              {FILE_FORMATS.map((fmt) => (
                <span
                  key={fmt}
                  className="bg-primary-light border border-primary-faint text-primary-dark text-[10px] font-bold px-2 py-0.5 rounded tracking-[0.5px]"
                >
                  {fmt}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div> */}

      {/* Email CTA */}
      <a
        href="mailto:editorial@cceccconferences.com?subject=CCECC%202027%20%E2%80%93%20Payment%20Receipt"
        className="flex items-center justify-center gap-2 bg-primary text-white px-5 py-3.5 rounded-lg no-underline text-sm font-bold shadow-[0_4px_16px_rgba(46,204,113,0.28)] transition-all duration-200 hover:bg-primary-hover hover:shadow-[0_6px_22px_rgba(46,204,113,0.38)] w-full"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
        {/* Email Proof of Payment */}
        Email for Account Details
      </a>

      <p className="text-xs text-text-faint text-center mt-4 leading-relaxed">
        Send your receipt to{" "}
        <span className="text-primary-dark font-semibold">editorial@cceccconferences.com</span>
      </p>
    </div>
  );
}