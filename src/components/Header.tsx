import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { MenuIcon } from "./ui/MenuIcon";
import { XIcon } from "./ui/XIcon";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Themes", href: "#theme" },
  { label: "Conference History", href: "#history" },
  { label: "Publications", href: "#publication" },
  { label: "Speakers", href: "/speakers" },
  { label: "Call for Paper", href: "/news" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);

    if (href.startsWith("#")) {
      if (location.pathname === "/") {
        // Already on homepage — smooth-scroll to the section
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        // On /speakers or /news — go home and carry the hash
        navigate("/" + href);
      }
    } else {
      // Regular page route
      navigate(href);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/96 shadow-[0_1px_0_rgba(0,0,0,0.08),0_4px_24px_rgba(0,0,0,0.05)]"
          : "bg-white/96 shadow-[0_1px_0_rgba(0,0,0,0.06)]"
      }`}
    >
      <div className="w-full mx-auto px-8 lg:px-20 h-17 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2.5 no-underline shrink-0">
          <div className="w-10 h-10 flex items-center justify-center">
            <img src="../logo.png" alt="logo" className="w-full" />
          </div>
          <div>
            <div className="text-base font-extrabold text-primary-dark tracking-tight font-heading leading-tight">
              CCECC
            </div>
            <div className="text-xs text-primary font-semibold tracking-wider uppercase">
              Conferences
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden min-[900px]:flex items-center gap-6">
          {NAV_LINKS.map((link) => {
            const isPageLink =
              link.href === "/" ||
              link.href === "/speakers" ||
              link.href === "/news";

            if (isPageLink) {
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className="no-underline text-text-body text-sm font-medium tracking-wide transition-colors duration-200 hover:text-primary-dark whitespace-nowrap"
                >
                  {link.label}
                </Link>
              );
            }

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="no-underline text-text-body text-sm font-medium tracking-wide transition-colors duration-200 hover:text-primary-dark whitespace-nowrap cursor-pointer"
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden min-[900px]:flex items-center gap-2.5">
          <a
            href="#contact"
            className="text-primary-dark ring ring-primary-dark px-4 py-2 rounded-sm no-underline text-sm font-semibold whitespace-nowrap transition-all duration-200 hover:bg-primary-light"
          >
            Contact
          </a>

          <a
            href="#fees"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#fees");
            }}
            className="bg-primary text-stone-100 px-4 py-2 rounded-sm text-sm font-semibold whitespace-nowrap transition-all duration-200 hover:bg-primary-hover shadow-[0_2px_10px_rgba(46,204,113,0.28)] hover:shadow-[0_4px_16px_rgba(46,204,113,0.4)] cursor-pointer"
          >
            Register Now
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="min-[900px]:hidden bg-transparent border-none cursor-pointer text-primary-dark p-1 shrink-0"
        >
          {mobileOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="min-[900px]:hidden bg-white border-t border-primary-faint px-8 py-4 pb-6">
          {NAV_LINKS.map((link) => {
            const isPageLink =
              link.href === "/" ||
              link.href === "/speakers" ||
              link.href === "/news";

            if (isPageLink) {
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 no-underline text-text-body text-base font-medium border-b border-border-light"
                >
                  {link.label}
                </Link>
              );
            }

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="block py-3 no-underline text-text-body text-base font-medium border-b border-border-light cursor-pointer"
              >
                {link.label}
              </a>
            );
          })}
          <div className="flex flex-col gap-2.5 mt-4">
            <a
              href="https://forms.gle/p8GGUnL6QCdrogsi8"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="block text-primary-dark ring ring-primary-dark py-2.5 px-5 rounded-sm no-underline text-sm font-semibold text-center"
            >
              Submit Abstract
            </a>

            <a
              href="#fees"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#fees");
              }}
              className="block bg-primary text-white py-2.5 px-5 rounded-sm text-sm font-semibold text-center w-full cursor-pointer"
            >
              Register Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}