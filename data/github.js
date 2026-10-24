// data/github.js
// Public GitHub repositories shown on the portfolio page.
// The page loads the live list from the GitHub API; `fallback` is shown
// if that request fails. Repos in `exclude` are never shown.

const githubConfig = {
  user: "sngzege",
  exclude: ["sngzege", "personal-website", "linkedin-applier"],
  fallback: [
    { name: "SyncCore", language: "Python", description: "Revision control engine: SHA-256 hashing and pixel-level comparison of production documents." },
    { name: "DriveAssist", language: "Python", description: "Local, privacy-first file organisation with LangChain/LangGraph and AES encryption." },
    { name: "ArGe-Kanban", language: "Python", description: "Self-hosted Kanban board for R&D team workload." },
    { name: "FileOrganizer", language: "Python", description: "Automated PDF and file organisation across local disk and Google Drive." },
    { name: "vega-nesting", language: "", description: "" },
    { name: "sap-mcp", language: "", description: "" },
    { name: "netsentinel", language: "", description: "" },
    { name: "ReconForge", language: "", description: "" },
    { name: "SimPad", language: "", description: "" },
    { name: "kapsam_bot", language: "", description: "" },
    { name: "log-customer-complaint", language: "", description: "" },
    { name: "tower-of-babel", language: "", description: "" },
    { name: "LangFlow", language: "", description: "" },
    { name: "agora", language: "", description: "" }
  ]
};

window.githubConfig = githubConfig;
