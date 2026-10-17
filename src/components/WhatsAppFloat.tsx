import { MessageCircle } from "lucide-react";
import { whatsappUrl, defaultMessage } from "@/config/site";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl(defaultMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with NEXRON on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-glow transition-transform hover:scale-105"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
