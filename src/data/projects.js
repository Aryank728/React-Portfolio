export const projectsHeader = {
  description:
    "My projects make use of a vast variety of the latest technology tools. 🚀 I excel in creating both Web Development and Software Development projects. Below, you'll find some of my projects. Please note that not all mentioned projects are on GitHub yet. 🌐🛠️",
};

export const npmPackages = {
  enabled: true,
  title: "Packages",
  description:
    "A collection of open-source packages I’ve published on npm & PyPI, available to install using npm, yarn, or pip. 📦",
  data: [
    {
      name: "Api Response",
      description:
        "It provides a simple, consistent API for all your response needs with full TypeScript support. You can use it to create a response for your API.",
      version: "1.0.0",
      weeklyDownloads: 20,
      installCommand: "npm i @aryanjsx/api-response",
      repository: "https://github.com/aryanjsx/api-response",
    },
    {
      name: "Know India",
      description:
        "It is a comprehensive npm package designed to provide structured, reliable data about India's states and union territories. It powers the Know India tourism platform and can be seamlessly integrated into dashboards, websites, APIs, and educational applications.",
      version: "1.2.4",
      weeklyDownloads: 245,
      installCommand: "npm i @aryanjsx/knowindia",
      repository: "https://github.com/aryanjsx/know-india",
    },
    {
      name: "India Map",
      description:
        "It is an elegant, interactive SVG map of India for React applications. It can be used to display the map of India in your React application.",
      version: "1.0.2",
      weeklyDownloads: 220,
      installCommand: "npm i @aryanjsx/indiamap",
      repository: "https://github.com/aryanjsx/IndiaMap",
    },
    {
      name: "AURA (orkio)",
      type: "pypi",
      description:
        "Autonomous Unified Resource Architect — an AI-powered MCP server that interprets natural language tasks, validates them for safety, and executes them through a modular plugin architecture.",
      version: "0.3.1",
      installCommand: "pip install orkio",
      registryUrl: "https://pypi.org/project/orkio/",
      repository: "https://github.com/aryanjsx/aura-mcp",
    },
  ],
};

