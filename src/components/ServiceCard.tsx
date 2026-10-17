import { Check, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mailtoUrl, serviceMessage, whatsappUrl } from "@/config/site";
import type { Service } from "@/data/services";

export function ServiceCard({ service, compact = false }: { service: Service; compact?: boolean }) {
  const Icon = service.icon;
  return (
    <article className="group flex flex-col rounded-xl border bg-card p-6 transition-colors hover:border-cyan/50">
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-cyan"><Icon className="h-5 w-5" /></div>
        <span className="rounded-full border px-2.5 py-1 font-mono text-[0.65rem] text-muted-foreground">{service.delivery}</span>
      </div>
      <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
      {!compact && (
        <ul className="mt-4 space-y-1.5 text-sm">
          {service.items.map((i) => (
            <li key={i} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />{i}</li>
          ))}
        </ul>
      )}
      <div className="mt-auto flex gap-2 pt-5">
        <Button asChild variant="whatsapp" className="flex-1">
          <a href={whatsappUrl(serviceMessage(service.title))} target="_blank" rel="noopener noreferrer">
            <MessageCircle /> Request This Service
          </a>
        </Button>
        <Button asChild variant="glow" size="icon" aria-label={`Email about ${service.title}`}>
          <a href={mailtoUrl(`NEXRON enquiry: ${service.title}`, serviceMessage(service.title))}><Mail /></a>
        </Button>
      </div>
    </article>
  );
}
