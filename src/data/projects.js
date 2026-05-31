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
        "Enterprise developers often rely on cloud-based AI assistants that require continuous internet connectivity, introduce data privacy concerns for proprietary codebases, and incur recurring subscription or API costs. Organizations need an AI assistant that operates entirely on local infrastructure while maintaining full ownership of their data and workflows.",
      solution:
        "Designed and developed AURA (Autonomous Unified Response Architecture), a fully offline AI assistant that runs entirely on local hardware. AURA combines local LLM inference through Ollama, voice interaction, persistent memory, codebase-aware retrieval, and a modular plugin ecosystem to provide secure, private, and extensible AI-powered automation for developers",
      techStack: [
        "Python",
        "Ollama",
        "Docker",
        "ChromaDB",
        "Whisper",
        "Piper TTS",
        "PyQt6",
        "SQLite",
        "Git",
        "Playwright",
        "PyAutoGUI",
      ],
      features: [
        "Fully offline AI assistant powered by local LLMs through Ollama.",
        "Wake-word activated voice interface with local speech-to-text and text-to-speech.",
        "Codebase-aware contextual understanding using ChromaDB vector search and RAG.",
        "Modular plugin architecture enabling extensible capabilities without modifying the core system.",
        "Intelligent routing layer that selects optimal models based on task complexity and intent.",
        "Developer automation for Git, Docker, file management, and system operations.",
        "Persistent long-term memory with semantic retrieval across sessions.",
        "Desktop dashboard for monitoring commands, system status, and AI activity.",
        "MCP-compatible architecture for IDE and external tool integrations.",
      ],
      technicalDecisions: [
        "Adopted Ollama for local LLM serving to ensure complete offline functionality and model flexibility",
        "Implemented a plugin-based architecture to isolate features and improve maintainability, scalability, and community extensibility",
        "Chose ChromaDB for persistent vector storage and fast semantic retrieval on local hardware",
        "Used Whisper and Piper TTS to achieve a fully offline voice interaction pipeline",
        "Selected PyQt6 for a lightweight, Python-native desktop interface with lower resource consumption than Electron-based alternatives",
        "Introduced a Command DSL and Intelligence Router to safely map AI-generated intents into validated system actions",
      ],
      challenges: [
        "Optimizing local LLM performance and response latency on consumer-grade hardware.",
        "Building a reliable wake-word, speech recognition, and command execution pipeline.",
        "Designing a secure execution framework that prevents unintended AI actions.",
        "Managing efficient vector index updates as project files and context evolve.",
        "Ensuring seamless operation across online and air-gapped environments.",
      ],
      outcomes: [
        "Built a privacy-first AI assistant with zero cloud dependency and 100% local execution.",
        "Achieved support for voice commands, contextual memory, developer tooling, and desktop automation.",
        "Designed a scalable plugin ecosystem for future integrations and community extensions.",
        "Developed an MCP-compatible architecture for IDE and external tool interoperability.",
        "Enabled deployment in secure and air-gapped environments where cloud AI solutions are unsuitable.",
      ],
      architectureDiagram: "/projects/aura/ar.png",
      screenshots: ["/projects/aura/AURA1.JPG", "/projects/aura/AURA2.jpg"],
      githubUrl: "https://github.com/aryanjsx/AURA",
      liveUrl: "https://aryanjsx.github.io/AURA/",
    },
    {
      id: "lyrix",
      name: "Lyrix",
      shortDescription:
        "Modern music and podcast streaming platform powered by YouTube.",
      url: "https://elyrix.vercel.app",
      repo: "https://github.com/aryanjsx/Lyrix",
      description:
        "Lyrix is a modern audio streaming platform that transforms YouTube into a clean, intelligent, and distraction-free music experience. Discover songs, podcasts, playlists, and synced lyrics through a premium interface designed for seamless listening.",
      languages: [
        { name: "TypeScript", iconifyClass: "devicon:typescript" },
        { name: "NextJS", iconifyClass: "logos:nextjs-icon" },
        { name: "Nodejs", iconifyClass: "logos:nodejs-icon" },
        { name: "YouTube API", iconifyClass: "logos:youtube-icon" },
        { name: "Vercel", iconifyClass: "simple-icons:vercel" },
      ],
      problem:
        "Existing streaming platforms either restrict users behind subscriptions, clutter the experience with ads, or mix music with irrelevant content. Users need a fast, free, and focused platform dedicated to audio discovery and playback.",
      solution:
        "Built Lyrix, an intelligent music and podcast platform that leverages YouTube's vast catalog while filtering out noise, providing a premium listening experience with smart discovery, playlist management, and synchronized lyrics.",
      techStack: [
        "TypeScript",
        "NextJS",
        "Nodejs",
        "Expressjs",
        "Tailwind",
        "YouTube Data API",
        "Vercel",
      ],
      features: [
        "Instant guest mode with no login required",
        "Music and podcast search powered by YouTube",
        "Smart filtering engine to remove irrelevant content",
        "Real-time audio playback with queue management",
        "Playlist creation and synchronization",
        "Time-synced lyrics support",
        "Personalized recommendations and discovery",
        "Responsive design optimized for mobile and desktop",
        "Session persistence across reloads",
        "Low-latency playback with intelligent caching",
      ],
      technicalDecisions: [
        "Next.js for SEO, performance optimization, and hybrid rendering",
        "YouTube IFrame Player API for compliant and reliable playback",
        "Node.js backend to centralize YouTube API access and quota management",
        "MySQL with Prisma ORM for scalable data modeling",
        "Redis and localStorage caching strategy to reduce API consumption",
        "Centralized state management for playback, queue, and user sessions",
        "Network-aware adaptive UI for low-bandwidth environments",
      ],
      challenges: [
        "Filtering music and podcast content accurately from generic YouTube results",
        "Managing YouTube API quotas while maintaining responsive search",
        "Synchronizing lyrics with playback timestamps",
        "Building uninterrupted playback and queue persistence across sessions",
        "Handling network interruptions and graceful recovery mechanisms",
        "Optimizing performance on both desktop and mobile devices",
      ],
      outcomes: [
        "Premium music streaming experience without subscription barriers",
        "Fast and distraction-free audio discovery platform",
        "Scalable architecture designed for future AI-powered recommendations",
        "Improved content relevance through intelligent filtering",
        "Seamless playback experience with resilient caching and recovery systems",
      ],
      architectureDiagram: "/projects/lyrix/ar.png",
      screenshots: ["/projects/lyrix/lyrix1.png", "/projects/lyrix/lyrix2.png"],
      githubUrl: "https://github.com/aryanjsx/Lyrix",
      liveUrl: "https://elyrix.vercel.app",
    },
  ],
};

export function getProjectBySlug(slug) {
  return projects.data.find((p) => p.id === slug) || null;
}

export function getAllProjectSlugs() {
  return projects.data.map((p) => p.id);
}
