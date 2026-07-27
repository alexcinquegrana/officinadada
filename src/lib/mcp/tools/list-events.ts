import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "list_events",
  title: "Timeline eventi",
  description:
    "Elenca in ordine cronologico gli eventi e le tappe principali di Officina Dadà, dalla fondazione ai progetti futuri.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const events = [
      { year: "2026", title: "Ritorno all'essenza", body: "Officina Dadà rimette al centro la pura essenza della danza aerea: stupore, magia, ricerca artistica." },
      { year: "2025", title: "Born to Fly · II edizione", body: "Competizione regionale di acrobatica aerea aperta a tutti i praticanti delle discipline aeree." },
      { year: "2024 / 25", title: "Formazione istruttori", body: "Nuovi percorsi di formazione per istruttori di acrobatica aerea." },
      { year: "2024", title: "Born to Fly · I edizione", body: "Prima edizione della nostra competizione regionale di acrobatica aerea." },
      { year: "2023", title: "Strabilio Festival", body: "Al via la collaborazione con Strabilio Festival: spettacoli e progetti condivisi." },
      { year: "2022", title: "Circ'onda", body: "Nasce la collaborazione con Circ'onda." },
      { year: "2018", title: "Nasce Officina Dadà", body: "L'associazione prende vita in Valsabbia, con la volontà di diffondere le arti circensi a tutti." },
    ];
    return {
      content: [{ type: "text", text: JSON.stringify(events, null, 2) }],
      structuredContent: { events },
    };
  },
});
