  import { Aperture, BarChart3, LayoutGrid, Activity, Layers } from "lucide-react";

  export const projects = [
    {
      title: "System Patterns",
      blurb: "Foundational blocks arranged with deliberate rhythm and precise spacing across the viewport grid.",
      meta: "Layout",
      icon: Aperture,
      animation: "bento2-float 6s ease-in-out infinite",
      colors: ["#ffffff", "#E0E7FF", "#F0F4FF"],
    },
    {
      title: "Signal Balance",
      blurb: "Monochrome surfaces and tight contrast ratios keep focus on intent over ornamentation.",
      meta: "Tone",
      icon: BarChart3,
      animation: "bento2-pulse 4s ease-in-out infinite",
      colors: ["#FFF5F0", "#ffffff", "#FFE8E0"],
    },
    {
      title: "Structured Flow",
      blurb: "Information passes through aligned channels for clarity, speed, and effortless scanning.",
      meta: "Flow",
      icon: LayoutGrid,
      animation: "bento2-tilt 5.5s ease-in-out infinite",
      colors: ["#F0F9FF", "#ffffff", "#E0F2FE"],
    },
    {
      title: "Clean Signals",
      blurb: "Each icon is drawn once, animated gently, and rendered strictly in strokes for a disciplined feel.",
      meta: "Craft",
      icon: Activity,
      animation: "bento2-drift 8s ease-in-out infinite",
      colors: ["#ffffff", "#FCE7F3", "#FFF1F9"],
    },
    {
      title: "Quiet Energy",
      blurb: "Subtle motion hints at responsiveness without ever distracting from the message conveyed.",
      meta: "Pulse",
      icon: Layers,
      animation: "bento2-glow 7s ease-in-out infinite",
      colors: ["#F5F3FF", "#ffffff", "#EDE9FE"],
    },
  ];