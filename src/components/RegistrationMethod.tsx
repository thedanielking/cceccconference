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
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
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
      <div className="flex items-center justify-between bg-[#f9fafb] border border-border-default rounded-md px-3 py-2 gap-2.5">
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
    sublabel: "Use the account details below",
    content: "bank",
  },
  {
    number: "02",
    label: "Capture Your Receipt",
    sublabel: "Screenshot or download the payment confirmation",
    content: "screenshot",
  },
  {
    number: "03",
    label: "Email Proof of Payment",
    sublabel: "Send to confirm your registration",
    content: "email",
  },
];

const RECEIPT_LINES = [80, 64, 64, 48, 48, 32];
const FILE_FORMATS = ["PNG", "JPG", "PDF"];

export function RegistrationMethod() {
  return (
    <section className="bg-white py-24 font-sans border-t border-border-light">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[11px] font-bold text-primary tracking-[1.2px] uppercase mb-2.5">
            How to Register
          </p>
          <h2 className="text-[clamp(1.7rem,3vw,2.5rem)] font-extrabold text-text-main tracking-[-0.5px] mb-3.5 font-heading">
            Registration Method
          </h2>
          <p className="text-[0.93rem] text-text-muted max-w-[460px] mx-auto leading-[1.7]">
            Follow these three simple steps to complete your conference registration via bank transfer.
          </p>
        </div>

        {/* 3-step layout */}
        <div className="relative grid grid-cols-3 gap-0 items-start max-[768px]:grid-cols-1 max-[768px]:gap-10">
          {/* Connector lines */}
          <div className="absolute top-7 left-[calc(33.33%/2)] w-[calc(100%-33.33%)] h-0.5 max-[768px]:hidden"
            style={{
              background: "repeating-linear-gradient(90deg, #d1fae5 0px, #d1fae5 8px, transparent 8px, transparent 16px)",
            }}
          />

          {STEPS.map((step, i) => (
            <div
              key={step.number}
              className="flex flex-col items-center px-6 relative z-10"
            >
              {/* Step bubble */}
              <div
                className={`w-14 h-14 rounded-full border-2 flex items-center justify-center mb-5 shrink-0 ${
                  i === 2
                    ? "bg-primary-dark border-primary shadow-[0_4px_18px_rgba(21,87,36,0.2)]"
                    : "bg-primary-light border-primary-border shadow-[0_2px_8px_rgba(46,204,113,0.12)]"
                }`}
              >
                <span
                  className={`text-sm font-extrabold font-heading ${
                    i === 2 ? "text-white" : "text-primary-dark"
                  }`}
                >
                  {step.number}
                </span>
              </div>

              {/* Step label */}
              <h3 className="text-base font-bold text-text-main mb-1 text-center font-heading">
                {step.label}
              </h3>
              <p className="text-[12.5px] text-text-faint mb-6 text-center leading-relaxed">
                {step.sublabel}
              </p>

              {/* Step content card */}
              {step.content === "bank" && (
                <div className="w-full bg-white border border-border-default rounded-[14px] p-[22px] px-5 flex flex-col gap-3.5 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                  {/* Bank card header */}
                  <div className="flex items-center gap-2.5 pb-3.5 border-b border-border-light">
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

                  <CopyField label="Account Name" value={BANK_DETAILS.accountName} />
                  <CopyField label="Bank" value={BANK_DETAILS.bank} />
                  <CopyField label="Account Number" value={BANK_DETAILS.accountNumber} />
                </div>
              )}

              {step.content === "screenshot" && (
                <div className="w-full bg-white border-[1.5px] border-dashed border-primary-faint rounded-[14px] p-9 px-5 flex flex-col items-center gap-3.5 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
                  {/* Receipt mockup */}
                  <div className="w-[88px] h-[110px] bg-[#f9fafb] border border-border-default rounded-lg flex flex-col items-center justify-center gap-1.5 relative overflow-hidden">
                    {RECEIPT_LINES.map((w, idx) => (
                      <div
                        key={idx}
                        className="h-[5px] rounded-[3px]"
                        style={{
                          width: `${w}%`,
                          backgroundColor: idx === 0 ? "#d1fae5" : "#f3f4f6",
                        }}
                      />
                    ))}
                    {/* Camera overlay */}
                    <div className="absolute bottom-2 right-2 w-6 h-6 bg-primary-dark rounded-full flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                        <circle cx="12" cy="13" r="4" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-[12.5px] text-text-muted text-center leading-relaxed">
                    Take a screenshot or download your bank confirmation as a PDF or image file.
                  </p>
                  <div className="flex gap-1.5 flex-wrap justify-center">
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
              )}

              {step.content === "email" && (
                <div className="w-full bg-white border border-border-default rounded-[14px] p-[22px] px-5 flex flex-col gap-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                  {/* Faux email compose preview */}
                  <div className="bg-[#f9fafb] border border-border-light rounded-lg overflow-hidden">
                    {/* Toolbar */}
                    <div className="bg-border-light px-3 py-[7px] flex items-center gap-1.5 border-b border-border-default">
                      {["#ef4444", "#f59e0b", "#22c55e"].map((c) => (
                        <div key={c} className="w-2 h-2 rounded-full opacity-60" style={{ backgroundColor: c }} />
                      ))}
                      <span className="text-[10px] text-text-faint ml-1.5 font-semibold">
                        New Email
                      </span>
                    </div>
                    <div className="px-3 py-2.5">
                      <div className="text-[10.5px] text-text-faint mb-1">
                        To: <span className="text-primary-dark font-semibold">editorial@cceccconferences.com</span>
                      </div>
                      <div className="text-[10.5px] text-text-faint mb-2">
                        Subject: <span className="text-text-body font-medium">CCECC 2027 – Payment Receipt</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-primary-light border border-primary-faint rounded px-2 py-[5px]">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#2ECC71" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                        </svg>
                        <span className="text-[10px] text-primary-dark font-semibold">
                          payment_receipt.pdf
                        </span>
                      </div>
                    </div>
                  </div>

                  <a
                    href="mailto:editorial@cceccconferences.com?subject=CCECC%202027%20%E2%80%93%20Payment%20Receipt"
                    className="flex items-center justify-center gap-2 bg-primary text-white px-5 py-3 rounded-lg no-underline text-[13.5px] font-bold shadow-[0_4px_16px_rgba(46,204,113,0.28)] transition-all duration-200 hover:bg-primary-hover hover:shadow-[0_6px_22px_rgba(46,204,113,0.38)]"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    Email Proof of Payment
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}