export const projects = {
  data: [
    {
      id: "know-india",
      name: "Know India",
      shortDescription:
        "Tourism platform for exploring India's states and territories.",
      url: "https://knowindia.aryankr.in/",
      repo: "https://github.com/aryanjsx/know-India",
      description:
        "Plan your India trip and explore 28 states, 8 union territories, save favorites & share it with your friends.",
      languages: [
        { name: "ReactJS", iconifyClass: "devicon:react" },
        { name: "Node.js", iconifyClass: "logos-nodejs" },
        { name: "Tailwind CSS", iconifyClass: "devicon:tailwindcss" },
        { name: "MySQL", iconifyClass: "simple-icons:mysql\n" },
        { name: "Material UI", iconifyClass: "devicon:materialui" },
        { name: "Chart.js", iconifyClass: "logos-chartjs" },
        { name: "Vercel", iconifyClass: "simple-icons:vercel" },
        { name: "React Router", iconifyClass: "devicon:reactrouter" },
      ],
      problem:
        "Travelers exploring India often struggle to find reliable, centralized information about destinations, culture, cuisine, and local attractions. Planning a trip typically requires researching multiple websites, blogs, and travel guides, resulting in fragmented information, inconsistent recommendations, and time-consuming itinerary creation. Additionally, most travel platforms provide generic suggestions rather than personalized travel experiences tailored to individual interests and preferences..",
      solution:
        "India's vast geographic and cultural diversity makes travel planning complex. Information about destinations, attractions, local experiences, and regional highlights is often scattered across numerous sources, forcing travelers to spend significant time gathering and organizing data. Existing platforms frequently lack intelligent personalization, making it difficult for users to discover relevant destinations and create customized travel itineraries that match their interests.",
      techStack: [
        "React",
        "Node.js",
        "MySQL",
        "Tailwind CSS",
        "Material UI",
        "Chart.js",
        "Vercel",
      ],
      features: [
        "Developed a full-stack tourism platform showcasing destinations across India's 28 states and 8 union territories",
        "Built an interactive India map that allows users to explore states and discover tourist attractions region-wise",
        "Implemented category-based destination discovery including heritage sites, hill stations, beaches, religious places, and cultural attractions",
        "Provided detailed information for each destination and festivals including descriptions, images, location details, and maps",
        "Created a secure admin dashboard for managing places, categories, and tourism content through CRUD operations",
        "Designed a fully responsive user interface optimized for desktop, tablet, and mobile devices",
      ],
      technicalDecisions: [
        "Selected React for building a component-based frontend with improved maintainability and scalability",
        "Used Node.js and Express to create RESTful APIs for communication between the frontend and backend",
        "Implemented MySQL with a normalized database schema to efficiently manage tourism-related data",
        "Stored destination images separately and linked them through relational database tables for better organization",
        "Designed reusable UI components to ensure consistency across the application",
        "Applied responsive design principles to provide a seamless experience across multiple screen sizes",
      ],
      challenges: [
        "Collecting and organizing tourism information for all Indian states and union territories in a consistent format",
        "Designing a database structure capable of managing destinations, categories, images, and administrative data efficiently",
        "Building an intuitive navigation system that allows users to easily discover destinations across India",
        "Ensuring responsive performance while displaying large amounts of tourism content and images",
        "Developing a scalable architecture that can support future enhancements and additional tourism data",
      ],
      outcomes: [
        "Delivered a centralized platform for exploring India's diverse tourist destinations and cultural heritage",
        "Created a scalable full-stack application demonstrating frontend, backend, and database development skills",
        "Simplified destination discovery by organizing tourism information into structured categories and regions",
        "Established a foundation for future features such as user accounts, trip planning, reviews, and personalized recommendations",
      ],
      architectureDiagram: "/projects/know-india/architecture.jpg",
      screenshots: [
        "/projects/know-india/know India1.png",
        "/projects/know-india/know India2.png",
      ],
      githubUrl: "https://github.com/aryanjsx/know-India",
      liveUrl: "https://knowindia.aryankr.in/",
    },

    {
      id: "code-converter",
      name: "Code Converter",
      shortDescription:
        "Browser-based multi-language code converter powered by LLMs.",
      url: "https://convertcodex.vercel.app",
      repo: "https://github.com/aryanjsx/code-converter",
      description:
        "Browser-based multi-language code converter powered by LLMs. Upload full projects, preserve architecture & naming, compare original vs converted code side-by-side, and export as ZIP.",
      languages: [
        { name: "TypeScript", iconifyClass: "devicon:typescript" },
        { name: "ReactJS", iconifyClass: "logos-react" },
        { name: "Vite", iconifyClass: "devicon:vitejs" },
        { name: "LLM", iconifyClass: "simple-icons:openai" },
        { name: "Tailwind CSS", iconifyClass: "devicon:tailwindcss" },
        { name: "Vercel", iconifyClass: "simple-icons:vercel" },
      ],
      problem:
        "Migrating applications from one programming language to another is a complex and time-consuming process. Developers often need to manually rewrite files, preserve project structure, maintain naming conventions, and ensure consistency across large codebases. Existing code translation tools typically focus on individual snippets rather than complete projects, making large-scale migrations inefficient and error-prone.",
      solution:
        "Built a browser-based multi-language code conversion platform that enables developers to upload entire projects and convert them across programming languages using Large Language Models (LLMs). The platform preserves project architecture, file organization, and naming conventions while allowing side-by-side comparison of original and converted code. Users can export the generated codebase as a ZIP file and benchmark outputs across multiple AI models.",
      techStack: [
        "TypeScript",
        "React",
        "Vite",
        "Tailwind CSS",
        "LLM API",
        "Vercel",
      ],
      features: [
        "Upload and convert complete project folders instead of individual code snippets",
        "Multi-model support with OpenAI-compatible providers including Gemini, DeepSeek, Groq, and others",
        "Side-by-side comparison of original and converted code",
        "Project architecture and folder structure preservation during conversion",
        "ZIP export functionality for downloading converted projects",
        "Browser-based workflow with no backend configuration required",
        "Support for 20+ programming languages including Python, Rust, Go, TypeScript, and JavaScript",
        "Model benchmarking to compare conversion quality across multiple LLMs",
      ],
      technicalDecisions: [
        "Used React 19 and TypeScript for type-safe, scalable frontend development",
        "Selected Vite for fast development builds and optimized production bundling",
        "Implemented a provider-agnostic architecture supporting multiple LLM APIs through a unified interface",
        "Performed all configuration in the browser to simplify setup and reduce deployment complexity",
        "Used JSZip and FileSaver for client-side project packaging and downloads",
        "Designed a modular service layer to support future AI providers without major architectural changes",
      ],
      challenges: [
        "Preserving project structure and file relationships during large-scale codebase conversion",
        "Managing conversion workflows for multiple files while maintaining performance in the browser",
        "Handling differences in syntax, architecture patterns, and frameworks across programming languages",
        "Creating a unified interface that works consistently across multiple LLM providers",
        "Ensuring accurate side-by-side comparison for large converted projects",
      ],
      outcomes: [
        "Delivered a full-stack developer productivity tool focused on code migration and language interoperability",
        "Built a scalable architecture capable of supporting multiple AI providers and future language integrations",
        "Simplified project-level code conversion through an intuitive browser-based experience",
        "Demonstrated expertise in TypeScript, React, AI integrations, modular architecture design, and developer tooling",
      ],
      architectureDiagram: "/projects/code-converter/architecture.png",
      screenshots: [
        "/projects/code-converter/cc1.png",
        "/projects/code-converter/cc2.png",
      ],
      githubUrl: "https://github.com/aryanjsx/code-converter",
      liveUrl: "https://convertcodex.vercel.app",
    },

    {
      id: "aura",
      name: "AURA",
      shortDescription:
        "Offline AI developer assistant with voice commands and system automation.",
      repo: "https://github.com/aryanjsx/AURA",
      description:
        "Autonomous Utility & Resource Assistant — A fully offline AI developer assistant that automates coding workflows using local LLMs, voice commands, and system automation.",
      languages: [
        { name: "Python", iconifyClass: "logos:python" },
        { name: "Ollama", iconifyClass: "simple-icons:ollama" },
        { name: "Docker", iconifyClass: "devicon:docker" },
        { name: "PyQt6", iconifyClass: "devicon:qt" },
        { name: "ChromaDB", iconifyClass: "simple-icons:chroma" },
        { name: "Git", iconifyClass: "devicon:git" },
      ],
      problem:
        "Cloud-based AI assistants require constant internet access, raise data privacy concerns for enterprise code, and incur recurring API costs. Developers need an AI assistant that works completely offline with full control over their data.",
      solution:
        "Created a desktop AI assistant that runs entirely on local hardware using Ollama for LLM inference. Features voice commands, codebase-aware context via ChromaDB embeddings, and a modular plugin architecture for system automation tasks.",
      techStack: [
        "Python",
        "Ollama",
        "Docker",
        "PyQt6",
        "ChromaDB",
        "Git",
        "Whisper",
      ],
      features: [
        "Fully offline AI inference using local LLMs via Ollama",
        "Voice command interface with Whisper speech recognition",
        "Codebase-aware context through ChromaDB vector embeddings",
        "Modular plugin system for extensible automation",
        "Git integration for commit summaries and code review",
        "Desktop GUI built with PyQt6",
      ],
      technicalDecisions: [
        "Ollama for local LLM serving — supports multiple model families without GPU lock-in",
        "ChromaDB for persistent vector storage with fast similarity search on local disk",
        "PyQt6 over Electron to keep the stack Python-native and reduce memory overhead",
        "Plugin architecture to allow users to extend functionality without modifying core",
      ],
      challenges: [
        "Optimizing LLM inference speed on consumer hardware without dedicated GPU",
        "Building reliable voice-to-command pipeline with acceptable error rates",
        "Managing vector index updates efficiently as the codebase evolves",
      ],
      outcomes: [
        "Published to PyPI as orkio — installable via pip install orkio",
        "Zero cloud dependency — works on air-gapped machines",
        "MCP server variant for IDE integration",
      ],
      architectureDiagram: "/architecture/aura.svg",
      screenshots: ["/projects/aura/1.svg", "/projects/aura/2.svg"],
      githubUrl: "https://github.com/aryanjsx/AURA",
      liveUrl: "",
    },
    {
      id: "arythm",
      name: "Arythm",
      shortDescription:
        "Open-source web music player powered by YouTube Music.",
      url: "https://arythm.vercel.app",
      repo: "https://github.com/aryanjsx/Arythm",
      description:
        "A beautiful, open-source web music player powered by YouTube Music. Stream millions of songs, enjoy synced lyrics, and discover new music — all from your browser.",
      languages: [
        { name: "TypeScript", iconifyClass: "devicon:typescript" },
        { name: "ReactJS", iconifyClass: "logos-react" },
        { name: "YouTube API", iconifyClass: "logos:youtube-icon" },
        { name: "Vercel", iconifyClass: "simple-icons:vercel" },
      ],
      problem:
        "Most web-based music players are either locked behind subscriptions, bloated with ads, or lack features like synced lyrics. Developers and music lovers need a clean, free alternative that runs entirely in the browser.",
      solution:
        "Built an open-source music player that streams from YouTube Music's catalog, displays time-synced lyrics, and provides a polished listening experience — all without requiring user accounts or subscriptions.",
      techStack: ["TypeScript", "React", "YouTube Data API", "Vercel"],
      features: [
        "Stream millions of songs via YouTube Music integration",
        "Time-synced lyrics display",
        "Search and discover music by artist, album, or track",
        "Queue management and playlist support",
        "Responsive design for mobile and desktop",
        "Keyboard shortcuts for playback control",
      ],
      technicalDecisions: [
        "TypeScript for strict type safety across the audio playback pipeline",
        "YouTube Data API for access to a massive music catalog without hosting audio",
        "Client-side audio state management for gapless playback experience",
        "Vercel Edge for low-latency API proxy to handle CORS and rate limiting",
      ],
      challenges: [
        "Handling YouTube API rate limits while maintaining responsive search",
        "Synchronizing lyrics with audio playback across varying network conditions",
        "Building a polished audio player UX that matches native app expectations",
      ],
      outcomes: [
        "Fully open-source and free to use",
        "No account or subscription required",
        "Clean, ad-free listening experience",
      ],
      architectureDiagram: "/architecture/arythm.svg",
      screenshots: ["/projects/arythm/1.svg", "/projects/arythm/2.svg"],
      githubUrl: "https://github.com/aryanjsx/Arythm",
      liveUrl: "https://arythm.vercel.app",
    },
  ],
};

export function getProjectBySlug(slug) {
  return projects.data.find((p) => p.id === slug) || null;
}

export function getAllProjectSlugs() {
  return projects.data.map((p) => p.id);
}
