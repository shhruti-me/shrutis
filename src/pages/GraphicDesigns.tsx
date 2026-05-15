import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import work01 from "@/assets/gd/01-compsoc-chair.png";
import work02 from "@/assets/gd/02-design-department.png";
import work03 from "@/assets/gd/03-compsoc-logo.png";
import work04 from "@/assets/gd/04-board-2025.png";
import work05 from "@/assets/gd/05-shruti-design-lead.png";
import work06 from "@/assets/gd/06-hackhub.png";
import work07 from "@/assets/gd/07-pcb-workshop.png";
import work08 from "@/assets/gd/08-game-jam.png";
import work09 from "@/assets/gd/09-call-for-proposal.png";
import work10 from "@/assets/gd/10-recruitments.png";

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
    title: "CompSoc Chairperson",
    description: "A bold cyberpunk-inspired chairperson reveal poster for IEEE CompSoc, blending fragmented anime portraiture with barcode and checker motifs to capture the spirit of build-what-you-use.",
    category: "Posters",
    image: work01,
  },
  {
    id: 2,
    title: "Design Department",
    description: "Halftone hands meeting in a digital spark — an introduction post for the Design Department, channelling retro print textures and a vivid emerald palette.",
    category: "Social Media Posts",
    image: work02,
  },
  {
    id: 3,
    title: "CompSoc Identity",
    description: "Brand identity treatment for IEEE CompSoc, layering the society monogram over a rhythmic typographic field that reinforces presence and recall.",
    category: "Social Media Posts",
    image: work03,
  },
  {
    id: 4,
    title: "Board 2025",
    description: "An announcement poster for the 2025 board, using warped grids and stacked typography to introduce a new chapter with kinetic energy.",
    category: "Social Media Posts",
    image: work04,
  },
  {
    id: 5,
    title: "Shruti — Design Lead",
    description: "A self-introduction post as Design Lead, mixing repeating display type, hand-typed callouts, and a soft glow cutout for an editorial-meets-personal feel.",
    category: "Social Media Posts",
    image: work05,
  },
  {
    id: 6,
    title: "HackHub 2025",
    description: "Flagship hackathon poster — sweeping radial textures, ambient keywords, and angular logotype designed to feel like the cover of a tech publication.",
    category: "Posters",
    image: work06,
  },
  {
    id: 7,
    title: "PCB Workshop",
    description: "A terminal-styled workshop poster grounded in circuitry imagery and dot-matrix typography, communicating the hands-on, hardware nature of the session.",
    category: "Posters",
    image: work07,
  },
  {
    id: 8,
    title: "Game Jam",
    description: "X-ray Game Boy artwork paired with vertical pixel typography for the Game Jam workshop and event — playful, nostalgic, and unmistakably gaming.",
    category: "Posters",
    image: work08,
  },
  {
    id: 9,
    title: "Call for Proposal",
    description: "An IDE-inspired poster styled as a JavaScript file, turning event details into syntax-highlighted code and tabular comments for a developer audience.",
    category: "Posters",
    image: work09,
  },
  {
    id: 10,
    title: "Recruitments Opening Soon",
    description: "A teaser poster built around iridescent CD-surface textures, inviting the campus into projects, workshops, and a community that ships ideas.",
    category: "Posters",
    image: work10,
  },
];

const categories: Category[] = ["All Projects", "Social Media Posts", "Posters", "Certificates", "Tshirt Design"];

// Theme tokens (scoped to this page)
const BG = "hsl(160 50% 6%)";
const FG = "hsl(150 60% 88%)";
const ACCENT = "hsl(158 70% 45%)";
const MUTED = "hsl(150 15% 55%)";

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

  const revealedWork = works.find((w) => w.id === revealedId);

  return (
    <div className="min-h-screen" style={{ background: BG, color: FG }}>
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

      <header className="fixed top-0 inset-x-0 z-40 px-6 md:px-10 py-5 flex items-center justify-between" style={{ background: `${BG.slice(0, -1)} / 0.85)`.replace("hsl", "hsl"), backdropFilter: "blur(8px)" }}>
        <Link to="/" className="flex items-center gap-2 text-sm tracking-widest uppercase hover:opacity-70 transition-opacity">
          <ArrowLeft className="w-4 h-4" />
          Menu
        </Link>
        <h1 className="text-xl md:text-2xl tracking-tight" style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}>
          graphic<span style={{ color: ACCENT }}>designs</span>
        </h1>
        <a href="mailto:shrutiselvakkumar06@gmail.com" className="text-sm tracking-widest uppercase hover:opacity-70 transition-opacity">
          Let's chat →
        </a>
      </header>

      <div className="pt-24 md:pt-28 pb-20 px-6 md:px-10 grid grid-cols-12 gap-6 md:gap-10 max-w-[1600px] mx-auto">
        <aside className="col-span-12 md:col-span-2 md:sticky md:top-28 md:self-start">
          <ul className="space-y-2 text-sm" style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}>
            {categories.map((cat) => {
              const isActive = cat === active;
              return (
                <li key={cat}>
                  <button
                    onClick={() => setActive(cat)}
                    className="flex items-baseline justify-between w-full text-left transition-all"
                    style={{ color: isActive ? ACCENT : MUTED }}
                  >
                    <span className="text-base">{cat}</span>
                    <span className="text-xs tabular-nums ml-3">{String(counts[cat] ?? 0).padStart(2, "0")}</span>
                  </button>
                  {isActive && <div className="h-px mt-1 w-12" style={{ background: ACCENT }} />}
                </li>
              );
            })}
          </ul>
        </aside>

        <main className="col-span-12 md:col-span-7">
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {filtered.map((work, idx) => {
              const isHovered = hoveredId === work.id;
              const offset = idx % 2 === 1 ? "md:mt-12" : "";
              return (
                <div
                  key={work.id}
                  className={`relative aspect-square overflow-hidden cursor-pointer ${offset}`}
                  onMouseEnter={() => handleEnter(work.id)}
                  onMouseLeave={handleLeave}
                >
                  <img
                    src={work.image}
                    alt={work.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700"
                    style={{
                      filter: isHovered ? "url(#fluid-distort)" : "none",
                      transform: isHovered ? "scale(1.04)" : "scale(1)",
                    }}
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300"
                    style={{ opacity: isHovered ? 1 : 0, background: "hsl(160 50% 4% / 0.35)" }}
                  >
                    <span
                      className="text-2xl md:text-4xl text-center px-4"
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: FG }}
                    >
                      {work.title}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </main>

        <aside className="hidden md:block col-span-3 md:sticky md:top-28 md:self-start">
          <div className="transition-opacity duration-500" style={{ opacity: revealedWork ? 1 : 0 }}>
            {revealedWork && (
              <>
                <p className="text-xs tracking-[0.25em] uppercase mb-3" style={{ color: ACCENT }}>
                  {revealedWork.category}
                </p>
                <h2 className="text-2xl mb-4 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {revealedWork.title}
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: "hsl(150 20% 78%)" }}>
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
