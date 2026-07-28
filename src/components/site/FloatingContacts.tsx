import { Phone, MessageCircle } from "lucide-react";

const WA_URL =
  "https://wa.me/393273276836?text=Ciao%20Officina%20Dad%C3%A0%2C%20vorrei%20info%20sui%20corsi";

export function FloatingContacts() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3 md:hidden">
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener"
        aria-label="Scrivici su WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full shadow-lg shadow-black/40 ring-1 ring-white/10 transition-transform active:scale-95"
        style={{ backgroundColor: "#25D366" }}
      >
        <MessageCircle size={24} className="text-white" />
      </a>
      <a
        href="tel:+393273276836"
        aria-label="Chiama Officina Dadà"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-ink/90 backdrop-blur ring-1 ring-white/20 shadow-lg shadow-black/40 transition-transform active:scale-95"
      >
        <Phone size={22} className="text-paper" />
      </a>
    </div>
  );
}
