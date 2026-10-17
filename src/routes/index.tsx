import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Globe, Wrench, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";
import { projects, skills } from "@/data/portfolio";
import { site, whatsappUrl, mailtoUrl, defaultMessage } from "@/config/site";
import mark from "@/assets/nexron-mark.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NEXRON | IT Assistance & Debugging" },
      { name: "description", content: "NEXRON offers IT assistance, computer troubleshooting, networking support, software debugging and remote IT support worldwide." },
      { property: "og:title", content: "NEXRON | IT Assistance & Debugging" },
      { property: "og:description", content: "Computer troubleshooting, networking, software debugging and remote IT support — worldwide." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="bg-circuit absolute inset-0" aria-hidden />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 pb-20 pt-16 text-center md:pt-24">
          <img src={mark} alt="NEXRON angular N logo" width={816} height={816} className="h-24 w-24 object-contain drop-shadow-[0_0_30px_var(--cyan)] md:h-32 md:w-32" />
          <p className="eyebrow mt-6">{site.tagline}</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Your Technology. <span className="text-gradient">Our Expertise.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
            NEXRON provides practical IT assistance, computer maintenance, networking, software troubleshooting and debugging solutions to individuals, students and businesses worldwide.
          </p>
          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button asChild variant="hero" size="lg"><Link to="/contact">Get IT Support <ArrowRight /></Link></Button>
            <Button asChild variant="glow" size="lg"><Link to="/portfolio">Explore Our Work</Link></Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border bg-card p-6">
            <Globe className="h-6 w-6 text-cyan" />
            <h2 className="mt-3 font-semibold">Remote support, worldwide</h2>
            <p className="mt-1 text-sm text-muted-foreground">Software, networking guidance and debugging can be handled remotely wherever you are.</p>
          </div>
          <div className="rounded-xl border bg-card p-6">
            <Wrench className="h-6 w-6 text-cyan" />
            <h2 className="mt-3 font-semibold">Physical repairs by arrangement</h2>
            <p className="mt-1 text-sm text-muted-foreground">Hardware work needs access to the device and depends on your location — ask us first.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-4">
        <div className="flex items-end justify-between gap-4">
          <div><p className="eyebrow">Services</p><h2 className="mt-2 text-3xl font-bold">What we fix</h2></div>
          <Link to="/services" className="text-sm text-cyan hover:underline">All services →</Link>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {services.slice(0, 3).map((s) => <ServiceCard key={s.title} service={s} compact />)}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-4">
        <p className="eyebrow">Portfolio</p>
        <h2 className="mt-2 text-3xl font-bold">Featured work</h2>
        {projects.length === 0 ? (
          <div className="mt-6 rounded-xl border border-dashed p-8 text-center text-muted-foreground">
            Projects are being prepared. <Link to="/portfolio" className="text-cyan hover:underline">Visit the portfolio</Link>
          </div>
        ) : (
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {projects.slice(0, 3).map((p) => (
              <li key={p.title} className="rounded-xl border bg-card p-5"><p className="eyebrow">{p.category}</p><h3 className="mt-2 font-semibold">{p.title}</h3></li>
            ))}
          </ul>
        )}
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-4">
        <p className="eyebrow">Skills</p>
        <h2 className="mt-2 text-3xl font-bold">Technical toolkit</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {skills.map((g) => (
            <div key={g.group} className="rounded-xl border bg-card p-5">
              <h3 className="font-semibold">{g.group}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {g.items.map((i) => <span key={i} className="rounded-full bg-accent px-3 py-1 font-mono text-xs">{i}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-4">
        <div className="rounded-2xl border bg-gradient-to-br from-navy to-card p-8 text-center shadow-glow md:p-12">
          <h2 className="text-3xl font-bold">Got a tech problem?</h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">Tell us what's going on and we'll tell you how we can help.</p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild variant="whatsapp" size="lg"><a href={whatsappUrl(defaultMessage)} target="_blank" rel="noopener noreferrer"><MessageCircle /> WhatsApp us</a></Button>
            <Button asChild variant="glow" size="lg"><a href={mailtoUrl()}><Mail /> Email us</a></Button>
          </div>
        </div>
      </section>
    </>
  );
}
