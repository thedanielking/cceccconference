type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

const NAV_SECTIONS: Record<string, NavLink[]> = {
  "Quick Links": [
    { label: "Home", href: "#home" },
    { label: "About / Why Attend", href: "#about" },
    { label: "Submission Timeline", href: "#timeline" },
    { label: "Action Pillars", href: "#pillars" },
    { label: "Registration Fees", href: "#fees" },
  ],
  Submissions: [
    { label: "Go to Google Form", href: "https://forms.gle/p8GGUnL6QCdrogsi8", external: true },
    { label: "Round 1 Deadline: Oct 15, 2026", href: "#timeline" },
    { label: "Round 2 Deadline: Dec 02, 2026", href: "#timeline" },
    { label: "Acceptance Notifications", href: "#timeline" },
  ],
  Conference: [
    { label: "April 15–16, 2027", href: "#home" },
    { label: "Hybrid Mode (In-Person + Virtual)", href: "#home" },
    { label: "CCECC 2nd National Conference", href: "#home" },
  ],
};

const SOCIAL = [
  {
    name: "Twitter / X",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.736-8.85L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-text-main text-white font-sans">
      <div className="px-8 lg:px-20 pt-18">
        <div className="grid grid-cols-[1.8fr_1fr_1fr_1fr] gap-12 mb-15 max-[960px]:grid-cols-2 max-[560px]:grid-cols-1">
          {/* Brand column */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-4.5">
              <div className="w-9.5 h-9.5 bg-primary-dark rounded-[9px] flex items-center justify-center shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L3 7v10l9 5 9-5V7L12 2z" fill="#2ECC71" />
                  <path d="M12 2v20M3 7l9 5 9-5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <div className="text-base font-extrabold text-white font-heading leading-tight">
                  CCECC Conferences
                </div>
                <div className="text-[8.5px] text-primary font-semibold tracking-[0.6px] uppercase">
                  Cluster for Clean Energy & Climate Change
                </div>
              </div>
            </div>

            <p className="text-[0.85rem] text-white/50 leading-[1.75] mb-5 max-w-72.5">
              Organised by the <strong className="text-white/75">Cluster for Clean Energy and Climate Change (CCECC)</strong>. Connecting research to policy for a sustainable Sub-Saharan Africa.
            </p>

            {/* Contact block */}
            <div className="bg-primary/8 border border-primary/20 rounded-[10px] p-4 px-4.5 mb-5">
              <p className="text-[10px] font-bold text-primary tracking-[0.9px] uppercase mb-2.5">
                Conference Contact
              </p>
              <div className="text-sm font-semibold text-white/85 mb-1">
                Prof. Moses Emetere
              </div>
              <a
                href="mailto:editorial@cceccconferences.com"
                className="flex items-center gap-1.5 text-xs text-primary no-underline break-all hover:underline"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                editorial@cceccconferences.com
              </a>
            </div>

            {/* Social */}
            <div className="flex gap-2">
              {SOCIAL.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="w-8.5 h-8.5 rounded-md bg-white/7 flex items-center justify-center text-white/55 no-underline transition-all duration-200 hover:bg-primary hover:text-white"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(NAV_SECTIONS).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-[11px] font-bold text-primary tracking-[1px] uppercase mb-4.5">
                {section}
              </h4>
              <ul className="list-none p-0 m-0">
                {links.map((link) => (
                  <li key={link.label} className="mb-2">
                    <a
                      href={link.href}
                      target={link?.external ? "_blank" : undefined}
                      rel={link?.external ? "noopener noreferrer" : undefined}
                      className="text-white/50 no-underline text-[13px] leading-relaxed transition-colors duration-200 hover:text-primary flex items-center gap-1"
                    >
                      {link.label}
                      {link?.external && (
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/7 py-5 flex justify-between items-center flex-wrap gap-2.5">
          <p className="text-xs text-white/30">
            © 2026–2027 Cluster for Clean Energy and Climate Change (CCECC). All rights reserved.
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Use"].map((label) => (
              <a
                key={label}
                href="#"
                className="text-xs text-white/30 no-underline transition-colors duration-200 hover:text-white/60"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}