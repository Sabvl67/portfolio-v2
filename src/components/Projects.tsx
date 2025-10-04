import React, { useEffect, useRef, useState } from "react";
import { projects } from "../data/project";

const getRootTheme = () => {
  if (typeof document === "undefined") {
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
  }

  const root = document.documentElement;
  if (root.classList.contains("dark")) return "dark";
  if (root.getAttribute("data-theme") === "dark" || root.dataset?.theme === "dark") return "dark";
  if (root.classList.contains("light")) return "light";

  if (typeof window !== "undefined" && window.matchMedia) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  return "light";
};

function Projects() {
  const [theme, setTheme] = useState(() => getRootTheme());
  const [sectionVisible, setSectionVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const id = "bento2-animations";
    if (document.getElementById(id)) return;
    const style = document.createElement("style");
    style.id = id;
    style.innerHTML = `
      @keyframes bento2-float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-6%); }
      }
      @keyframes bento2-pulse {
        0%, 100% { transform: scale(1); opacity: 0.85; }
        50% { transform: scale(1.08); opacity: 1; }
      }
      @keyframes bento2-tilt {
        0% { transform: rotate(-2deg); }
        50% { transform: rotate(2deg); }
        100% { transform: rotate(-2deg); }
      }
      @keyframes bento2-drift {
        0%, 100% { transform: translate3d(0, 0, 0); }
        50% { transform: translate3d(6%, -6%, 0); }
      }
      @keyframes bento2-glow {
        0%, 100% { opacity: 0.6; filter: drop-shadow(0 0 0 rgba(0,0,0,0.4)); }
        50% { opacity: 1; filter: drop-shadow(0 0 6px rgba(0,0,0,0.2)); }
      }
      @keyframes bento2-intro {
        0% { opacity: 0; transform: translate3d(0, 28px, 0); }
        100% { opacity: 1; transform: translate3d(0, 0, 0); }
      }
      @keyframes bento2-card {
        0% { opacity: 0; transform: translate3d(0, 18px, 0) scale(0.96); }
        100% { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
      }
    `;
    document.head.appendChild(style);
    return () => {
      style.remove();
    };
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;

    const syncTheme = () => {
      const next = getRootTheme();
      setTheme((prev) => (prev === next ? prev : next));
    };

    syncTheme();

    const observer = new MutationObserver(syncTheme);
    observer.observe(root, { attributes: true, attributeFilter: ["class", "data-theme"] });

    const handleStorage = (event: StorageEvent) => {
      if (event.key === "bento-theme") syncTheme();
    };

    const media =
      typeof window !== "undefined" && window.matchMedia
        ? window.matchMedia("(prefers-color-scheme: dark)")
        : null;

    const handleMediaChange = () => syncTheme();

    if (typeof window !== "undefined") {
      window.addEventListener("storage", handleStorage);
    }
    media?.addEventListener("change", handleMediaChange);

    return () => {
      observer.disconnect();
      if (typeof window !== "undefined") {
        window.removeEventListener("storage", handleStorage);
      }
      media?.removeEventListener("change", handleMediaChange);
    };
  }, []);

  useEffect(() => {
    if (!sectionRef.current || typeof window === "undefined") return;

    const node = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSectionVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const spans = [
    "md:col-span-4 md:row-span-2",
    "md:col-span-2 md:row-span-1",
    "md:col-span-2 md:row-span-1",
    "md:col-span-3 md:row-span-1",
    "md:col-span-3 md:row-span-1",
  ];

  return (
    <div className="relative min-h-screen w-full bg-transparent text-neutral-900 transition-colors duration-500 dark:text-white">

      <section id="projects"
        ref={sectionRef}
        className={`relative mx-auto max-w-6xl px-6 py-20 motion-safe:opacity-0 ${
          sectionVisible ? "motion-safe:animate-[bento2-intro_0.9s_ease-out_forwards]" : ""
        }`}
      >
        <header className="mb-10 flex flex-col gap-6 border-b border-neutral-900/10 pb-6 transition-colors duration-500 md:flex-row md:items-end md:justify-between dark:border-white/10">
          <div className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.35em] text-neutral-500 transition-colors duration-500 dark:text-white/40">
                Most recent
            </span>
            <h2 className="text-3xl font-black tracking-tight text-neutral-900 transition-colors duration-500 md:text-5xl dark:text-white">
              Projects
            </h2>
          </div>
          <div className="flex flex-col items-start gap-4 md:items-end">
            <p className="max-w-sm text-sm text-neutral-600 transition-colors duration-500 md:text-base dark:text-white/60">
              A selection of projects showcasing my skills and experience.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-3 md:auto-rows-[minmax(120px,auto)] md:grid-cols-6">
          {projects.map((project, index) => (
            <BentoItem
              key={project.title}
              span={spans[index]}
              feature={project}
              theme={theme}
              index={index}
              isVisible={sectionVisible}
            />
          ))}
        </div>

        <footer className="mt-16 border-t border-neutral-900/10 pt-6 text-xs uppercase tracking-[0.2em] text-neutral-500 transition-colors duration-500 dark:border-white/10 dark:text-white/40">
          Resume below ⬇️
        </footer>
      </section>
    </div>
  );
}

