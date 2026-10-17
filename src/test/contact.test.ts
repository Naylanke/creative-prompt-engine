import { describe, it, expect } from "vitest";
import { whatsappUrl, mailtoUrl, site } from "@/config/site";
import { validate } from "@/components/ContactForm";

describe("contact rules", () => {
  it("WhatsApp links use 254770872566", () => {
    expect(whatsappUrl("Hi")).toBe("https://wa.me/254770872566?text=Hi");
  });
  it("email links use the business address", () => {
    expect(mailtoUrl().startsWith("mailto:nextroncustomercare@gmail.com?subject=")).toBe(true);
    expect(site.email).toBe("nextroncustomercare@gmail.com");
  });
  it("rejects invalid email", () => {
    const e = validate({ name: "A", email: "bad", phone: "", service: "x", subject: "s", message: "m" });
    expect(e.email).toBeDefined();
  });
});
