// Central brand + contact configuration. Edit here to update the whole site.
export const site = {
  name: "NEXRON",
  tagline: "IT ASSISTANCE & DEBUGGING",
  headline: "Your Technology. Our Expertise.",
  serviceArea: "Worldwide",
  whatsappLocal: "0770872566",
  whatsappDisplay: "+254 770 872 566",
  whatsappIntl: "254770872566",
  email: "nextroncustomercare@gmail.com",
  github: "", // optional — leave empty to hide
};

export const whatsappUrl = (message?: string) =>
  `https://wa.me/${site.whatsappIntl}` + (message ? `?text=${encodeURIComponent(message)}` : "");

export const mailtoUrl = (subject = "NEXRON IT Support Enquiry", body?: string) =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}` +
  (body ? `&body=${encodeURIComponent(body)}` : "");

export const serviceMessage = (service: string) =>
  `Hello NEXRON, I need assistance with ${service}. My issue is [brief description]. Please let me know how you can help.`;

export const defaultMessage = "Hello NEXRON, I need IT assistance.";
