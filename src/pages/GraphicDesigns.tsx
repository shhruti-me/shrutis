import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import work01 from "@/assets/gd/01-compsoc-chair.png";
import work02 from "@/assets/gd/02-design-department.png";
import work05 from "@/assets/gd/05-shruti-design-lead.png";
import work06 from "@/assets/gd/06-hackhub.png";
import work07 from "@/assets/gd/07-pcb-workshop.png";
import work08 from "@/assets/gd/08-game-jam.png";
import work09 from "@/assets/gd/09-call-for-proposal.png";
import work10 from "@/assets/gd/10-recruitments.png";
import work11 from "@/assets/gd/11-bitwars.png";
import work12 from "@/assets/gd/12-cert-appreciation.png";
import work13 from "@/assets/gd/13-cert-paradox.png";

type Category = "All Projects" | "Social Media Posts" | "Posters" | "Certificates" | "Tshirt Design";

interface Work {
  id: number;
  title: string;
  description: string;
  category: Exclude<Category, "All Projects">;
  image: string;
}

const works: Work[] = [
  {
    id: 1,
    title: "club tshirt",
    description: "a tee for the chair. mostly noise, a little message.",
    category: "Tshirt Design",
    image: work01,
  },
  {
    id: 2,
    title: "club member reveal post",
    description: "introducing the design crew. nothing too loud.",
    category: "Social Media Posts",
    image: work02,
  },
  {
    id: 5,
    title: "club board member reveal",
    description: "board reveal post. felt right to keep it a little warped.",
    category: "Social Media Posts",
    image: work05,
  },
  {
    id: 6,
    title: "hackhub'25 poster",
    description: "poster for hackhub '25. mostly typography, some weather.",
    category: "Posters",
    image: work06,
  },
  {
    id: 7,
    title: "pcb workshop poster",
    description: "for a hands-on pcb session. terminal energy.",
    category: "Posters",
    image: work07,
  },
  {
    id: 8,
    title: "gamejam poster",
    description: "gameboy x-ray. made for the jam.",
    category: "Posters",
    image: work08,
  },
  {
    id: 9,
    title: "cfp poster",
    description: "call for proposals, dressed up as a js file.",
    category: "Posters",
    image: work09,
  },
  {
    id: 10,
    title: "recruitment poster",
    description: "teaser for recruitments. shiny disc, vague promise.",
    category: "Posters",
    image: work10,
  },
  {
    id: 11,
    title: "bitwars 2.0 post",
    description: "competitive coding banner. chrome and wires.",
    category: "Posters",
    image: work11,
  },
  {
    id: 12,
    title: "hackhub'25 certificate",
    description: "certificate for the organisers. dark, a bit ceremonial.",
    category: "Certificates",
    image: work12,
  },
  {
    id: 13,
    title: "paradox certificate",
    description: "pixel certificate for a 24h cryptic hunt.",
    category: "Certificates",
    image: work13,
  },
];

const categories: Category[] = ["All Projects", "Social Media Posts", "Posters", "Certificates", "Tshirt Design"];

// Palette inspired by fromanother.love — cream paper + warm ink
const BG = "hsl(50 60% 93%)";
const FG = "hsl(20 14% 12%)";
const ACCENT = "hsl(20 14% 12%)";
const MUTED = "hsl(30 10% 38%)";

