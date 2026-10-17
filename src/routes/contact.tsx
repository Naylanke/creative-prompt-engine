import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { site, whatsappUrl, mailtoUrl, defaultMessage } from "@/config/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact NEXRON | Get IT Support" },
      { name: "description", content: "Contact NEXRON for IT assistance via WhatsApp or email. Remote IT support available worldwide." },
      { property: "og:title", content: "Contact NEXRON | Get IT Support" },
      { property: "og:description", content: "Reach NEXRON on WhatsApp or email for computer, networking and debugging help." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-14">
      <p className="eyebrow">Contact</p>
      <h1 className="mt-2 text-4xl font-bold">Get IT support</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">Message us directly or fill in the form. We'll get back to you as soon as possible.</p>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
        <div className="space-y-4">
          <div className="rounded-xl border bg-card p-6">
            <MessageCircle className="h-6 w-6 text-whatsapp" />
            <h2 className="mt-3 font-semibold">WhatsApp</h2>
            <p className="text-sm text-muted-foreground">{site.whatsappDisplay}</p>
            <Button asChild variant="whatsapp" className="mt-4 w-full"><a href={whatsappUrl(defaultMessage)} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a></Button>
          </div>
          <div className="rounded-xl border bg-card p-6">
            <Mail className="h-6 w-6 text-cyan" />
            <h2 className="mt-3 font-semibold">Email</h2>
            <p className="break-all text-sm text-muted-foreground">{site.email}</p>
            <Button asChild variant="glow" className="mt-4 w-full"><a href={mailtoUrl()}>Send an email</a></Button>
          </div>
          <div className="rounded-xl border bg-card p-6">
            <Globe className="h-6 w-6 text-cyan" />
            <h2 className="mt-3 font-semibold">Service area: {site.serviceArea}</h2>
            <p className="text-sm text-muted-foreground">Remote support worldwide. Physical repairs depend on location and arrangement.</p>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
