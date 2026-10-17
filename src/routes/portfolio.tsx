import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Github, FolderPlus } from "lucide-react";
import { categories, projects, skills, type Category } from "@/data/portfolio";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Technical Portfolio | NEXRON" },
      { name: "description", content: "NEXRON technical portfolio: web development, computer maintenance, networking and debugging projects." },
      { property: "og:title", content: "Technical Portfolio | NEXRON" },
      { property: "og:description", content: "Projects and practical IT skills from NEXRON." },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  const [filter, setFilter] = useState<Category | "All">("All");
  const shown = filter === "All" ? projects : projects.filter((p) => p.category === filter);
  const chip = (active: boolean) =>
    `rounded-full border px-3 py-1.5 text-xs transition-colors ${active ? "border-cyan bg-cyan/10 text-cyan" : "text-muted-foreground hover:text-foreground"}`;

  return (
    <section className="mx-auto max-w-6xl px-4 pt-14">
      <p className="eyebrow">Portfolio</p>
      <h1 className="mt-2 text-4xl font-bold">Projects & practical work</h1>

      <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
        <button className={chip(filter === "All")} aria-pressed={filter === "All"} onClick={() => setFilter("All")}>All</button>
        {categories.map((c) => (
          <button key={c} className={chip(filter === c)} aria-pressed={filter === c} onClick={() => setFilter(c)}>{c}</button>
        ))}
      </div>

      {shown.length === 0 ? (
        <div className="mt-8 flex flex-col items-center rounded-xl border border-dashed p-12 text-center">
          <FolderPlus className="h-10 w-10 text-cyan" />
          <h2 className="mt-4 text-lg font-semibold">No projects here yet</h2>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            Real projects will appear here as they're added. Check back soon.
          </p>
        </div>
      ) : (
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {shown.map((p) => (
            <article key={p.title} className="overflow-hidden rounded-xl border bg-card">
              {p.image && <img src={p.image} alt={`Screenshot of ${p.title}`} loading="lazy" className="aspect-video w-full object-cover" />}
              <div className="p-6">
                <p className="eyebrow">{p.category}</p>
                <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
                <p className="mt-3 text-sm"><span className="text-muted-foreground">Problem: </span>{p.problem}</p>
                <p className="mt-2 text-sm"><span className="text-muted-foreground">Solution: </span>{p.solution}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.technologies.map((t) => <span key={t} className="rounded-full bg-accent px-2.5 py-1 font-mono text-xs">{t}</span>)}
                </div>
                <div className="mt-4 flex gap-4 text-sm">
                  {p.demoUrl && <a href={p.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-cyan hover:underline"><ExternalLink className="h-4 w-4" /> Live demo</a>}
                  {p.githubUrl && <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-cyan hover:underline"><Github className="h-4 w-4" /> Code</a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      <h2 className="mt-16 text-2xl font-bold">Technical skills</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {skills.map((g) => (
          <div key={g.group} className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold">{g.group}</h3>
            <ul className="mt-3 space-y-1 text-sm text-muted-foreground">{g.items.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
        ))}
      </div>
    </section>
  );
}
