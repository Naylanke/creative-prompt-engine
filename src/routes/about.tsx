import { createFileRoute } from "@tanstack/react-router";
import { Target, Lightbulb, Search, ShieldCheck, Globe } from "lucide-react";

// Optional owner profile — fill these in to show them on the page. Leave empty to hide.
const profile = { photo: "", bio: "", qualifications: [] as string[] };

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About NEXRON | IT Assistance & Debugging" },
      { name: "description", content: "About NEXRON, an IT assistance and debugging brand helping individuals, students and businesses with practical technical support." },
      { property: "og:title", content: "About NEXRON" },
      { property: "og:description", content: "Making technology more reliable, accessible and easier to use." },
    ],
  }),
  component: AboutPage,
});

const pillars = [
  { icon: Target, title: "Mission", text: "Solve everyday technology problems with practical, honest solutions." },
  { icon: Lightbulb, title: "Technical interests", text: "Systems, networking, software troubleshooting and programming." },
  { icon: Search, title: "Problem-solving approach", text: "Understand the issue, find the root cause, fix it, and explain it clearly." },
  { icon: ShieldCheck, title: "Reliable assistance", text: "Clear communication and no promises we can't keep." },
  { icon: Globe, title: "Worldwide remote support", text: "Remote help anywhere; physical repairs depend on location and arrangement." },
];

function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 pt-14">
      <p className="eyebrow">About</p>
      <h1 className="mt-2 text-4xl font-bold">About NEXRON</h1>
      <p className="mt-6 text-lg text-muted-foreground">
        NEXRON is an IT assistance and debugging brand focused on solving everyday technology problems. We help individuals, students and businesses with computer maintenance, software troubleshooting, networking and practical technical support. Our goal is to make technology more reliable, accessible and easier to use through practical solutions and clear communication.
      </p>

      {(profile.photo || profile.bio || profile.qualifications.length > 0) && (
        <div className="mt-10 flex flex-col gap-6 rounded-xl border bg-card p-6 sm:flex-row">
          {profile.photo && <img src={profile.photo} alt="NEXRON founder" className="h-28 w-28 rounded-full object-cover" />}
          <div>
            {profile.bio && <p>{profile.bio}</p>}
            {profile.qualifications.length > 0 && <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground">{profile.qualifications.map((q) => <li key={q}>{q}</li>)}</ul>}
          </div>
        </div>
      )}

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {pillars.map(({ icon: Icon, title, text }) => (
          <div key={title} className="rounded-xl border bg-card p-6">
            <Icon className="h-6 w-6 text-cyan" />
            <h2 className="mt-3 font-semibold">{title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
