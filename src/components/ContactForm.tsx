import { useState, type FormEvent } from "react";
import { Loader2, Mail, MessageCircle, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { mailtoUrl, whatsappUrl } from "@/config/site";

// Optional: set VITE_WEB3FORMS_KEY (a public access key from web3forms.com) to deliver
// the form by email. Without it, the form transparently hands off to WhatsApp or email.
const FORM_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;

type Fields = { name: string; email: string; phone: string; service: string; subject: string; message: string };
const empty: Fields = { name: "", email: "", phone: "", service: "", subject: "", message: "" };

export function validate(f: Fields) {
  const e: Partial<Record<keyof Fields, string>> = {};
  if (!f.name.trim()) e.name = "Please enter your full name.";
  if (!f.email.trim()) e.email = "Please enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) e.email = "Please enter a valid email address.";
  if (!f.service) e.service = "Please choose a service.";
  if (!f.subject.trim()) e.subject = "Please add a subject.";
  if (!f.message.trim()) e.message = "Please describe your issue.";
  return e;
}

const compose = (f: Fields) =>
  `Hello NEXRON,\n\nName: ${f.name}\nEmail: ${f.email}${f.phone ? `\nPhone/WhatsApp: ${f.phone}` : ""}\nService: ${f.service}\nSubject: ${f.subject}\n\n${f.message}`;

const inputCls =
  "w-full rounded-lg border bg-background px-3 py-2.5 text-sm placeholder:text-muted-foreground focus-visible:border-cyan aria-[invalid=true]:border-destructive";

export function ContactForm() {
  const [f, setF] = useState<Fields>(empty);
  const [errors, setErrors] = useState<ReturnType<typeof validate>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "ready">("idle");

  const set = (k: keyof Fields) => (ev: { target: { value: string } }) => setF({ ...f, [k]: ev.target.value });

  async function onSubmit(ev: FormEvent) {
    ev.preventDefault();
    if (status === "loading") return;
    const e = validate(f);
    setErrors(e);
    if (Object.keys(e).length) return;
    if (!FORM_KEY) { setStatus("ready"); return; }
    setStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: FORM_KEY, subject: `NEXRON: ${f.subject}`, ...f }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error();
      setStatus("success");
      setF(empty);
    } catch {
      setStatus("error");
    }
  }

  const field = (k: keyof Fields, label: string, el: React.ReactNode, required = true) => (
    <div>
      <label htmlFor={k} className="mb-1.5 block text-sm font-medium">
        {label} {required ? <span className="text-cyan">*</span> : <span className="text-muted-foreground">(optional)</span>}
      </label>
      {el}
      {errors[k] && <p id={`${k}-err`} className="mt-1 text-xs text-destructive">{errors[k]}</p>}
    </div>
  );
  const a = (k: keyof Fields) => ({ id: k, name: k, value: f[k], onChange: set(k), "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${k}-err` : undefined, className: inputCls });

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4 rounded-xl border bg-card p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        {field("name", "Full name", <input {...a("name")} autoComplete="name" />)}
        {field("email", "Email address", <input {...a("email")} type="email" autoComplete="email" />)}
        {field("phone", "Phone or WhatsApp", <input {...a("phone")} type="tel" autoComplete="tel" />, false)}
        {field("service", "Service required", (
          <select {...a("service")}>
            <option value="">Select a service…</option>
            {services.map((s) => <option key={s.title}>{s.title}</option>)}
            <option>Other</option>
          </select>
        ))}
      </div>
      {field("subject", "Subject", <input {...a("subject")} />)}
      {field("message", "Describe your issue", <textarea {...a("message")} rows={5} />)}

      <p className="text-xs text-muted-foreground">
        Privacy: we only use these details to reply to your enquiry. Never share passwords or account credentials.
      </p>

      {status === "success" && (
        <p role="status" className="flex items-center gap-2 text-sm text-success"><CheckCircle2 className="h-4 w-4" /> Thanks — your enquiry was received. We'll reply by email soon.</p>
      )}
      {status === "error" && (
        <p role="alert" className="flex items-center gap-2 text-sm text-destructive"><AlertCircle className="h-4 w-4" /> Sending failed. Please use WhatsApp or email below.</p>
      )}

      {status === "ready" || status === "error" ? (
        <div role="status" className="space-y-3 rounded-lg border border-cyan/40 bg-accent/40 p-4">
          <p className="text-sm">Your message is ready. Choose how to send it — you'll review it before it's sent.</p>
          <div className="grid gap-2 sm:grid-cols-2">
            <Button asChild variant="whatsapp"><a href={whatsappUrl(compose(f))} target="_blank" rel="noopener noreferrer"><MessageCircle /> Send via WhatsApp</a></Button>
            <Button asChild variant="glow"><a href={mailtoUrl(`NEXRON: ${f.subject}`, compose(f))}><Mail /> Send via email</a></Button>
          </div>
        </div>
      ) : (
        <Button type="submit" variant="hero" size="lg" className="w-full" disabled={status === "loading"}>
          {status === "loading" ? <><Loader2 className="animate-spin" /> Sending…</> : FORM_KEY ? "Send enquiry" : "Prepare enquiry"}
        </Button>
      )}
    </form>
  );
}
