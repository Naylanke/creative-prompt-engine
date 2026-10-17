// Add real projects here. The portfolio page shows an empty state until this list has entries.
export const categories = [
  "Web development",
  "Computer maintenance",
  "Networking",
  "Programming and debugging",
  "Software tools",
  "Personal technology projects",
] as const;

export type Category = (typeof categories)[number];

export interface Project {
  title: string;
  category: Category;
  problem: string;
  solution: string;
  technologies: string[];
  image?: string;
  demoUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [];

// Edit to reflect your actual abilities.
export const skills: { group: string; items: string[] }[] = [
  { group: "Systems", items: ["Windows configuration", "Computer maintenance", "Troubleshooting"] },
  { group: "Networking", items: ["Networking fundamentals", "Router & Wi-Fi setup"] },
  { group: "Development", items: ["HTML", "CSS", "JavaScript", "Git"] },
];
