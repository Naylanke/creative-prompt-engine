import { createFileRoute } from "@tanstack/react-router";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "IT Services | NEXRON" },
      { name: "description", content: "Computer maintenance, software troubleshooting, networking support, debugging and remote IT support from NEXRON." },
      { property: "og:title", content: "IT Services | NEXRON" },
      { property: "og:description", content: "Computer maintenance, networking, software debugging and remote IT support." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-14">
      <p className="eyebrow">Services</p>
      <h1 className="mt-2 text-4xl font-bold">How NEXRON can help</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Each service is marked as <strong className="text-foreground">Remote</strong>, <strong className="text-foreground">On-site</strong> or both. Remote help is available worldwide; physical repairs need access to the device and depend on your location.
      </p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => <ServiceCard key={s.title} service={s} />)}
      </div>
    </section>
  );
}
