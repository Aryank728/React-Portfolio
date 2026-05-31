import { CurrentProject } from "../types";

export const currentlyBuilding: CurrentProject[] = [
  {
    title: "AURA",
    description:
      "Autonomous Utility & Resource Assistant — A fully offline AI developer assistant that automates coding workflows using local LLMs, voice commands, and system automation.",
    status: "In Development",
    techStack: ["Python", "Ollama", "Whisper", "ChromaDB", "PyQt6"],
    link: "https://github.com/aryanjsx/AURA",
  },
  {
    title: "Lyrix",
    description:
      "An music streaming platform that transforms YouTube into a premium audio experience. Features smart music and podcast filtering, playlist management, personalized recommendations, and synchronized lyrics in a modern, ad-free interface.",
    status: "Beta",
    techStack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MySQL",
      "Prisma",
      "YouTube API",
      "Redis",
      "Tailwind CSS",
    ],
    link: "https://github.com/aryanjsx/Lyrix",
  },
  {
    title: "Code Converter",
    description: "Browser-based multi-language code converter powered by AI.",
    status: "Active",
    techStack: ["TypeScript", "React", "AI API"],
    link: "https://github.com/aryanjsx/code-converter",
  },
  {
    title: "Know India",
    description:
      "Know India is a tourism platform that helps users explore famous places across India with rich details, images, and location insights.",
    status: "Active",
    techStack: ["React.js", "Node.js", "Express.js", "MySQL", "REST APIs"],
    link: "https://github.com/aryanjsx/know-India",
  },
];
