export function MobileCTABar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 md:hidden border-t border-white/15 bg-ink/95 backdrop-blur-md">
      <div className="grid grid-cols-3 gap-2 p-2">
        <a
          href="#prova"
          className="col-span-2 inline-flex items-center justify-center gap-2 bg-ember px-4 py-3 text-[11px] uppercase tracking-[0.2em] text-ink"
        >
          Prova gratuita →
        </a>
        <a
          href="https://wa.me/393273276836?text=Ciao%20Officina%20Dad%C3%A0%2C%20vorrei%20info"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contatta via WhatsApp"
          className="inline-flex items-center justify-center border border-paper/30 text-paper text-[11px] uppercase tracking-[0.18em]"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