const GraphicDesigns = () => {
  const [active, setActive] = useState<Category>("All Projects");
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [revealedId, setRevealedId] = useState<number | null>(null);
  const timerRef = useRef<number | null>(null);

  const filtered = useMemo(
    () => (active === "All Projects" ? works : works.filter((w) => w.category === active)),
    [active]
  );

  const counts = useMemo(() => {
    const c: Record<string, number> = { "All Projects": works.length };
    categories.slice(1).forEach((cat) => {
      c[cat] = works.filter((w) => w.category === cat).length;
    });
    return c;
  }, []);

  const handleEnter = (id: number) => {
    setHoveredId(id);
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => setRevealedId(id), 2000);
  };

  const handleLeave = () => {
    setHoveredId(null);
    setRevealedId(null);
    if (timerRef.current) window.clearTimeout(timerRef.current);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, []);

  const hoveredWork = works.find((w) => w.id === hoveredId);
  const revealedWork = works.find((w) => w.id === revealedId);

  const serif = "'Cormorant Garamond', 'PP Editorial New', Georgia, serif";
  const mono = "'JetBrains Mono', 'IBM Plex Mono', ui-monospace, monospace";

  return (
    <div className="min-h-screen" style={{ background: BG, color: FG, fontFamily: mono }}>
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <filter id="fluid-distort">
            <feTurbulence type="fractalNoise" baseFrequency="0.012 0.018" numOctaves="2" seed="4">
              <animate attributeName="baseFrequency" dur="6s" values="0.012 0.018;0.02 0.03;0.012 0.018" repeatCount="indefinite" />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" scale="22" />
          </filter>
        </defs>
      </svg>

      <header
        className="fixed top-0 inset-x-0 z-40 px-6 md:px-10 py-5 flex items-center justify-between"
        style={{ background: "hsl(50 60% 93% / 0.85)", backdropFilter: "blur(8px)" }}
      >
        <Link to="/" className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase hover:opacity-60 transition-opacity">
          <ArrowLeft className="w-4 h-4" />
          Menu
        </Link>
        <h1 className="text-2xl md:text-3xl tracking-tight" style={{ fontFamily: serif, fontStyle: "italic" }}>
          graphic<span>designs</span>
        </h1>
        <a href="mailto:shrutiselvakkumar06@gmail.com" className="text-xs tracking-[0.2em] uppercase hover:opacity-60 transition-opacity">
          Let's chat →
        </a>
      </header>

      {/* Centered hover title overlay */}
      <div
        className="fixed inset-0 z-30 flex items-center justify-center pointer-events-none transition-opacity duration-300 px-6"
        style={{ opacity: hoveredWork ? 1 : 0 }}
      >
        <span
          className="text-center uppercase tracking-[0.05em]"
          style={{
            fontFamily: mono,
            fontWeight: 500,
            fontSize: "clamp(1.5rem, 5vw, 4rem)",
            lineHeight: 1.05,
            color: FG,
            textShadow: "0 1px 0 hsl(50 60% 93% / 0.6)",
            maxWidth: "90vw",
          }}
        >
          {hoveredWork?.title}
        </span>
      </div>

      <div className="pt-24 md:pt-28 pb-20 px-6 md:px-10 grid grid-cols-12 gap-6 md:gap-10 max-w-[1600px] mx-auto">
        <aside className="col-span-12 md:col-span-2 md:sticky md:top-28 md:self-start flex justify-center md:block">
          <ul className="space-y-2 inline-block text-center md:block md:text-left" style={{ fontFamily: serif, fontStyle: "italic" }}>
            {categories.map((cat) => {
              const isActive = cat === active;
              return (
                <li key={cat}>
                  <button
                    onClick={() => setActive(cat)}
                    className="flex items-baseline justify-center md:justify-between gap-3 md:gap-0 w-full transition-all"
                    style={{ color: isActive ? ACCENT : MUTED }}
                  >
                    <span className="text-base">{cat}</span>
                    <span className="text-[10px] tabular-nums" style={{ fontFamily: mono, fontStyle: "normal" }}>
                      {String(counts[cat] ?? 0).padStart(2, "0")}
                    </span>
                  </button>
                  {isActive && <div className="h-px mt-1 w-12 mx-auto md:mx-0" style={{ background: ACCENT }} />}
                </li>
              );
            })}
          </ul>
        </aside>

        <main className="col-span-12 md:col-span-7">
          <div className="columns-2 lg:columns-2 gap-3 sm:gap-4 md:gap-6 [column-fill:_balance]">
            {filtered.map((work) => {
              const isHovered = hoveredId === work.id;
              return (
                <div
                  key={work.id}
                  className="mb-4 md:mb-6 break-inside-avoid relative overflow-hidden cursor-pointer"
                  onMouseEnter={() => handleEnter(work.id)}
                  onMouseLeave={handleLeave}
                >
                  <img
                    src={work.image}
                    alt={work.title}
                    loading="lazy"
                    className="w-full h-auto block transition-transform duration-700"
                    style={{
                      filter: isHovered ? "url(#fluid-distort)" : "none",
                      transform: isHovered ? "scale(1.03)" : "scale(1)",
                    }}
                  />
                </div>
              );
            })}
          </div>
        </main>

        <aside className="hidden md:block col-span-3 md:sticky md:top-28 md:self-start">
          <div className="transition-opacity duration-500" style={{ opacity: revealedWork ? 1 : 0 }}>
            {revealedWork && (
              <>
                <p className="text-[10px] tracking-[0.25em] uppercase mb-3" style={{ color: MUTED }}>
                  {revealedWork.category}
                </p>
                <h2 className="text-2xl mb-4 leading-tight" style={{ fontFamily: serif, fontStyle: "italic" }}>
                  {revealedWork.title}
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: MUTED, fontFamily: mono }}>
                  {revealedWork.description}
                </p>
              </>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default GraphicDesigns;
