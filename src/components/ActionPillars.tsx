import { useState, useEffect, useCallback, useRef } from "react";

const SLIDES = [
  {
    id: 1,
    name: "Clean Energy Technologies and Innovation",
    description:
      "Exploring breakthrough technologies in solar, wind, hydro, and storage that can accelerate clean energy deployment across Sub-Saharan Africa.",
    image: "../slide1.jpg",
  },
  {
    id: 2,
    name: "Climate Change Mitigation and Adaptation Strategies",
    description:
      "Evidence-based approaches to reducing emissions and building resilient communities in the face of accelerating climate impacts.",
    image: "../slide2.jpg",
  },
  {
    id: 3,
    name: "Energy Policy, Governance, and Regulation",
    description:
      "Examining the regulatory frameworks, governance structures, and policy instruments that enable or hinder clean energy transitions.",
    image: "../slide3.jpg",
  },
  {
    id: 4,
    name: "Sustainable Power Systems and Energy Efficiency",
    description:
      "Optimizing grid infrastructure, demand-side management, and energy efficiency measures to maximize impact of available resources.",
    image: "../slide4.jpg",
  },
  {
    id: 5,
    name: "Environmental Impacts, Health, and Society",
    description:
      "Understanding how energy choices affect air quality, public health, ecosystems, and social equity across urban and rural communities.",
    image: "../slide5.jpg",
  },
  {
    id: 6,
    name: "Financing, Investment, and Entrepreneurship",
    description:
      "Mobilizing climate finance, blended capital, green bonds, and entrepreneurial ecosystems to fund clean energy at scale.",
    image: "../slide6.jpg",
  },
  {
    id: 7,
    name: "Regional and Local Perspectives on Climate Action",
    description:
      "Centering African voices and locally-grounded solutions — ensuring that policy and practice reflect the lived realities of those most affected.",
    image: "../slide7.jpg",
  },
];

const AUTO_SLIDE_INTERVAL = 5000;
const TRANSITION_DURATION = 500;

export function ActionPillars() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchDelta, setTouchDelta] = useState(0);
  const timerRef = useRef<number | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const total = SLIDES.length;

  const goTo = useCallback(
    (index: number) => {
      if (index < 0) {
        setIsTransitioning(false);
        setCurrent(total);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setIsTransitioning(true);
            setCurrent(total - 1);
          });
        });
      } else if (index >= total) {
        setIsTransitioning(false);
        setCurrent(-1);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setIsTransitioning(true);
            setCurrent(0);
          });
        });
      } else {
        setIsTransitioning(true);
        setCurrent(index);
      }
    },
    [total]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    timerRef.current = setInterval(next, AUTO_SLIDE_INTERVAL);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [next]);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(next, AUTO_SLIDE_INTERVAL);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
    setTouchDelta(0);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const delta = e.touches[0].clientX - touchStart;
    setTouchDelta(delta);
  };

  const handleTouchEnd = () => {
    if (touchStart === null) return;
    const threshold = 60;
    if (touchDelta > threshold) {
      prev();
    } else if (touchDelta < -threshold) {
      next();
    }
    setTouchStart(null);
    setTouchDelta(0);
    resetTimer();
  };

  const handleMouseEnter = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };
  const handleMouseLeave = () => {
    resetTimer();
  };

  const visualIndex = current < 0 ? total - 1 : current >= total ? 0 : current;

  const extendedSlides = [SLIDES[total - 1], ...SLIDES, SLIDES[0]];

  return (
    <section id="pillars" className="bg-white py-24 font-sans overflow-hidden">
      <div className="px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-[11px] font-bold text-primary tracking-widest uppercase mb-2.5">
            Conference Sub-Themes
          </p>
          <h2 className="text-[clamp(1.7rem,3vw,2.5rem)] font-extrabold text-text-main tracking-[-0.5px] mb-3.5 font-heading">
            7 Action Pillars
          </h2>
          <p className="text-[0.93rem] text-text-muted max-w-125 mx-auto leading-[1.7]">
            The conference is structured around seven interconnected sub-themes,
            each addressing a critical dimension of clean energy and climate
            action in Sub-Saharan Africa.
          </p>
        </div>

        {/* Slider */}
        <div
          className="relative rounded-2xl overflow-hidden bg-white shadow-[0_8px_40px_rgba(0,0,0,0.06)]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Track */}
          <div
            ref={trackRef}
            className="flex"
            style={{
              transform: `translateX(calc(-${(current + 1) * 100}% + ${touchDelta}px))`,
              transition: isTransitioning && touchDelta === 0 ? `transform ${TRANSITION_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1)` : "none",
            }}
          >
            {extendedSlides.map((slide, i) => (
              <div
                key={`${slide.id}-${i}`}
                className="w-full shrink-0 flex flex-col min-[800px]:flex-row"
              >
                {/* Image side */}
                <div className="relative w-full min-[800px]:w-[55%] aspect-4/3 min-[800px]:aspect-auto min-[800px]:min-h-105 bg-border-light overflow-hidden">
                  <img
                    src={slide.image}
                    alt={slide.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading={i === 1 || i === 2 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent min-[800px]:bg-linear-to-r" />
                  
                  <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm border border-primary-faint rounded-lg px-3 py-1.5">
                    <span className="text-xs font-bold text-primary-dark font-heading">
                      Pillar {slide.id < 10 ? `0${slide.id}` : slide.id}
                    </span>
                  </div>
                </div>

                {/* Text side */}
                <div className="w-full min-[800px]:w-[45%] p-8 min-[800px]:p-10 flex flex-col justify-center">
                  <div className="w-13 h-13 bg-primary-light border border-primary-faint rounded-xl flex items-center justify-center mb-5 shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#155724" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </svg>
                  </div>

                  <h3 className="text-[1.15rem] min-[800px]:text-[1.35rem] font-bold text-text-main leading-[1.3] mb-3 font-heading">
                    {slide.name}
                  </h3>

                  <p className="text-[0.9rem] text-text-muted leading-[1.75] mb-6">
                    {slide.description}
                  </p>

                  <div className="flex items-center gap-2 text-xs font-semibold text-primary tracking-[0.5px] uppercase">
                    <span className="w-8 h-0.5 bg-primary rounded-full" />
                    Sub-Theme {slide.id} of {total}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={() => { prev(); resetTimer(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm border border-border-default flex items-center justify-center text-text-body shadow-[0_2px_12px_rgba(0,0,0,0.08)] transition-all duration-200 hover:bg-primary hover:text-white hover:border-primary hover:shadow-[0_4px_16px_rgba(46,204,113,0.3)] z-10 max-[600px]:hidden"
            aria-label="Previous slide"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            onClick={() => { next(); resetTimer(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm border border-border-default flex items-center justify-center text-text-body shadow-[0_2px_12px_rgba(0,0,0,0.08)] transition-all duration-200 hover:bg-primary hover:text-white hover:border-primary hover:shadow-[0_4px_16px_rgba(46,204,113,0.3)] z-10 max-[600px]:hidden"
            aria-label="Next slide"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => { goTo(i); resetTimer(); }}
                className={`transition-all duration-300 rounded-full ${
                  i === visualIndex
                    ? "w-8 h-2 bg-primary"
                    : "w-2 h-2 bg-white/70 border border-white/40 hover:bg-white"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-0.75 bg-border-light">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{
                width: `${((visualIndex + 1) / total) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}