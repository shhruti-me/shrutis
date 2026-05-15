import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

type Category = "All Projects" | "Social Media Posts" | "Posters" | "Certificates" | "Tshirt Design";

interface Work {
  id: number;
  title: string;
  description: string;
  category: Exclude<Category, "All Projects">;
  image: string;
}

// 13 placeholder works — replace images later
const works: Work[] = [
  { id: 1, title: "Work 01", description: "Placeholder description for this design piece.", category: "Social Media Posts", image: "https://picsum.photos/seed/gd1/800/800" },
  { id: 2, title: "Work 02", description: "Placeholder description for this design piece.", category: "Posters", image: "https://picsum.photos/seed/gd2/800/800" },
  { id: 3, title: "Work 03", description: "Placeholder description for this design piece.", category: "Certificates", image: "https://picsum.photos/seed/gd3/800/800" },
  { id: 4, title: "Work 04", description: "Placeholder description for this design piece.", category: "Tshirt Design", image: "https://picsum.photos/seed/gd4/800/800" },
  { id: 5, title: "Work 05", description: "Placeholder description for this design piece.", category: "Social Media Posts", image: "https://picsum.photos/seed/gd5/800/800" },
  { id: 6, title: "Work 06", description: "Placeholder description for this design piece.", category: "Posters", image: "https://picsum.photos/seed/gd6/800/800" },
  { id: 7, title: "Work 07", description: "Placeholder description for this design piece.", category: "Social Media Posts", image: "https://picsum.photos/seed/gd7/800/800" },
  { id: 8, title: "Work 08", description: "Placeholder description for this design piece.", category: "Certificates", image: "https://picsum.photos/seed/gd8/800/800" },
  { id: 9, title: "Work 09", description: "Placeholder description for this design piece.", category: "Posters", image: "https://picsum.photos/seed/gd9/800/800" },
  { id: 10, title: "Work 10", description: "Placeholder description for this design piece.", category: "Tshirt Design", image: "https://picsum.photos/seed/gd10/800/800" },
  { id: 11, title: "Work 11", description: "Placeholder description for this design piece.", category: "Social Media Posts", image: "https://picsum.photos/seed/gd11/800/800" },
  { id: 12, title: "Work 12", description: "Placeholder description for this design piece.", category: "Posters", image: "https://picsum.photos/seed/gd12/800/800" },
  { id: 13, title: "Work 13", description: "Placeholder description for this design piece.", category: "Certificates", image: "https://picsum.photos/seed/gd13/800/800" },
];

const categories: Category[] = ["All Projects", "Social Media Posts", "Posters", "Certificates", "Tshirt Design"];

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
    <div className="min-h-screen text-[hsl(40_30%_92%)]" style={{ background: "hsl(225 60% 8%)" }}>
      {/* SVG filter for fluid distortion on hover */}
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

      {/* Top bar */}
      <header className="fixed top-0 inset-x-0 z-40 px-6 md:px-10 py-5 flex items-center justify-between" style={{ background: "hsl(225 60% 8% / 0.85)", backdropFilter: "blur(8px)" }}>
        <Link to="/" className="flex items-center gap-2 text-sm tracking-widest uppercase hover:opacity-70 transition-opacity">
          <ArrowLeft className="w-4 h-4" />
          Menu
        </Link>
        <h1 className="text-xl md:text-2xl tracking-tight" style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}>
          graphic<span className="opacity-70">designs</span>
        </h1>
        <a href="mailto:shrutiselvakkumar06@gmail.com" className="text-sm tracking-widest uppercase hover:opacity-70 transition-opacity">
          Let's chat →
        </a>
      </header>

      <div className="pt-24 md:pt-28 pb-20 px-6 md:px-10 grid grid-cols-12 gap-6 md:gap-10 max-w-[1600px] mx-auto">
        {/* Left: category list */}
        <aside className="col-span-12 md:col-span-2 md:sticky md:top-28 md:self-start">
          <ul className="space-y-2 text-sm" style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}>
            {categories.map((cat) => {
              const isActive = cat === active;
              return (
                <li key={cat}>
                  <button
                    onClick={() => setActive(cat)}
                    className={`flex items-baseline justify-between w-full text-left transition-all ${isActive ? "text-[hsl(40_30%_92%)]" : "text-[hsl(40_15%_55%)] hover:text-[hsl(40_30%_85%)]"}`}
                  >
                    <span className="text-base">{cat}</span>
                    <span className="text-xs tabular-nums ml-3">{String(counts[cat]).padStart(2, "0")}</span>
                  </button>
                  {isActive && <div className="h-px bg-[hsl(40_30%_92%)] mt-1 w-12" />}
                </li>
              );
            })}
          </ul>
        </aside>

        {/* Center: gallery */}
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
                  {/* Title overlay shown on hover */}
                  <div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300"
                    style={{ opacity: isHovered ? 1 : 0, background: "hsl(225 60% 8% / 0.25)" }}
                  >
                    <span
                      className="text-[hsl(40_40%_82%)] text-2xl md:text-4xl text-center px-4"
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", textShadow: "0 2px 24px hsl(225 60% 4% / 0.6)" }}
                    >
                      {work.title}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </main>

        {/* Right: revealed description after 2s hover */}
        <aside className="hidden md:block col-span-3 md:sticky md:top-28 md:self-start">
          <div
            className="transition-opacity duration-500"
            style={{ opacity: revealedWork ? 1 : 0 }}
          >
            {revealedWork && (
              <>
                <p className="text-xs tracking-[0.25em] uppercase text-[hsl(40_15%_55%)] mb-3">
                  {revealedWork.category}
                </p>
                <h2 className="text-2xl mb-4 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {revealedWork.title}
                </h2>
                <p className="text-sm leading-relaxed text-[hsl(40_20%_75%)]">
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
