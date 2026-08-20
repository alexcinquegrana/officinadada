import { MessageCircle } from "lucide-react";

const WA_URL =
  "https://wa.me/393273276836?text=Ciao%20Officina%20Dad%C3%A0%2C%20vorrei%20prenotare%20la%20prova%20gratuita";

export function FloatingContacts() {
  return (
    <div className="fixed bottom-5 inset-x-5 z-40 md:hidden">
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener"
        aria-label="Prenota ora la prova gratuita su WhatsApp"
        className="flex w-full items-center justify-center gap-3 rounded-full px-5 py-4 text-[11px] uppercase tracking-[0.18em] text-white shadow-lg shadow-black/40 ring-1 ring-black/10 transition-transform active:scale-[0.98]"
        style={{ backgroundColor: "#25D366" }}
      >
        <MessageCircle size={18} />
        <span>Prenota ora la prova gratuita</span>
      </a>
    </div>
  );
}