type Feature = {
  title: string;
  blurb: string;
  description: string;
  meta: string[];
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  animation: string;
  colors: string[];
  image: string;
  link: string;
};

type BentoItemProps = {
  feature: Feature;
  span?: string;
  theme?: string;
  index?: number;
  isVisible?: boolean;
};

function BentoItem({ feature, span = "", theme = "light", index = 0, isVisible = false }: BentoItemProps) {
  const { icon: Icon, animation, title, blurb, description, meta, colors, image, link } = feature;
  const isFeatured = index === 0;

  // Darker versions for dark mode
  const darkColors = colors.map(color => {
    if (color === "#ffffff") return "#1a1a1a";
    // Convert light colors to darker equivalents
    const colorMap: { [key: string]: string } = {
      "#A5B4FC": "#3730a3",
      "#C7D2FE": "#4338ca",
      "#FED7AA": "#92400e",
      "#FDBA74": "#b45309",
      "#BAE6FD": "#0c4a6e",
      "#7DD3FC": "#0369a1",
      "#F9A8D4": "#831843",
      "#FBCFE8": "#9f1239",
      "#DDD6FE": "#5b21b6",
      "#C4B5FD": "#6d28d9",
    };
    return colorMap[color] || color;
  });

  const gradientFill = theme === "dark"
    ? `linear-gradient(135deg, ${darkColors[0]}, ${darkColors[1]}, ${darkColors[2]})`
    : `linear-gradient(135deg, ${colors[0]}, ${colors[1]}, ${colors[2]})`;
  const animationDelay = `${Math.max(index * 0.12, 0)}s`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-neutral-900/10 bg-white/80 p-5 shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] motion-safe:opacity-0 ${
        isVisible ? "motion-safe:animate-[bento2-card_0.8s_ease-out_forwards]" : ""
      } dark:border-white/10 dark:bg-white/5 dark:shadow-[0_18px_40px_rgba(0,0,0,0.35)] dark:hover:shadow-[0_28px_70px_rgba(0,0,0,0.55)] ${span}`}
      style={{ animationDelay }}
    >
      <div className="absolute inset-0 -z-10 overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-white/85 transition-colors duration-500 dark:bg-white/8" />
        <div
          className="absolute inset-0 opacity-20 transition-opacity duration-500 dark:opacity-40"
          style={{ background: gradientFill }}
        />
      </div>

      {isFeatured && image && (
        <div className="mb-4 -mx-5 -mt-5 h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-900/15 bg-white transition-colors duration-500 dark:border-white/15 dark:bg-white/10">
          <Icon
            className="h-7 w-7 text-neutral-900 transition-colors duration-500 dark:text-white"
            strokeWidth={1.5}
            style={{ animation }}
          />
        </div>
        <div className="flex-1">
          <header className="flex items-start gap-3">
            <h3 className="text-base font-semibold uppercase tracking-wide text-neutral-900 transition-colors duration-500 dark:text-white">
              {title}
            </h3>
          </header>
          <p className="mt-2 text-sm leading-relaxed text-neutral-600 transition-colors duration-500 dark:text-white/60">
            {blurb}
          </p>
        </div>
      </div>

      {meta && (
        <div className="mt-4 flex flex-wrap gap-2">
          {meta.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-neutral-900/10 px-2 py-0.5 text-[10px] uppercase tracking-[0.3em] text-neutral-500 transition-colors duration-500 dark:border-white/15 dark:text-white/60"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div
          className="absolute inset-0 rounded-2xl border border-neutral-900/10 transition-colors duration-500 dark:border-white/10"
          style={{
            maskImage:
              "radial-gradient(220px_220px_at_var(--x,50%)_var(--y,50%), black, transparent)",
            WebkitMaskImage:
              "radial-gradient(220px_220px_at_var(--x,50%)_var(--y,50%), black, transparent)",
          }}
        />
      </div>
    </a>
  );
}

export default Projects;
export { Projects };
